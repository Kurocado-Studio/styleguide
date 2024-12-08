/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import babelParser from '@babel/eslint-parser';
import tsRecommended from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import tsdocRecommended from 'eslint-plugin-tsdoc';
import unicornRecommended from 'eslint-plugin-unicorn';
import vitestRecommended from 'eslint-plugin-vitest';

import { base } from './rules/base/index.js';
import { typescriptEslintConfig } from './rules/typescript/index.js';

const SPEC_PREFIX = 'spec';
const TEST_PREFIX = 'test';

export const sharedEslintConfig = {
  ECMA_VERSION: 2021,
  JAVASCRIPT_FILES: ['*.js?(x)', '*.mjs'],
  JAVASCRIPT_TEST_FILES: [
    `*.${TEST_PREFIX}.js?(x)`,
    `*.${SPEC_PREFIX}.js?(x)`,
    `*.${TEST_PREFIX}.mjs?(x)`,
    `*.${SPEC_PREFIX}.mjs?(x)`,
  ],
  TYPESCRIPT_FILES: ['*.ts?(x)'],
  TYPESCRIPT_TEST_FILES: [`*.${TEST_PREFIX}.ts?(x)`, `*.${SPEC_PREFIX}.ts?(x)`],
};

export const typescriptLanguageOptions = {
  files: sharedEslintConfig.TYPESCRIPT_FILES,
  languageOptions: {
    globals: {
      [`es${sharedEslintConfig.ECMA_VERSION}`]: true,
    },
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: sharedEslintConfig.ECMA_VERSION,
      project: true,
      requireConfigFile: true,
      sourceType: 'module',
      tsconfigRootDir: process.cwd(),
    },
  },
};

export const javascriptLanguageOptions = {
  files: sharedEslintConfig.JAVASCRIPT_FILES,
  languageOptions: {
    globals: {
      [`es${sharedEslintConfig.ECMA_VERSION}`]: true,
    },
    parser: babelParser,
    parserOptions: {
      ecmaVersion: sharedEslintConfig.ECMA_VERSION,
      project: true,
      requireConfigFile: false,
      sourceType: 'module',
    },
  },
};

export const tsconfigRootDir = process.cwd();

export const typescriptLanguageRootConfig = {
  ...typescriptLanguageOptions,
  plugins: {
    '@typescript-eslint': tsRecommended,
    import: eslintPluginImport,
    prettierConfig,
    tsdoc: tsdocRecommended,
    unicorn: unicornRecommended,
    vitest: vitestRecommended,
  },
  rules: {
    ...base.rules,
    ...eslintPluginImport.configs.recommended.rules,
    ...eslintPluginImport.configs.typescript.rules,
    ...typescriptEslintConfig.rules,
  },
  settings: {
    'import/resolver': { node: {} },
  },
};

export const javascriptLanguageRootConfig = {
  ...javascriptLanguageOptions,
  plugins: {
    '@typescript-eslint': tsRecommended,
    import: eslintPluginImport,
    prettierConfig,
    tsdoc: tsdocRecommended,
    unicorn: unicornRecommended,
    vitest: vitestRecommended,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
