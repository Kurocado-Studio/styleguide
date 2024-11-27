<!--
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
-->

# Guides

## Prerequisites

To complete this, you will need:

- A local development environment for JavaScript
- **Node.js** (v20.x or later) and **npm** (v6.x or later) installed. You can follow
  [How to Install Node.js and Create a Local Development Environment](https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment)
  guide.
- A code editor like [Visual Studio Code](https://code.visualstudio.com/download)
- [PNPM installed](https://pnpm.io/installation)

## Initialize Your Project

First, navigate to your project's root directory in the terminal. If you don't have a project set up
yet, you can create one using the following commands:

```bash
mkdir my-project
cd my-project
pnpm init -y
```

You'll see the following output:

```
Wrote to /path/to/my-project/package.json:

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Setup

### Install @kurocado-studio/style-guide

```Bash
pnpm install --save-dev @kurocado-studio/style-guide
```

[see @kurocado-studio/style-guide on NPM](https://www.npmjs.com/package/@kurocado-studio/style-guide)

### Install Husky

```Bash
pnpm install --save-dev husky
```

### Next, enable Git hooks:

```Bash
npx husky install
```

### Add `lint-staged` to `package.json`

```json
"lint-staged": {
  "*": "pnpm run prettier-fix",
  "**/*.{ts,tsx}": ["pnpm run prettier-fix", "pnpm run eslint-check"]
}
```

## Other Configurations

- [How To Install Prettier](How-To-Install-Prettier.md)
- [How To Install ESLint](How-To-Install-ESLint.md)
