/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
const {
  ECMA_VERSION,
  JAVASCRIPT_FILES,
  JAVASCRIPT_TEST_FILES,
  TYPESCRIPT_FILES,
  TYPESCRIPT_TEST_FILES,
} = require('./constants');
const unicorn = require('./rules/base/unicorn');
const vitest = require('./rules/vitest');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    [`es${ECMA_VERSION}`]: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'prettier',
    require.resolve('./rules/base'),
  ],
  ignorePatterns: ['!.*.js'],
  overrides: [
    ...unicorn.overrides,
    {
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        project: true,
        requireConfigFile: false,
      },
    },
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      files: TYPESCRIPT_FILES,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: ECMA_VERSION,
        project: '../../tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
    },
    {
      env: { node: true },
      extends: ['plugin:vitest/recommended'],
      files: [...TYPESCRIPT_TEST_FILES, ...JAVASCRIPT_TEST_FILES],
      plugins: ['vitest'],
      rules: {
        ...vitest.rules,
        '@typescript-eslint/no-unsafe-call': 'off',
        'import/order': 'off',
      },
    },
    {
      files: ['vitest.web.ts', 'vitest.node.ts'],
      rules: {
        'import/no-cycle': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'unicorn', 'import', 'eslint-plugin-tsdoc'],
  reportUnusedDisableDirectives: true,
  settings: {
    'import/resolver': { node: {} },
  },
};
