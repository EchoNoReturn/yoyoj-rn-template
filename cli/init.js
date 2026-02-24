#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

program
  .argument("<project-name>", "Name of the new project")
  .option(
    "-v, --version <react-native-version>",
    "react native verison",
    "0.84.0",
  )
  .action((projectName, options) => {
    const targetDir = path.join(process.cwd(), projectName);

    if (fs.existsSync(targetDir)) {
      console.error(`Error: Directory "${projectName}" already exists.`);
      process.exit(1);
    }

    console.log(`Creating a new React Native project: ${projectName}`);

    try {
      // 1. Initialize React Native project
      execSync(
        `npx @react-native-community/cli@latest init ${projectName} --version ${options.version} --skip-install`,
        { stdio: "inherit" },
      );
      // 2. Copy template files (excluding package.json)
      const templateDir = path.resolve(__dirname, "../template");
      const copyDir = (src, dest) => {
        const items = fs.readdirSync(src, { withFileTypes: true });
        for (const item of items) {
          const srcPath = path.join(src, item.name);
          const destPath = path.join(dest, item.name);

          if (item.name === "package.json") {
            continue; // Skip package.json
          }

          if (item.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyDir(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      };

      fs.mkdirSync(targetDir, { recursive: true });
      copyDir(templateDir, targetDir);

      // 3. Update package.json (the one created by RN CLI)
      const packageJsonPath = path.join(targetDir, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      packageJson.scripts["pod-install"] =
        "npx pod-install --project-directory=ios";
      packageJson.codegenConfig = {
        name: `${projectName}Spec`,
        type: "all",
        jsSrcsDir: "spec",
        android: {
          javaPackageName: `com.${projectName}.spec`,
        },
      };
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        "utf-8",
      );
      // Update tsconfig.json
      const tsconfigPath = path.join(targetDir, "tsconfig.json");
      const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
      if (tsconfig.compilerOptions) {
        tsconfig.compilerOptions.ignoreDeprecations = "6.0";
        // Keep baseUrl for path alias support, ignoreDeprecations will suppress the warning
        if (!tsconfig.compilerOptions.baseUrl) {
          tsconfig.compilerOptions.baseUrl = ".";
          tsconfig.compilerOptions.paths = {
            "@/*": ["./src/*"],
          };
        }
      }

      fs.writeFileSync(
        tsconfigPath,
        JSON.stringify(tsconfig, null, 2),
        "utf-8",
      );
      // Remove default and App.tsx
      fs.unlinkSync(path.join(targetDir, "App.tsx"));

      // 4. Install dependencies dynamically
      console.log("Installing dependencies...");
      execSync("corepack enable yarn", { stdio: "pipe" });
      execSync("corepack prepare yarn@stable --activate", { stdio: "pipe" });

      // Install required dependencies with @latest
      const dependencies = [
        "@react-navigation/native",
        "@react-navigation/native-stack",
        "axios",
        "dayjs",
        "i18next",
        "react-i18next",
        "react-native-mmkv",
        "react-native-nitro-modules",
        "react-native-screens",
        "react-native-svg",
        "zod",
      ];

      const removedDependencies = ["@react-native/new-app-screen"];

      const devDependencies = [
        "react-native-svg-transformer",
        "babel-plugin-module-resolver",
        "@babel/plugin-transform-export-namespace-from",
      ];

      for (const dep of dependencies) {
        try {
          console.log(`Installing ${dep}...`);
          execSync(`cd ${projectName} && yarn add ${dep}`, { stdio: "pipe" });
        } catch (error) {
          console.warn(`Failed to install ${dep}: ${error.message}`);
        }
      }

      for (const dep of removedDependencies) {
        try {
          console.log(`Removing ${dep}...`);
          execSync(`cd ${projectName} && yarn remove ${dep}`, {
            stdio: "pipe",
          });
        } catch (error) {
          console.warn(`Failed to remove ${dep}: ${error.message}`);
        }
      }

      for (const devDep of devDependencies) {
        try {
          console.log(`Installing Dev Dependency ${devDep}...`);
          execSync(`cd ${projectName} && yarn add -D ${devDep}`, {
            stdio: "pipe",
          });
        } catch (error) {
          console.warn(
            `Failed to install Dev Dependency ${devDep}: ${error.message}`,
          );
        }
      }

      // Install remaining dependencies from RN CLI package.json
      execSync(`cd ${projectName} && yarn install`, { stdio: "pipe" });

      // 5. git init
      execSync(`cd ${projectName} && git init`, { stdio: "pipe" });

      // 6. commit initial files
      execSync(
        `cd ${projectName} && git add . && git commit -m "Initial Project Setup"`,
        { stdio: "pipe" },
      );

      console.log(`Project "${projectName}" created successfully. You can run "cd ${projectName} && yarn start" to get started.`);
    } catch (error) {
      console.error("Error creating project:", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
