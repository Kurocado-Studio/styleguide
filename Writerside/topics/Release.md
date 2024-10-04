# Release

## Overview

The following sequence diagram illustrates the interactions and steps involved in the Release
workflow, triggered by a push to the `main` branch.

```mermaid
sequenceDiagram
    participant Developer
    participant GitHub as GitHub Repository
    participant Runner as GitHub Actions Runner
    participant Semantic as Semantic Release
    participant GitHubAPI as GitHub API

    Developer->>GitHub: Push to `main` Branch
    GitHub->>Runner: Trigger Release Workflow
    Runner->>GitHub: Checkout Repository
    Runner->>Runner: Install Dependencies
    Runner->>Runner: Run Lint Checks
    Runner->>Runner: Build Assets (pnpm run build)
    Runner->>Semantic: Execute `semantic-release`
    Semantic-->>Runner: nextRelease Output (version, etc.)
    alt Release Successful
        Runner->>Runner: Create Release Branch (`release-{VERSION}`)
        Runner->>Runner: Commit Changes to Release Branch
        Runner->>GitHub: Push Release Branch (`release-{VERSION}`)
        Runner->>Runner: Extract Version from `package.json`
        Runner->>Runner: Extract Changelog from `CHANGELOG.md`
        Runner->>GitHubAPI: Create Pull Request to `main`
    else Release Not Successful
        Runner->>Runner: Terminate Workflow
    end
```

## Quick Start

**Configuring Necessary Secrets**

For the Release workflow to function correctly, certain secrets must be configured in your GitHub
repository settings.

a. Navigate to Repository Settings

1. Go to your repository on GitHub.
2. Click on Settings.

b. Access Secrets

1. In the left sidebar, click on Secrets and variables > Actions.

c. Add Required Secrets

1. **GITHUB_TOKEN**: Automatically provided by GitHub Actions; no need to add manually unless
   customizing permissions.
2. **NPM_TOKEN**: Authenticates with the NPM registry to publish packages.
3. **PAT_FORCE_PUSH**: Personal Access Token with permissions to push to protected branches and
   create branches.

**Install Styleguide**

```
npm install --save-dev @kurocado-studio/styleguide
```

**Create the Release Workflow File in the Consuming Repository**

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches:
      - main

jobs:
  ci-release:
    uses: @kurocado-studio/styleguide/.github/workflows/release.yml@v1
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
      PAT_FORCE_PUSH: ${{ secrets.PAT_FORCE_PUSH }}
```
