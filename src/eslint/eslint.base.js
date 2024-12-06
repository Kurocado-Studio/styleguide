/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */

/**
 * @see https://github.com/eslint/eslint/issues/3458
 */
// Core ESLint Configs
import babelParser from '@babel/eslint-parser';
import eslintRecommended from '@eslint/js';
// TypeScript Configs
import tsRecommended from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import reactRecommended from 'eslint-plugin-react';
import reactHooksRecommended from 'eslint-plugin-react-hooks';
import tsdocRecommended from 'eslint-plugin-tsdoc';
import unicornRecommended from 'eslint-plugin-unicorn';
import vitestRecommended from 'eslint-plugin-vitest';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { sharedEslintConfig } from './constants.js';
import { base } from './rules/base/index.js';
import { unicornConfig } from './rules/base/unicorn.js';
import { vitestConfig } from './rules/vitest/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {
  ECMA_VERSION,
  JAVASCRIPT_FILES,
  JAVASCRIPT_TEST_FILES,
  TYPESCRIPT_FILES,
  TYPESCRIPT_TEST_FILES,
} = sharedEslintConfig;

export const eslintBaseConfig = [
  base,
  ...unicornConfig.overrides,
  {
    ignores: ['!.*.js'],
    languageOptions: {
      globals: {
        [`es${ECMA_VERSION}`]: true,
      },
      parserOptions: {
        ecmaVersion: ECMA_VERSION,
        project: true,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsRecommended,
      eslintRecommended,
      import: eslintPluginImport,
      prettierConfig,
      react: reactRecommended,
      'react-hooks': reactHooksRecommended,
      tsdoc: tsdocRecommended,
      unicorn: unicornRecommended,
      vitest: vitestRecommended,
    },
    rules: {},
    settings: {
      'import/resolver': { node: {} },
    },
  },
  {
    files: JAVASCRIPT_FILES,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        project: true,
        requireConfigFile: false,
      },
    },
  },
  {
    files: TYPESCRIPT_FILES,
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: ECMA_VERSION,
        project: '../../tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    env: { node: true },
    extends: ['plugin:vitest/recommended'],
    files: [...TYPESCRIPT_TEST_FILES, ...JAVASCRIPT_TEST_FILES],
    plugins: ['vitest'],
    rules: {
      ...vitestConfig.rules,
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
  {
    files: [
      '.commitlintrc.js',
      'eslint.config.js',
      '.releaserc.js',
      'prettier.config.js',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
