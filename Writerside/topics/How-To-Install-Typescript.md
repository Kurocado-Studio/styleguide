<!--
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
-->

# How To Install TypeScript

## Prerequisites

[See Prerequisites](Guides.md)

## Step 1 — Install TypeScript

First, install TypeScript as a development dependency:

```Bash
pnpm install --save-dev typescript
```

You’ll see output similar to:

```Bash
+ typescript@<version>
added 10 packages from 5 contributors and audited 20 packages in 2s
found 0 vulnerabilities
```

## Step 2 — Configure Typescript

To configure TypeScript, create a `tsconfig.json` file at the root of your project:

### Browser Configuration using Remix

```json
{
  "extends": "@kurocado-studio/style-guide/tsconfig/remix",
  "include": ["app/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Packages written in React

```json
{
  "extends": "@kurocado-studio/style-guide/tsconfig/react",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Node.js Configuration using NestJS

```json
{
  "extends": "@kurocado-studio/style-guide/tsconfig/nestjs",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

## Step 3 — Integrate TypeScript with Your Code Editor

### Visual Studio Code

1. Install the TypeScript Extension:
   - Open VS Code
   - Go to the Extensions view by clicking the square icon in the sidebar or pressing CTRL+SHIFT+X
   - Search for “TypeScript” and install the extension
2. Configure VS Code to Use TypeScript: •
   - Open your VS Code settings (CTRL+,)
   - Ensure the following settings are configured

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
