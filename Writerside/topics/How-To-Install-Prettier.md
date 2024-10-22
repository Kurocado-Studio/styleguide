# How To Install Prettier

## Prerequisites

[See Prerequisites](Guides.md)

## Step 1 — Install Prettier

install Prettier as a development dependency:

```bash
pnpm install --save-dev prettier
```

You'll see the following output:

```
+ prettier@2.x.x
added 1 package from 1 contributor and audited 1 package in 2s
found 0 vulnerabilities
```

## Step 2 — Configure .prettierignore

```bash
touch .prettierignore
```

**[See Ignoring Code](https://prettier.io/docs/en/ignore.html#ignoring-files-prettierignore)**

## Step 3 — Configure Prettier

Create a `prettier.config.js` file in the root of your project:

```bash
touch prettier.config.js
```

Open `prettier.config.js` in your code editor and add the following configuration:

```javascript
module.exports = require.resolve('@kurocado-studio/style-guide/prettier');
```

**[See all configuration options](https://github.com/Kurocado-Studio/styleguide/tree/main/src/prettier/index.js)**

## Step 4 — Add a Format Script

To simplify the formatting process, add a script to your `package.json`. Open `package.json` and add
the following under the `"scripts"` section:

<note>The <a href="Code-Quality.md">Code-Quality Workflow</a> uses the following commands in the
CI/CD pipeline</note>

```json
"scripts": {
  "prettier-check": "prettier --check .",
  "prettier-fix": "prettier --check . --write",
}
```

This script tells Prettier to format all files within the `src` directory.

## Step 5 — Format Your Code

Run the format script to automatically format your code:

```bash
pnpm run prettier-fix
```

You'll see output similar to:

```
src/index.js 50ms
src/components/App.jsx 30ms
✨  Done in 1.50s.
```

## Step 6 — Integrate Prettier with Your Code Editor

To enhance your workflow, integrate Prettier with your code editor to format code on save.

### Visual Studio Code

1. **Install the Prettier Extension:**

   - Open VS Code.
   - Go to the Extensions view by clicking the square icon in the sidebar or pressing
     `CTRL+SHIFT+X`.
   - Search for "Prettier - Code formatter" and install it.

2. **Configure VS Code to Use Prettier:**

   - Open your VS Code settings (`CTRL+,`).
   - Search for "Format On Save" and enable it by checking the box.
   - Set Prettier as the default formatter by adding the following to your `settings.json`:

     ```json
     {
       "editor.defaultFormatter": "esbenp.prettier-vscode",
       "editor.formatOnSave": true
     }
     ```
