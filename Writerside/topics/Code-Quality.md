# Code Quality

## Overview

The following sequence diagram illustrates the interactions and steps involved in the **Code
Quality** workflow, triggered by a push to the `main` branch or a pull request.

```mermaid
sequenceDiagram
    participant Developer
    participant GitHubRepo as GitHub Repository
    participant Runner as GitHub Actions Runner
    participant Linter as Linting Tools
    participant GitHubAPI as GitHub API

    Developer->>GitHubRepo: Push to `main` Branch or Create/Update Pull Request
    GitHubRepo->>Runner: Trigger Code Quality Workflow
    Runner->>GitHubRepo: Checkout Repository
    Runner->>Runner: Install Dependencies
    Runner->>Runner: Run Lint Checks
    alt Linting Successful
        Runner->>GitHubAPI: Proceed with Workflow Completion
    else Linting Failed
        Runner->>Developer: Report Linting Errors
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

**Create the Release Workflow File in the Consuming Repository**

```yaml
name: Code Quality

on:
  pull_request:
  push:
    branches:
      - main

jobs:
  code-quality:
    uses: kurocado-studio/styleguide/.github/workflows/lint.yml@main
    secrets: inherit
```
