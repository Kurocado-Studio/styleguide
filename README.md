# Kurocado Studio Style Guide

[Read the docs](https://kurocado-studio.github.io/styleguide/starter-topic.html)
[NPM Package](https://www.npmjs.com/package/@kurocado-studio/style-guide)

This repository contains the style guide for our project, specifically tailored for TypeScript. We
have used the Vercel Style Guide as a base for our TypeScript configurations, and aspire to maintain
the same high standards in our code quality.

## Introduction

This repository houses the configurations for linting and formatting tools, specifically for
TypeScript. The configurations are designed to help maintain consistent code quality and adhere to
best practices throughout the project.

We extend our thanks to [Vercel](https://vercel.com) for providing the foundation for our TypeScript
configurations. We took inspiration from their work to ensure our codebase maintains high standards
similar to those followed at Vercel.

## Prettier

Prettier is a peer dependency and should be installed at the root of your project. It handles code
formatting to ensure consistency across the codebase.

### Installation:

```bash
# If you use npm
npm install --save-dev prettier

# If you use Yarn

yarn add --dev prettier
```

To use our Prettier configuration, add the following to your `package.json`:

```json
{
  "prettier": "@kurocado-studio/styleguide/prettier"
}
```

## ESLint

ESLint is also a peer dependency and should be installed at the root of your project. It handles
linting and enforces coding standards.

### Installation:

```bash
# If you use npm
npm install --save-dev eslint

# If you use Yarn
yarn add --dev eslint
```

### Configuring ESLint

Our ESLint setup is designed specifically for TypeScript. To configure ESLint in your project,
extend our TypeScript configuration in your `.eslintrc.js`:

#### Node projects

```javascript
module.exports = {
  extends: [require.resolve('@kurocado-studio/styleguide/eslint/eslint.node')],
};
```

This setup ensures that TypeScript rules are enforced, and additional configuration for importing
modules is included to work seamlessly with TypeScript.

## TypeScript

We provide TypeScript configurations specifically for your project. The configuration extends our
base TypeScript settings, ensuring that your TypeScript setup is standardized.

### Installation:

Make sure TypeScript is installed as a dev dependency:

```bash
# If you use npm
npm install --save-dev typescript

# If you use Yarn
yarn add --dev typescript
```

### Using the Configuration

In your `tsconfig.json`, extend our base TypeScript configuration:

```json
{
  "extends": "@kurocado-studio/styleguide/typescript/base",
  "compilerOptions": {
    "outDir": "./dist",
    "module": "ESNext",
    "target": "ES2021"
  }
}
```

This ensures that your TypeScript settings are aligned with our style guide and project standards.

## Credits

#### We’ve taken inspiration and guidance from [Vercel’s Style Guide](https://vercel.com) and used their TypeScript configurations as a base for this project. We aim to match the same high standards they uphold for code quality and consistency.
