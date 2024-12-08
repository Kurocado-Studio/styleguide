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

import {
  javascriptLanguageRootConfig,
  sharedEslintConfig,
  typescriptLanguageRootConfig,
} from './constants.js';
import { unicornConfig } from './rules/base/unicorn.js';

const { JAVASCRIPT_TEST_FILES, TYPESCRIPT_TEST_FILES } = sharedEslintConfig;

export const eslintBaseConfig = [
  ...unicornConfig.overrides,
  javascriptLanguageRootConfig,
  {
    ...typescriptLanguageRootConfig,
    rules: {
      ...typescriptLanguageRootConfig.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginImport.configs.typescript.rules,
    },
  },
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
  {
    ignores: ['dist/*', '**/*.d.ts', 'node_modules', '**/temp.js', 'config/*'],
  },
];
