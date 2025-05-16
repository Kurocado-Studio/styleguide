import { semanticReleaseBaseConfig } from './base';

export const semanticReleaseAppConfig = {
  ...semanticReleaseBaseConfig,
  plugins: [...semanticReleaseBaseConfig.plugins, '@semantic-release/github'],
};

export const semanticReleaseAppMonorepoConfig = {
  ...semanticReleaseAppConfig,
  extends: 'semantic-release-monorepo',
};
