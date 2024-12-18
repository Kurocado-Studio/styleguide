<!--
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
-->

# How To Install Commitlint

## Prerequisites

[See Prerequisites](Guides.md)

## Step 1 — Install Commitlint

First, install Commitlint as a development dependency:

```bash
pnpm install --save-dev @commitlint/{config-conventional,cli}
```

You’ll see output similar to:

```bash
+ @commitlint/cli@<version>
+ @commitlint/config-conventional@<version>
added 10 packages from 5 contributors and audited 20 packages in 2s
found 0 vulnerabilities
```

## Step 2 — Configure Commitlint

To use our Commitlint configuration, add the following `.commitlintrc.js` file at the root of your
project.

```javascript
module.exports = {
  extends: ['@kurocado-studio/style-guide/commitlint'],
};
```

**[See commitlint configuration](https://github.com/Kurocado-Studio/styleguide/blob/main/src/commitlint/index.js)**

## Step 3 — Add Commit Message Linting Scripts

To simplify the linting process, add scripts to your `package.json`. Open `package.json` and add the
following under the `"scripts"` section:

<note>The <a href="Code-Quality.md">Code-Quality Workflow</a> uses the following commands in the
CI/CD pipeline</note>

```json
"scripts": {
  "commitlint": "pnpm exec commitlint --edit",
}
```

## Step 4 — Integrate Commitlint with Git Hooks

To enforce commit message linting automatically, integrate Commitlint with Git hooks using
[Husky](https://github.com/typicode/husky).

```Bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

Verify Integration

Now, when you make a commit, Commitlint will automatically check your commit message. If it doesn’t
comply with the defined rules, you’ll see an error message:
