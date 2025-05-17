import unicorn from 'eslint-plugin-unicorn';

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
            ignore: [String.raw`\.spec\.tsx`, String.raw`\.test\.tsx`],
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
