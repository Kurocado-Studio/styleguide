# Deploy Workflow

## Prerequisites

- [An account with fly.io](https://fly.io)
- [An account with sentry.io](https://sentry.io/welcome/)
- [An app configuration (fly.toml)](https://fly.io/docs/reference/configuration/)

## Overview

Automates the deployment process, including deploying to staging and production environments based
on branch merges. The Deploy workflow listens for pull request merges into the `dev` and `main`
branches and triggers deployments accordingly.

The following sequence diagram illustrates the interactions and steps involved in the Deploy
workflow, triggered by the merging of a pull request into the `dev` or `main` branch.

```mermaid
sequenceDiagram
    participant Developer
    participant GitHubRepo as GitHub Repository
    participant Runner as GitHub Actions Runner
    participant DeployWorkflow as Reusable Deploy Workflow
    participant FlyIO as Fly.io
    participant Sentry as Sentry

    Developer->>GitHubRepo: Merge PR into `dev` or `main` Branch
    GitHubRepo->>Runner: Trigger Deploy Workflow

    Runner->>DeployWorkflow: Invoke Reusable Deploy Workflow
    DeployWorkflow->>DeployWorkflow: Checkout Repository
    DeployWorkflow->>DeployWorkflow: Install Dependencies
    DeployWorkflow->>DeployWorkflow: Build Project

    alt Merged into `dev`
        DeployWorkflow->>FlyIO: Deploy to Staging
    else Merged into `main`
        DeployWorkflow->>FlyIO: Deploy to Production
        DeployWorkflow->>Sentry: Integrate Deployment with Sentry
    end

    FlyIO-->>DeployWorkflow: Confirmation of Deployment
    Sentry-->>DeployWorkflow: Confirmation of Integration
    DeployWorkflow-->>Runner: Deployment Successful
```

## Step 1 — Create an app with Fly Launch

Start by reading **[create an app with Fly Launch](https://fly.io/docs/launch/create/)**

## Step 2 — Create the Deployment Workflow File

Create a GitHub Actions workflow file that defines the automated steps for deploying your project to
staging and production environments

### a. Add the Workflow File

1. In your repository, navigate to the `.github/workflows/` directory. If it doesn't exist, create
   it.
2. Create a new file named `deployment.yml` (or any name of your choice).

### b. Define the Workflow

Add the following content to the `deployment.yml` file:

```yaml
name: Deploy on PR Merge

on:
  pull_request:
    types: [closed]
    branches:
      - main
      - dev

jobs:
  deploy:
    name: Deploy
    if: github.event.pull_request.merged == true
    uses: kurocado-studio/styleguide/.github/actions/deploy@main
    with:
      commit_sha: ${{ github.event.pull_request.merge_commit_sha }}
    env:
      FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
      SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
```
