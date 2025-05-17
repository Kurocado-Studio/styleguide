import { semanticReleaseBaseConfig } from './base.js';

export const semanticReleaseInternalConfig = {
  ...semanticReleaseBaseConfig,
  plugins: ['@semantic-release/commit-analyzer'],
};

export const semanticReleaseInternalMonorepoConfig = {
  ...semanticReleaseInternalConfig,
  extends: 'semantic-release-monorepo',
};
