/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const commitLintConfig = {
  'body-max-line-length': [2, 'always', 200],
  extends: ['@commitlint/config-conventional'],
  'header-max-length': [2, 'always', 90],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'config',
        'docs',
        'ci',
        'release',
        'ui',
        'test',
        'api',
        'deps',
        'deps-dev',
      ],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
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

export const commitLintReferenceRequiredConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ...commitLintConfig.rules,
    'references-empty': [2, 'never'],
  },
};
