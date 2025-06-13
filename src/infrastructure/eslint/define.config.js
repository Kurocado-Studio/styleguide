import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import unicornPlugin from 'eslint-plugin-unicorn';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from 'globals';
import { get } from 'lodash-es';

import {
  ECMA_YEAR,
  TS_FILES,
  TS_TEST_FILES,
} from '../../domain/eslint/constants.js';
import { makeRootPathJoiner } from '../../domain/eslint/utils/make-root-path-joiner.js';

export const defineConfig = (repoRoot = process.cwd()) => {
  const joinRoot = makeRootPathJoiner(repoRoot);

  return [
    {
      ignores: joinRoot(
        'dist/**',
        'build/**',
        'node_modules/**',
        'coverage/**',
      ),
    },
    {
      files: TS_FILES,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: ECMA_YEAR,
          globals: globals[`es${ECMA_YEAR}`],
          project: [joinRoot('typescript.json')],
          sourceType: 'module',
          tsconfigRootDir: repoRoot,
        },
      },
    },
    {
      files: joinRoot(
        'eslint.config.cjs',
        '.commitlintrc.cjs',
        '.releaserc.cjs',
        'prettier.config.cjs',
        'vite.config.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
      ),
      languageOptions: {
        parserOptions: {
          project: undefined,
        },
      },
      rules: {
        'import/no-cycle': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: TS_TEST_FILES,
      rules: {
        'import/no-cycle': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: joinRoot(
        '.commitlintrc.js',
        '.releaserc.js',
        'eslint.config.js',
        'prettier.config.js',
        'vite.config.ts',
        `**/*.test.ts`,
        `**/*.test.tsx`,
      ),
      rules: {
        'import/no-cycle': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      plugins: {
        '@typescript-eslint': tsPlugin,
        import: importPlugin,
        tsdoc: tsdocPlugin,
        unicorn: unicornPlugin,
        vitest: vitestPlugin,
      },
      rules: {
        ...get(tsPlugin, ['configs', 'strict', 'rules'], {}),
        ...get(importPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(importPlugin, ['configs', 'eslint', 'rules'], {}),
        ...get(unicornPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(vitestPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(prettierConfig, ['rules'], {}),
      },
      settings: { 'import/resolver': { node: {} } },
    },
    {
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx', '.vue'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ];
};
