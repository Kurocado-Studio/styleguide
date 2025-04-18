import { semanticReleaseBaseConfig } from './base.js';

export const semanticReleaseInternalConfig = {
  ...semanticReleaseBaseConfig,
  plugins: ['@semantic-release/commit-analyzer'],
};
