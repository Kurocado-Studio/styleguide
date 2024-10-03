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
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
  preset: 'conventionalcommits',
};
