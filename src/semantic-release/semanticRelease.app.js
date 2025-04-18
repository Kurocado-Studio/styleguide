import { semanticReleaseBaseConfig } from './base.js';

export const semanticReleaseAppConfig = {
  ...semanticReleaseBaseConfig,
  plugins: [...semanticReleaseBaseConfig.plugins, '@semantic-release/github'],
};
