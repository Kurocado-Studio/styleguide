# Kurocado Studio Styleguide

<show-structure depth="3"/>

|                   |                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| **Owner**         | [@csantiago132](https://github.com/csantiago132)                                                   |
| **Team**          | [research-and-development](https://github.com/orgs/Kurocado-Studio/teams/research-and-development) |
| **Summary**       | A styleguide to enable developers to set up repositories quickly                                   |
| **Status**        | **Live**                                                                                           |
| **Project Board** | [](https://github.com/orgs/Kurocado-Studio/projects/5/views/1)                                     |
| **Repository**    | [](https://github.com/Kurocado-Studio/styleguide)                                                  |
| **Documentation** | [](https://kurocado-studio.github.io/styleguide/)                                                  |
| **NPM Registry**  | [](https://www.npmjs.com/package/@kurocado-studio/style-guide)                                     |
| **Releases**      | [](https://github.com/Kurocado-Studio/styleguide/releases)                                         |

## Problem Definition

This document outlines Kurocado Studio's internal Style Guide. It explores the challenges that this
initiative addresses and highlights the key reasons why companies like Vercel, and Airbnb
open-source their style guides.

Kurocado Studio is adopting the **[Epic Stack](https://www.epicweb.dev/epic-stack)**. By creating a
style guide inspired by Vercel's approach and integrating GitHub Actions, we aim to streamline
development processes, facilitate easier collaboration, enhance the overall quality of our software
products, and improving internal processes, demonstrating thought leadership in design and
development standards.

### Objective

1. Provide a comprehensive style guide based on Vercel's, enabling Kurocado Studio set up
   repositories quickly with high-quality standards.
2. Open-sourcing the style guide to position Kurocado Studio as a contributor to the developer
   community, fostering goodwill and potentially attracting collaboration opportunities
3. Open-sourcing the Style Guide fosters transparency and gives external developers insight into
   Kurocado Studio’s internal processes.

### Use Cases

1. Internal Team Adoption Kurocado Studio's internal teams will use the Style Guide as a primary
   reference point for all design and development standards

2. External Contributor Alignment External developers or freelancers working with Kurocado Studio
   will benefit from having access to the Style Guide, ensuring that their contributions are aligned
   with the studio’s quality standards from the outset.

3. Client Collaboration When collaborating with clients, the open-source Style Guide can serve as a
   transparent resource that clients can reference to understand how their projects are being built
   and designed.

### Stakeholders

|                 |                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------- |
| **Responsible** | [research-and-development](https://github.com/orgs/Kurocado-Studio/teams/research-and-development) |
| **Accountable** | [@csantiago132](https://github.com/csantiago132)                                                   |
| **Consulted**   | N/A                                                                                                |
| **Informed**    | N/A                                                                                                |

### Scope & Constraints

**In Scope:**

- Development of a comprehensive style guide covering code formatting, linting rules, commit
  conventions, configuration management, and automated workflows using GitHub Actions.
- Creation of reusable configuration files and scripts to enforce the style guide and automate
  workflows across repositories.
- Documentation and onboarding materials to assist developers in adopting the style guide and GitHub
  Actions workflows.
- Open-sourcing the style guide on GitHub and publishing it to the NPM registry.

**Out of Scope:**

- Support for languages and frameworks not currently used within Epic Stack.

**Constraints:**

- Limited development time and resources; prioritization is essential.

### Risks

- **Resource Allocation:** Limited resources might delay the implementation or lead to incomplete
  coverage of standards and workflows.
- **Open Source Vulnerabilities:** Open-sourcing the style guide may expose it to malicious
  contributions or misuse.
- **Workflow Failures:** Automated GitHub Actions workflows might fail or cause unintended
  disruptions if not properly configured and tested.

## Solution Definition

### User flows

1. **Initial Setup:**

   - Developer clones the repository.
   - Installs necessary dependencies via NPM.

2. **Development Workflow:**
   - Developer writes code adhering to the style guide.
   - Pre-commit hooks automatically lint and format code.
   - GitHub Actions automatically run tests, linting, and build processes on each commit/pull
     request.
   - Pull requests are reviewed for compliance with the style guide and successful workflow runs.

## Launch Readiness

### Key Milestones

|                |                                                               |
| -------------- | ------------------------------------------------------------- |
| Stable Release | [](https://github.com/Kurocado-Studio/styleguide/milestone/1) |

### Testing plan

- **Integration Testing:** Apply the style guide and GitHub Actions workflows to a set of
  repositories and verify that the setup process works seamlessly.
- **User Acceptance Testing (UAT):** Collect feedback from developers during the beta phase to
  identify any issues or areas for improvement.
- **Continuous Integration (CI) Validation:** Integrate the style guide and GitHub Actions workflows
  with CI pipelines to automatically enforce code standards and workflow integrity during builds.

### Marketing plan

- **Documentation:** Create comprehensive documentation and onboarding guides to facilitate
  adoption.
- **Community Engagement:** Promote the open-source style guide and workflows through blog posts,
  social media, and developer forums to attract external contributors.

### Legal checks

- **License Compliance:** Ensure that all dependencies, configurations, and GitHub Actions workflows
  comply with open-source licenses.
- **Intellectual Property:** Verify that no proprietary code or configurations are inadvertently
  included in the open-source repository.
- **Terms of Use:** Update the repository's README, LICENSE, and CONTRIBUTING files to clearly state
  usage terms and contribution guidelines.
- **Data Privacy:** Ensure that no sensitive information is exposed through documentation,
  configuration files, or workflows.

## Success

- **Consistency Across Projects**: Measured by the reduction in discrepancies in design and code
  standards across internal and client projects.
- **Community Engagement**: Number of contributions, issues raised, and discussions initiated on the
  open-source Style Guide repository.
- **Industry Recognition**: Media mentions, citations, or adoption of the Kurocado Studio Style
  Guide by other developers or companies.

### Next steps

- **Continuous Improvement:** Regularly update the style guide and GitHub Actions workflows based on
  feedback and evolving best practices.
- **Community Building:** Foster a community around the style guide and workflows by organizing
  events, hackathons, and collaborative projects to encourage external contributions.

### See Also:

- **[Epic Stack documentation](https://github.com/epicweb-dev/epic-stack/tree/main/docs)**
- **[Epic Stack repository](https://github.com/epicweb-dev/epic-stack)**
- **[Epic Stack decisions](https://github.com/epicweb-dev/epic-stack/tree/main/docs/decisions)**
- **[Epic Stack website](https://www.epicweb.dev/epic-stack)**
