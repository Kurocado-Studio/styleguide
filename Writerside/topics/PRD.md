# PRD

This Project Requirements Document (PRD) outlines the objectives, scope, and requirements for
implementing the Kurocado Studio Style Guide. Refer to the [Project Charter](starter-topic.md) for
foundational project information.

## **Deliverables**

- **Remix Public Repository Template**

  - GitHub:
    [styleguide-remix-template](https://github.com/Kurocado-Studio/styleguide-remix-template)
  - CodeSandbox:
    [Remix Template Sandbox](https://codesandbox.io/p/sandbox/github/Kurocado-Studio/styleguide-remix-template)

- **NestJS Public Repository Template**
  - GitHub:
    [styleguide-nests-template](https://github.com/Kurocado-Studio/styleguide-nests-template)
  - CodeSandbox:
    [NestJS Template Sandbox](https://codesandbox.io/p/sandbox/github/Kurocado-Studio/styleguide-nests-template)

## **Target Users**

- Internal Kurocado Studio engineering teams.
- External contributors and clients partnering with Kurocado Studio.

## **Requirements Matrix**

| Must Have                                                                         | Should Have                                      | Could Have                             |
| --------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------- |
| **Shared Configurations:**                                                        | Enhanced analytics tracking for usage metrics    | Additional templates (Next.js, Svelte) |
| - [CommitLint Configuration](How-To-Install-Commitlint.md)                        | Integration with containerization tools (Docker) |                                        |
| - [ESLint Configuration](How-To-Install-ESLint.md)                                |                                                  |                                        |
| - [Prettier Configuration](How-To-Install-Prettier.md)                            |                                                  |                                        |
| - [Semantic Release Configuration](How-To-Install-Semantic-Release.md)            |                                                  |                                        |
| - TypeScript Configuration                                                        |                                                  |                                        |
| - Vite Configuration                                                              |                                                  |                                        |
| **Templates:**                                                                    |                                                  |                                        |
| - [Remix Template](https://github.com/Kurocado-Studio/styleguide-remix-template)  |                                                  |                                        |
| - NextJS React Template                                                           |                                                  |                                        |
| - [NestJS Template](https://github.com/Kurocado-Studio/styleguide-nests-template) |                                                  |                                        |
| **Non-Functional:**                                                               |                                                  |                                        |
| - Templates accessible via CodeSandbox                                            |                                                  |                                        |
| - Templates publicly cloneable via GitHub                                         |                                                  |                                        |

## **User Flows**

### **Installation Workflow**

1. User initiates a new repository from provided public templates.
2. User installs the style guide via NPM:
   - Executes necessary dependency installations using `pnpm`.
3. User clones the style guide repository from GitHub:
   - Installs dependencies with `pnpm`.
   - Customize ESLint or other configuration files.
   - Publishes updates to the style guide.
   - Integrates style guide within additional repositories.

### **Development Workflow**

- Developers commit code adhering strictly to the defined style guidelines.
- Automated pre-commit hooks run linting and formatting checks.
- GitHub Actions automatically execute tests, linting, and build processes on commits or pull
  requests.
- Pull requests undergo peer review for style guide compliance and verification of GitHub Action
  results.
- Successful merges trigger deployments via GitHub Actions workflows.

## **Risks**

- **Resource Allocation:** Insufficient resources may delay project completion or compromise feature
  completeness.

  - **Mitigation:** Allocate dedicated CI/CD and documentation specialists.

- **Lack of Adoption:** Risk of limited adoption or disruptions caused by misconfiguration of GitHub
  Actions workflows.
  - **Mitigation:**
    - Create detailed step-by-step installation and customization guides
    - Gather and incorporate early feedback from internal team trials.
