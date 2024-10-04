# Workflows

This repository utilizes a **reusable GitHub Actions workflow** to automate the release process
using `semantic-release`. This setup ensures consistent and efficient releases across multiple
projects.

## Features

- **Automated Versioning:** Automatically determines the next version based on commit messages.
- **Changelog Generation:** Generates and updates the `CHANGELOG.md` with release notes.
- **Release Branching:** Creates dedicated release branches for each version.
- **Pull Request Automation:** Automatically creates a PR from the release branch to `main` for
  review and merging.
- **Asset Attachment:** Attaches build artifacts to GitHub Releases.

## Setup Guide

Follow these steps to integrate the reusable release workflow into your project.

### 1. **Add Required Secrets**

Ensure that your repository has the necessary secrets configured:

1. **Navigate to Repository Settings:**

   - Go to your repository on GitHub.
   - Click on **Settings**.

2. **Add Secrets:**
   - Go to **Secrets and variables** > **Actions** > **New repository secret**.
   - Add the following secrets:
     - `GH_TOKEN`: Your GitHub Personal Access Token with `repo` permissions.
     - `PAT_FORCE_PUSH`: Your Personal Access Token with permissions to push to protected branches.

### 2. **Create the Reusable Workflow**

The reusable workflow is already defined in this repository at
`.github/workflows/reusable-release.yml`. If you're using this repository as the source, you can
skip this step. Otherwise, ensure that your reusable workflow is correctly defined and accessible.

### 3. **Create an Invoking Workflow**

Add a new workflow file in your repository to call the reusable release workflow.

**File Path:** `.github/workflows/call-reusable-release.yml`

**Content:**

```yaml
name: Call Reusable Release Workflow

on:
  push:
    branches:
      - main

jobs:
  release:
    uses: @kurocado-studio/style-guide/.github/workflows/reusable-release.yml
    with:
      node-version: '18'
      build-command: 'npm run build'
      release-branch-prefix: 'release-'
      release-label: 'release'
    secrets:
      GH_TOKEN: ${{ secrets.GH_TOKEN }}
      PAT_FORCE_PUSH: ${{ secrets.PAT_FORCE_PUSH }}# Workflows
```
