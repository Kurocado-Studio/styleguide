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
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        // eslint-disable-next-line no-template-curly-in-string -- required by `semantic-release`.
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
  ],
};
