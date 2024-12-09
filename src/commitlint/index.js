/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const commitLintConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 200],
    'header-max-length': [2, 'always', 90],
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      ['config', 'docs', 'ci', 'release', 'ui', 'api', 'deps', 'deps-dev'],
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
  ...commitLintConfig,
  rules: {
    ...commitLintConfig.rules,
    'references-empty': [2, 'never'],
  },
};
