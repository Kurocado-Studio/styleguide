# Release Workflow

## Prerequisites

- [Semantic Release Setup](How-To-Install-Semantic-Release.md)

## Overview

Automates the release process, including versioning, changelog generation, and pull request
creation.

The following sequence diagram illustrates the interactions and steps involved in the Release
workflow, triggered by a push to the `main` branch.

```mermaid
sequenceDiagram
%% Participants
   participant Developer
   participant GitHubRepo as GitHub Repository
   participant Runner as GitHub Actions Runner
   participant SemanticRelease as Semantic Release
   participant SemanticReleasePlugins as Semantic Release Plugins
   participant GitHubAPI as GitHub API
   participant NPMRegistry as NPM Registry

%% Developer triggers the workflow
   Developer->>GitHubRepo: Push to `main` Branch or Trigger Workflow Call
   GitHubRepo->>Runner: Trigger Release Workflow

%% Runner prepares the environment
   Runner->>Runner: Checkout Repository
   Runner->>Runner: Install Dependencies
   Runner->>Runner: Build Project

%% Runner initiates Semantic Release
   Runner->>SemanticRelease: Run Semantic Release

%% Semantic Release Initialization
   SemanticRelease->>SemanticRelease: Start semantic-release (v23.1.1)
   SemanticRelease->>SemanticReleasePlugins: Load "@semantic-release/changelog" plugin
   SemanticRelease->>SemanticReleasePlugins: Load "@semantic-release/github" plugin
   SemanticRelease->>SemanticReleasePlugins: Load "@semantic-release/npm" plugin
   SemanticRelease->>SemanticReleasePlugins: Load "@semantic-release/commit-analyzer" plugin
   SemanticRelease->>SemanticReleasePlugins: Load "@semantic-release/release-notes-generator" plugin

   SemanticRelease->>GitHubAPI: verifyConditions
   GitHubAPI-->>SemanticRelease: GitHub authenticated

%% Release Process Initiation
   SemanticRelease->>SemanticRelease: Run automated release on branch "main"
   SemanticRelease->>SemanticRelease: Verify push permissions to Git repository

%% Analyze Commits
   SemanticRelease->>SemanticReleasePlugins: analyzeCommits with "@semantic-release/commit-analyzer"
   SemanticReleasePlugins-->>SemanticRelease: Determine release type

%% Determine Release Necessity
   SemanticRelease-->>Runner: Determine Next Release Version
   alt Repository is using "semantic-release.app"
      SemanticReleasePlugins->>SemanticReleasePlugins: generateNotes with "@semantic-release/release-notes-generator"
      SemanticReleasePlugins-->>SemanticRelease: Release notes generated

      SemanticReleasePlugins->>SemanticReleasePlugins: prepare changelog with "@semantic-release/changelog"
      SemanticReleasePlugins-->>SemanticRelease: CHANGELOG.md updated

   %% Create Tag
      SemanticRelease->>SemanticRelease: Create Git tag v2.1.3

   %% Publish Release
      SemanticRelease->>GitHubAPI: publish GitHub release
      GitHubAPI-->>SemanticRelease: GitHub release published
   %% Success Notification
      SemanticRelease->>Runner: Notify success
   else No Release Needed
      Note right of Runner: Subsequent steps are skipped
   end
   alt Repository is using semantic-release.app
      SemanticRelease->>NPMRegistry: Publish to NPM with "@semantic-release/npm"
      NPMRegistry-->>SemanticRelease: Confirmation of Publish
      SemanticRelease-->>Runner: Publish Successful
   else No Needed
      Note right of Runner: subsequent steps are skipped
   end

```

## Step 1 — Configure Necessary Secrets

### a. Navigate to Repository Settings

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.

### b. Access Secrets

1. In the left sidebar, click on **Secrets and variables** under the **Security** section.
2. Select **Actions** to manage secrets for GitHub Actions.

### c. Add Required Secrets

1. **GITHUB_TOKEN**: This token is automatically provided by GitHub Actions and typically does not
   need to be added manually unless you require customized permissions.
2. **NPM_TOKEN**: Personal Access Token configured with the necessary scopes (permissions) to allow
   a GitHub Actions workflow to perform force push operations on a repository.
3. **Additional Secrets**: If your workflow requires access to external services or APIs (e.g.,
   authentication tokens, API keys), add them here by clicking on **New repository secret** and
   providing the necessary name and value.

## Step 2 — Add the Release Workflow

You’ll need to add the Release Workflow YAML file to your repository. This file defines the
automated steps for releasing your project.

### a. Add the Workflow File

1. In your repository, navigate to the `.github/workflows/` directory. If it doesn't exist, create
   it.
2. Create a new file named `release.yml` (or any name of your choice).

### b. Define the Workflow

Add the following content to the `release.yml` file:

```yaml
name: Release Workflow

on:
  push:
    branches:
      - main

jobs:
  release:
    uses: kurocado-studio/styleguide/.github/workflows/composite.release.yml@main
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Full CI/CD Pipeline Example {collapsible="true"}

<code-block lang="yaml" src="ci.yml" />
