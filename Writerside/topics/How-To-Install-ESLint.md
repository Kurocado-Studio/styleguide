# How To Install ESLint

## Prerequisites

[See Prerequisites](Guides.md)

## Step 1 — Install ESLint

Next, install ESLint as a development dependency:

```bash
npm install --save-dev eslint
```

You'll see output similar to:

```
+ eslint@7.x.x
added 200 packages from 150 contributors and audited 200 packages in 5s
found 0 vulnerabilities
```

## Step 2 — Configure ESLint

To use our ESLint configuration, add the following `.eslintrc.js` file at the root of your project.
This configuration supports both browser and Node.js environments. Choose the one that fits your
project or customize as needed.

**[See all ESLint configurations available](https://github.com/Kurocado-Studio/styleguide/tree/main/src/eslint)**

### Browser Configuration

Create a `.eslintrc.js` file with the following content for browser-based projects:

```javascript
module.exports = {
  extends: [
    require.resolve('@kurocado-studio/style-guide/eslint/browser'),
    require.resolve('@kurocado-studio/style-guide/eslint/react'),
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  // ...any additional rules
};
```

### Node.js Configuration

If you're working on a Node.js project, use the following configuration:

```javascript
module.exports = {
  extends: [require.resolve('@kurocado-studio/style-guide/eslint/node')],
  parserOptions: {
    ecmaVersion: 2020,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  // ...any additional rules
};
```

## Step 3 — Add Linting Scripts

To simplify the linting process, add scripts to your `package.json`. Open `package.json` and add the
following under the `"scripts"` section:

```json
"scripts": {
  "eslint-check": "eslint --max-warnings=0 .",
  "eslint-fix": "eslint --max-warnings=0 . --fix",
}
```

## Step 4 — Run ESLint

Run the lint script to analyze your code for issues:

```bash
npm run eslint-check
```

You'll see output similar to:

```
/path/to/my-project/src/index.js
  5:10  error  'React' is defined but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)
```

To automatically fix fixable issues, run:

```bash
npm run eslint-fix
```

You'll see output similar to:

```
/path/to/my-project/src/index.js
  5:10  error  'React' is defined but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

Fixed some of the issues.
```

## Step 5 — Integrate ESLint with Your Code Editor

To enhance your workflow, integrate ESLint with your code editor to display linting errors in
real-time.

### Visual Studio Code

1. **Install the ESLint Extension:**

   - Open VS Code.
   - Go to the Extensions view by clicking the square icon in the sidebar or pressing
     `CTRL+SHIFT+X`.
   - Search for "ESLint" and install the extension by Dirk Baeumer.

2. **Configure VS Code to Use ESLint:**

   - Open your VS Code settings (`CTRL+,`).
   - Add the following settings to your `settings.json`:

     ```json
     {
       "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true
       },
       "eslint.validate": ["javascript", "javascriptreact"]
     }
     ```
