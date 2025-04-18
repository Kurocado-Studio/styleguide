import { semanticReleaseBaseConfig } from './base.js';

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
      name: 'canary',
      prerelease: true,
    },
    {
      channel: 'pre/rc',
      name: 'pre/rc',
      prerelease: 'rc',
    },
  ],
  plugins: [
    ...semanticReleaseBaseConfig.plugins,
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};
