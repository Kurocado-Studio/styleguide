const {
  ECMA_VERSION,
  JAVASCRIPT_FILES,
  TYPESCRIPT_FILES,
} = require('./constants');
const unicorn = require('./rules/base/unicorn');

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
    '@commitlint/config-conventional',
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
        project: true,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
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
