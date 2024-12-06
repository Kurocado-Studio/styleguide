/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const semanticReleaseBaseConfig = {
  branches: [
    'main',
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
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
  ],
  preset: 'conventionalcommits',
};
