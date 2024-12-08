import unicorn from 'eslint-plugin-unicorn';

/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const unicornConfig = {
  overrides: [
    {
      files: ['**/*.tsx'], // Target only .tsx files
      plugins: { unicorn },
      rules: {
        /**
         * Require pascalCase filename case for all linted files.
         *
         * @see  https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
         */
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
            ignore: ['\\.spec\\.tsx', '\\.test\\.tsx'],
          },
        ],
      },
    },
    {
      files: ['**/*.ts', '**/*.js'], // Target other files for camelCase
      plugins: { unicorn },
      rules: {
        /**
         * Require camelCase filename case for all linted files.
         *
         * @see  https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
         */
        'unicorn/filename-case': [
          'error',
          {
            case: 'camelCase',
          },
        ],
      },
    },
  ],
  rules: {
    /**
     * Require using the `node:` protocol when importing Node.js built-in modules.
     *
     * @see  https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
     */
    'unicorn/prefer-node-protocol': 'warn',
  },
};
