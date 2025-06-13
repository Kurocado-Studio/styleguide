# Kurocado Studio Engineering Style Guide

| Platform   | URL                                                         |
| ---------- | ----------------------------------------------------------- |
| NPM        | <https://www.npmjs.com/package/@kurocado-studio/styleguide> |
| Repository | <https://github.com/Kurocado-Studio/styleguide>             |
| Releases   | <https://github.com/Kurocado-Studio/styleguide/releases>    |

**Standardize TypeScript projects with scalable, sharable, and forkable configurations.**

## Why This Exists

It provides a single source of truth to hanfor formatting, linting, and commit conventions, enabling
consistency across Kurocado projects, external contributor work, and client deliverables. It is
designed to be forkable and extensible while remaining flexible enough for clients to fork, adapt,
and publish their own versions under `@your-org/client-name-styleguide`.

## Getting Started

### Install the style guide

```bash
pnpm add @kurocado-studio/styleguide
```

Then follow the [official setup guide](https://kurocado-studio.github.io/styleguide) to apply
configurations.

### Enable CI/CD pipeline

- [Kurocado Studio platform](https://github.com/Kurocado-Studio/platform)
- [CI/CD Workflows](https://kurocado-studio.github.io/platform/ci-cd-workflows.html)

```yaml
# .github/workflows/lint.yml
uses: kurocado-studio/platform/.github/workflows/lint.yml@main
```

## Use Cases

1. **Internal Team Adoption** Used by Kurocado Studio developers to enforce consistent engineering
   standards across all projects.

2. **External Contributor Alignment** Freelancers and contractors follow the same rules without
   extensive onboarding.

3. **Client Collaboration** Clients may fork and publish a custom style guide to align with their
   internal policies.

4. **Rapid Prototyping** Spin up fully configured projects on CodeSandbox or similar environments
   without manual setup.

## Roadmap

- DangerJS integration
- JavaScript to TypeScript migration helpers
- Vue 3 and Astro templates
- Client-styleguide scaffolding CLI
- Contributor documentation

## Success Criteria

- **Onboarding Speed** Projects start in under 5 minutes using templates.

- **Reduction in Setup Overhead** Linting and formatting issues reduced by 25% through automation.

- **Consistency in Deliverables** All shipped code aligns with shared expectations across
  contributors and clients.

- **Client Customization** Clients are able to fork and publish their own guides under
  `@org/client-name-styleguide`.

## Documentation

Full setup instructions are available at:
[https://kurocado-studio.github.io/styleguide](https://kurocado-studio.github.io/styleguide)

## Acknowledgements

The Kurocado Studio Style Guide was inspired by the [Vercel Style Guide], particularly their
thoughtful approach to linting, formatting, and consistency in fullstack projects.

[Vercel Style Guide]: https://github.com/vercel/style-guide
