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
    "0.82.1"
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
        { stdio: "inherit" }
      );
      // 2. Copy template files
      const templateDir = path.resolve(__dirname, "../template");
      fs.cpSync(templateDir, targetDir, {
        recursive: true,
        force: true,
        overwrite: true,
      });
      // 3. Update package.json
      const packageJsonPath = path.join(targetDir, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      packageJson.name = projectName;
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        "utf-8"
      );
      // update tsconfig.json
      const tsconfigPath = path.join(targetDir, "tsconfig.json");
      const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));
      tsconfig.compilerOptions = {
        ...(tsconfig.compilerOptions || {}),
        baseUrl: '.',
        paths: {
          "@/*": ["./src/*"]
        },
      }
      fs.writeFileSync(
        tsconfigPath,
        JSON.stringify(tsconfig, null, 2),
        "utf-8"
      );
      // Remove default and App.tsx
      fs.unlinkSync(path.join(targetDir, "App.tsx"));
      // 4. Install dependencies, use yarn
      execSync("corepack enable yarn", { stdio: "inherit" });
      execSync("corepack prepare yarn@stable --activate", { stdio: "inherit" });
      execSync(`cd ${projectName} && yarn install`, { stdio: "inherit" });
      // 5. git init
      execSync(`cd ${projectName} && git init`, { stdio: "inherit" });

      console.log(`Project "${projectName}" created successfully.`);
    } catch (error) {
      console.error("Error creating project:", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
