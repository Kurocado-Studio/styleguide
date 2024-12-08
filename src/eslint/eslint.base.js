/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import eslintPluginImport from 'eslint-plugin-import';
import vitestRecommended from 'eslint-plugin-vitest';
import globals from 'globals';

import {
  JS_EXTENSIONS_PREFIX,
  TS_EXTENSIONS_PREFIX,
  javascriptLanguageRootConfig,
  sharedEslintConfig,
  typescriptLanguageRootConfig,
} from './constants.js';
import { unicornConfig } from './rules/base/unicorn.js';

const { JAVASCRIPT_TEST_FILES, TYPESCRIPT_TEST_FILES } = sharedEslintConfig;

export const eslintBaseConfig = [
  ...unicornConfig.overrides,
  javascriptLanguageRootConfig,
  typescriptLanguageRootConfig,
  {
    env: { node: true },
    extends: ['plugin:vitest/recommended'],
    files: [...TYPESCRIPT_TEST_FILES, ...JAVASCRIPT_TEST_FILES],
    plugins: {
      import: eslintPluginImport,
      vitest: vitestRecommended,
    },
  },
  {
    files: [`vite.*.${TS_EXTENSIONS_PREFIX}`],
    rules: {
      'import/no-cycle': 'off',
    },
  },
  {
    files: [`**/*.${JS_EXTENSIONS_PREFIX}`, `**/*.${TS_EXTENSIONS_PREFIX}`],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/eslint/constants.js'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  {
    files: [
      '.commitlintrc.js',
      '.releaserc.js',
      'eslint.config.js',
      'postcss.config.js',
      'prettier.config.js',
      'vite.config.ts',
    ],
    rules: {
      'import/default': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-cycle': 'off',
      'import/no-default-export': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
  {
    ignores: ['**/*.d.ts', 'dist/*', 'build/*', 'node_modules'],
  },
];
