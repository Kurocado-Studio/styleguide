Here's a step-by-step guide to set up a boilerplate folder for documentation using WriterSide and a
GitHub action that triggers on merges:

### 1. **Create the Folder Structure**

First, set up your project directory structure. Here's a basic example:

```
/PROJECT_NAME
│
├── /.github
│   └── /workflows
│       └── build_docs.yml   # Your GitHub Action for deploying the docs
│
├── /docs                    # The folder where you will store your Writerside documentation
│   └── (your docs files)
│
├── writerside-config.xml     # Writerside configuration (adjust as needed)
├── .gitignore                # Ignoring unnecessary files (optional)
├── README.md                 # Project readme
└── package.json              # Optional: If using npm scripts or dependencies
```

### 2. **Set Up Writerside Configuration**

In `writerside-config.xml`, configure your Writerside project as needed. If you're using default
settings from Writerside, you can generate or configure this file based on your Writerside setup.
Example content could look like this:

```xml
<project>
  <modules>
    <module name="YOUR PROJECT DOCUMENTATION NAME" path="docs" />
  </modules>
</project>
```

### 3. **Create GitHub Action Workflow**

In the `.github/workflows/` folder, create a file named `build_docs.yml` (or use any appropriate
name). This will handle the build and deploy of your Writerside documentation using the GitHub Pages
Action.

```yaml
name: Build documentation

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  id-token: write
  pages: write

env:
  INSTANCE: Writerside/XX
  ARTIFACT: webHelpXX2-all.zip
  DOCKER_VERSION: 242.21870

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Build Writerside docs using Docker
        uses: JetBrains/writerside-github-action@v4
        with:
          instance: ${{ env.INSTANCE }}
          artifact: ${{ env.ARTIFACT }}
          docker-version: ${{ env.DOCKER_VERSION }}

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: docs
          path: |
            artifacts/${{ env.ARTIFACT }}
          retention-days: 7

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: docs

      - name: Unzip artifact
        run: unzip -O UTF-8 -qq ${{ env.ARTIFACT }} -d dir

      - name: Setup Pages
        uses: actions/configure-pages@v4.0.0

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3.0.1
        with:
          path: dir

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4.0.4
```

### 4. **Customize Your Boilerplate**

- Update the `INSTANCE` and `ARTIFACT` variables to match your specific Writerside setup.
- You can add specific documentation in the `/docs` folder using Writerside's structure.
- Customize your `.gitignore` to exclude any build artifacts or unnecessary files. Here’s a sample
  `.gitignore`:

```gitignore
# Writerside build artifacts
artifacts/
dir/
```

### 5. **Push to GitHub**

- Initialize a Git repository if you haven't yet:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 6. **GitHub Pages Settings**

In your GitHub repository settings, make sure that GitHub Pages is set to serve content from the
`gh-pages` branch (which the action will automatically handle).

This setup will automatically build and deploy your Writerside documentation to GitHub Pages every
time you merge into the `main` branch.
