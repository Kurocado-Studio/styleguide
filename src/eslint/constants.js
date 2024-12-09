/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import babelParser from '@babel/eslint-parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import tsdocRecommended from 'eslint-plugin-tsdoc';
import unicornRecommended from 'eslint-plugin-unicorn';
import vitestRecommended from 'eslint-plugin-vitest';
import tsRecommended from 'typescript-eslint';

import { base } from './rules/base/index.js';
import { typescriptEslintConfig } from './rules/typescript/index.js';

export const JS_EXTENSIONS_PREFIX = '{js,cjs,jsx,mjsx}';
export const TS_EXTENSIONS_PREFIX = '{ts,tsx,mtsx}';
export const SPEC_PREFIX = 'spec';
export const TEST_PREFIX = 'test';

export const sharedEslintConfig = {
  ECMA_VERSION: 2021,
  JAVASCRIPT_FILES: [`**/*.${JS_EXTENSIONS_PREFIX}`],
  JAVASCRIPT_TEST_FILES: [
    `**/*.${TEST_PREFIX}.${JS_EXTENSIONS_PREFIX}`,
    `**/*.${SPEC_PREFIX}.${JS_EXTENSIONS_PREFIX}`,
  ],
  TYPESCRIPT_FILES: [`**/*.${TS_EXTENSIONS_PREFIX}`],
  TYPESCRIPT_TEST_FILES: [
    `**/*.${TEST_PREFIX}.${TS_EXTENSIONS_PREFIX}`,
    `**/*.${SPEC_PREFIX}.${TS_EXTENSIONS_PREFIX}`,
  ],
};

export const typescriptLanguageOptions = {
  extends: ['plugin:vitest/recommended'],
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

export const typescriptLanguageRootConfig = {
  ...typescriptLanguageOptions,
  plugins: {
    '@typescript-eslint': typescriptPlugin,
    import: eslintPluginImport,
    prettier: prettierConfig,
    tsdoc: tsdocRecommended,
    unicorn: unicornRecommended,
    vitest: vitestRecommended,
  },
  rules: {
    ...base.rules,
    ...tsRecommended.rules,
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
    import: eslintPluginImport,
    prettier: prettierConfig,
    tsdoc: tsdocRecommended,
    unicorn: unicornRecommended,
    vitest: vitestRecommended,
  },
  rules: {
    ...base.rules,
    ...eslintPluginImport.configs.recommended.rules,
  },
};
