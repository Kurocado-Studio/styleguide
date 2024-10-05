# Kurocado Studio Style Guide

[NPM Package](https://www.npmjs.com/package/@kurocado-studio/style-guide) |
[GitHub Repository](https://github.com/Kurocado-Studio/styleguide)

This repository contains the style guide for our project, specifically tailored for TypeScript. We
have used the [Vercel Style Guide](https://github.com/vercel/style-guide) as a base for our
TypeScript configurations, and aspire to maintain the same high standards in our code quality. We
extend our thanks to [Vercel](https://github.com/vercel/style-guide) for open-sourcing their
styleguide

## Overview

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)
- [Commitlint](#commitlint)
- [Semantic Release](#semantic-release)
- [GitHub Actions](#github-actions)

### Installation

```bash
# If you use npm
npm install --save-dev @kurocado-studio/style-guide

# If you use Yarn

yarn add --dev @kurocado-studio/style-guide
```

## Dependencies

Below are the CLI dependencies needed to run the styleguide configurations

```json
{
  "devDependencies": {
    "@commitlint/cli": "19.0.3",
    "@commitlint/config-conventional": "19.0.3",
    "eslint": "8.57.0",
    "husky": "9.0.11",
    "prettier": "3.3.3",
    "semantic-release": "23.0.2",
    "typescript": "5.3.3"
  }
}
```

## Scripts

Add the following scripts to `package.json`

```json
{
  "scripts": {
    "commitlint": "pnpm exec commitlint --edit",
    "eslint-check": "eslint --max-warnings=0 .",
    "prepare": "husky install",
    "prettier-check": "prettier --check .",
    "prettier-fix": "prettier --check . --write",
    "semantic-release": "semantic-release"
  }
}
```

## Prettier

To use our Prettier configuration, add the following `prettier.config.js` at the root of the
project:

```javascript
module.exports = require.resolve('@kurocado-studio/style-guide/prettier');
```

[See Prettier rules](https://github.com/Kurocado-Studio/styleguide/blob/main/src/prettier/)

## ESLint

To use our ESLint configuration, add the following `.eslintrc.js` at the root of the project:

### Browser

```javascript
module.exports = {
  extends: [
    require.resolve('@kurocado-studio/style-guide/eslint/browser'),
    // or cretae one with Vue-specific rules
    require.resolve('@kurocado-studio/style-guide/eslint/react'),
  ],
  parserOptions: {
    // your parserOptions, for example:
    ecmaVersion: 2020,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  // ...any additional rules
};
```

### Node

```javascript
module.exports = {
  extends: [require.resolve('@kurocado-studio/style-guide/eslint/node')],
  parserOptions: {
    // your parserOptions, for example:
    ecmaVersion: 2020,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  // ...any additional rules
};
```

[See ESLint rules](https://github.com/Kurocado-Studio/styleguide/tree/main/src/eslint)

## Commitlint

To use our Commitlint configuration, add the following `.commitlintrc.js` at the root of the
project:

```javascript
module.exports = {
  extends: ['@kurocado-studio/style-guide/commitlint'],
};
```

[See Commitlint rules](https://github.com/Kurocado-Studio/styleguide/tree/main/src/commitlint)

## Semantic Release

To use our Semantic Release configuration, add the following `.releaserc.js` at the root of the
project:

### For apps and web-based projects

```javascript
module.exports = require.resolve('@kurocado-studio/style-guide/release/app');
```

### For packages that will be released publicly on NPM

```javascript
module.exports = require.resolve('@kurocado-studio/style-guide/release/npm');
```

[See Semantic Release](https://github.com/Kurocado-Studio/styleguide/tree/main/src/semantic-release)

## TypeScript

In your `tsconfig.json`, extend our base TypeScript configuration

### TypeScript Base

```json
{
  "extends": "@kurocado-studio/styleguide/tsconfig/base"
}
```

### TypeScript Browser

```json
{
  "extends": "@kurocado-studio/styleguide/tsconfig/web"
}
```

### TypeScript Node

```json
{
  "extends": "@kurocado-studio/styleguide/tsconfig/node"
}
```

[See Typescript configs](https://github.com/Kurocado-Studio/styleguide/tree/main/src/tsconfig)

## GitHub Actions

This repository provides a standardized and reusable GitHub Actions workflow setup. The setup
includes three primary workflows designed to enhance your project’s CI/CD pipeline:

1. [Release Workflow](Release.md): Automates the release process, including versioning, changelog
   generation, and pull request creation.
2. [Code Quality Workflow](Code-Quality.md): Ensures code consistency and quality through automated
   linting and formatting checks.
3. [Writerside Documentation Workflow](Writerside.md): Builds and deploys project documentation
   using Docker-based builders.
