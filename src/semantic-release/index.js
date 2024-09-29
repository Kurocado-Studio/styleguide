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
    '@semantic-release/changelog',
    '@semantic-release/commit-analyzer',
    '@semantic-release/github',
    '@semantic-release/npm',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/git',
      {
        // eslint-disable-next-line no-template-curly-in-string -- required by `semantic-release`.
        message: 'release: ${nextRelease.version}',
      },
    ],
  ],
};
