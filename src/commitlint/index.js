module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [1, 'never'],
    'scope-enum': [
      2,
      'always',
      ['deps', 'eslint', 'golang', 'prettier', 'typescript'],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'release',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
