<!--
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
-->

# How To Install Semantic Release

## Prerequisites

[See Prerequisites](Guides.md)

## Step 1 — Install Semantic Release

```Bash
pnpm install --save-dev semantic-release
```

You’ll see output similar to:

```Bash
+ semantic-release@<version>
added 15 packages from 10 contributors and audited 30 packages in 5s
found 0 vulnerabilities
```

## Step 2 — Create a Semantic Release Configuration File

To use our Semantic Release configuration, add the following `.releaserc.js` file at the root of
your project.

### For Apps and Web-Based Projects

```javascript
module.exports = require.resolve('@kurocado-studio/style-guide/release/app');
```

### For Packages That Will Be Released Publicly on NPM

```javascript
module.exports = require.resolve('@kurocado-studio/style-guide/release/npm');
```

## Step 3 — Configure Git Hooks

To ensure that Semantic Release runs correctly during your CI/CD process, you should add a Git hook
in your configuration.

**Optional: you can add a prepublish or postversion hook with Husky:**

```Bash
npx husky add .husky/prepublish 'npx semantic-release'
```

## Step 4 — Run Semantic Release

<note>The <a href="Release.md">Release Workflow</a> uses the following command in the CI/CD
pipeline</note>

```Bash
npx semantic-release
```
