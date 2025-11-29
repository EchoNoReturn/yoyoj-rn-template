# YoyoJ React Native 模板

一个健壮的、生产就绪的 React Native 模板，基于 TypeScript 构建，专注于可扩展性、可维护性和最佳实践。

## 🚀 快速开始（推荐）

使用此模板启动新项目的最简单方法是使用 `npx`。此命令将自动下载模板并初始化您的新项目。

```bash
npx yoyoj-rn <projectName>
```

例如：

```bash
npx yoyoj-rn MyAwesomeApp
```

## ✨ 特性

- **TypeScript**: 完全类型化，提供更好的开发体验和代码质量。
- **React Navigation**: 预配置的导航设置。
- **国际化 (i18n)**: 多语言支持已就绪。
- **主题系统**: 易于定制的主题（支持深色/浅色模式）。
- **关注点分离**: 清晰的架构，分离 UI、逻辑和配置。

## 📂 项目结构

项目遵循严格的目录结构，以确保代码易于查找和维护。

```
src/
├── components/    # 可复用的 UI 组件
│   └── atoms/     # 最小组件（图标、资源）
├── config/        # 应用配置（环境变量、类型）
├── hooks/         # 自定义 React hooks（业务逻辑）
├── navigation/    # 导航配置和路径
├── screens/       # 屏幕组件（页面）
├── services/      # API 服务和外部集成
├── themes/        # 样式系统（颜色、字体、布局）
├── translations/  # i18n 翻译文件
└── utils/         # 辅助函数
```

## 🏗 架构与最佳实践

### 关注点分离 (Separation of Concerns)

本模板的设计遵循“关注点分离”原则，以保持代码库的整洁和可扩展性：

- **UI (Components & Screens)**: 仅专注于渲染界面。逻辑应尽量减少。
- **逻辑 (Hooks)**: 复杂的业务逻辑和状态管理被提取到 `src/hooks` 中的自定义 hooks 中。
- **配置 (Config & Themes)**: 全局设置和样式集中管理。`src/themes` 管理视觉设计系统，而 `src/config` 处理环境变量。
- **数据/服务 (Services)**: API 调用和外部数据处理隔离在 `src/services` 目录中。

## 🛠 其他使用方式

虽然推荐使用 `npx`，但如果您想为模板本身做贡献或进行修改，也可以直接克隆仓库。

```bash
git clone https://github.com/EchoNoReturn/yoyoj-rn-template.git
```

但是，对于创建新应用，CLI 工具会自动处理手动操作所需的重命名和初始化步骤。
