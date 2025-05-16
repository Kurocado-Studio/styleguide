import { semanticReleaseBaseConfig } from './base';

export const semanticReleaseNpmConfig = {
  ...semanticReleaseBaseConfig,
  branches: [
    ...semanticReleaseBaseConfig.branches,
    {
      channel: 'alpha',
      name: 'alpha',
      prerelease: true,
    },
    {
      channel: 'beta',
      name: 'beta',
      prerelease: true,
    },
    {
      channel: 'canary',
      name: 'develop',
      prerelease: true,
    },
    {
      channel: 'pre/rc',
      name: 'pre',
      prerelease: 'rc',
    },
  ],
  plugins: [
    ...semanticReleaseBaseConfig.plugins,
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};

export const semanticReleaseNpmMonorepoConfig = {
  ...semanticReleaseNpmConfig,
  extends: 'semantic-release-monorepo',
};
