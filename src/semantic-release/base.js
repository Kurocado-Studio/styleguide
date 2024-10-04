module.exports = {
  branches: [
    'main',
    {
      channel: 'canary',
      name: 'canary',
      prerelease: true,
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
