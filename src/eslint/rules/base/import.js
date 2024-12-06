/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const importConfig = {
  rules: {
    /**
     * Disallow non-import statements appearing before import statements.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',
    /**
     * Require a newline after the last import/require.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'warn',
    /**
     * Disallow import of modules using absolute paths.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',
    /**
     * Disallow cyclical dependencies between modules.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import/no-cycle': 'error',
    /**
     * Disallow default exports.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'error',
    /**
     * Disallow the use of extraneous packages.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
    /**
     * Disallow mutable exports.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error',
    /**
     * Disallow importing packages through relative paths.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     */
    'import/no-relative-packages': 'warn',
    /**
     * Disallow a module from importing itself.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'error',
    /**
     * Ensures that there are no useless path segments.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     */
    'import/no-useless-path-segments': ['error'],
    /**
     * Enforce a module import order convention.
     *
     * @see  https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling'],
          ['index'],
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '^~/**',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '^@app/**',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '^@src/**',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '^@/**',
            position: 'before',
          },
        ],
      },
    ],
  },
};
