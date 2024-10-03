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
    '@semantic-release/release-notes-generator',
    [
      'semantic-release-github-pullrequest',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        baseBranch: 'main',
        branch: 'release',
        // eslint-disable-next-line no-template-curly-in-string -- required by `semantic-release`.
        message: 'chore(release): ${nextRelease.version} [skip ci]',
        pullrequestBody:
          // eslint-disable-next-line no-template-curly-in-string -- required by `semantic-release`.
          'This is an automated pull request for release version ${nextRelease.version}.',
        // eslint-disable-next-line no-template-curly-in-string -- required by `semantic-release`.
        pullrequestTitle: 'chore(release): ${nextRelease.version}',
      },
    ],
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};
