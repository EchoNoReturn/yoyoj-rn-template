# YoyoJ React Native Template

[中文文档](./README_zh-CN.md)

A robust, production-ready React Native template built with TypeScript, focusing on scalability, maintainability, and best practices.

## 🚀 Quick Start (Recommended)

The easiest way to start a new project with this template is using `npx`. This command will automatically download the template and initialize your new project.

```bash
npx yoyoj-rn <projectName>
```

For example:

```bash
npx yoyoj-rn MyAwesomeApp
```

## ✨ Features

- **TypeScript**: Fully typed for better developer experience and code quality.
- **React Navigation**: Pre-configured navigation setup.
- **Internationalization (i18n)**: Multi-language support ready to go.
- **Theming System**: Easy to customize themes (Dark/Light mode support).
- **Separation of Concerns**: Clean architecture separating UI, logic, and configuration.

## 📂 Project Structure

The project follows a strict directory structure to ensure code is easy to find and maintain.

```
src/
├── components/    # Reusable UI components
│   └── atoms/     # Smallest components (icons, assets)
├── config/        # App configuration (env vars, types)
├── hooks/         # Custom React hooks (business logic)
├── navigation/    # Navigation configuration and paths
├── screens/       # Screen components (pages)
├── services/      # API services and external integrations
├── themes/        # Styling system (colors, fonts, layout)
├── translations/  # i18n translation files
└── utils/         # Helper functions
```

## 🏗 Architecture & Best Practices

### Separation of Concerns

This template is designed with the "Separation of Concerns" principle in mind to keep the codebase clean and scalable:

- **UI (Components & Screens)**: Focus solely on rendering the interface. Logic should be minimal here.
- **Logic (Hooks)**: Complex business logic and state management are extracted into custom hooks inside `src/hooks`.
- **Configuration (Config & Themes)**: Global settings and styles are centralized. `src/themes` manages the visual design system, while `src/config` handles environment variables.
- **Data/Services**: API calls and external data handling are isolated in the `src/services` directory.

## 🛠 Alternative Usage

While `npx` is recommended, you can also use this template by cloning the repository directly if you want to contribute or modify the template itself.

```bash
git clone https://github.com/EchoNoReturn/yoyoj-rn-template.git
```

However, for creating a new app, the CLI tool handles renaming and initialization steps that you would otherwise have to do manually.
