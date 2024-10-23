module.exports = {
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
