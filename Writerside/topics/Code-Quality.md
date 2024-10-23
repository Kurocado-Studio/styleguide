# Code Quality Workflow

## Prerequisites

- [Prettier Setup](How-To-Install-Prettier.md)
- [ESLint Setup](How-To-Install-ESLint.md)
- [Commitlint Setup](How-To-Install-Commitlint.md)

## Overview

Ensures code consistency and quality through automated linting and formatting checks.

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

## Step 1 — Configure Necessary Secrets

For the Code Quality workflow to function correctly, certain secrets must be configured in your
GitHub repository settings. These secrets ensure secure access to necessary tools and services
during the workflow execution.

### a. Navigate to Repository Settings

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.

### b. Access Secrets

1. In the left sidebar, click on **Secrets and variables** under the **Security** section.
2. Select **Actions** to manage secrets for GitHub Actions.

### c. Add Required Secrets

1. **GITHUB_TOKEN**: This token is automatically provided by GitHub Actions and typically does not
   need to be added manually unless you require customized permissions.
2. **Additional Secrets**: If your workflow requires access to external services or APIs (e.g.,
   authentication tokens, API keys), add them here by clicking on **New repository secret** and
   providing the necessary name and value.

## Step 2 — Create the Code Quality Workflow File

Create a GitHub Actions workflow file that defines the steps for automated linting and formatting
checks. This workflow will be triggered by pushes to the `main` branch or the creation/update of
pull requests.

### a. Add the Workflow File

1. In your repository, navigate to the `.github/workflows/` directory. If it doesn't exist, create
   it.
2. Create a new file named `code-quality.yml` (or any name of your choice).

### b. Define the Workflow

Add the following content to the `code-quality.yml` file:

```yaml
name: Code Quality

on:
  pull_request:
  push:
    branches:
      - main

jobs:
  code-quality:
    uses: kurocado-studio/styleguide/.github/workflows/composite.lint.yml@main
    secrets: inherit
```

### Full CI/CD Pipeline Example {collapsible="true"}

<code-block lang="yaml" src="ci.yml" />
