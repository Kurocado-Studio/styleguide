module.exports = {
  overrides: [
    {
      files: ['**/*.tsx'], // Target only .tsx files
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
          },
        ],
      },
    },
    {
      files: ['**/*.ts', '**/*.js'], // Target other files for kebab-case
      rules: {
        /**
         * Require kebabCase filename case for all linted files.
         *
         * @see  https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
         */
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
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
