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
} from '../../domain/eslint/constants';
import { makeRootPathJoiner } from '../../domain/eslint/utils/makeRootPathJoiner';

export const defineTypescriptEslintConfig = (repoRoot = process.cwd()) => {
  const joinRoot = makeRootPathJoiner(repoRoot);

  return [
    {
      files: TS_FILES,
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: ECMA_YEAR,
          sourceType: 'module',
          project: true,
          tsconfigRootDir: repoRoot,
        },
        globals: globals[`es${ECMA_YEAR}`],
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
        'eslint.config.ts',
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
        unicorn: unicornPlugin,
        vitest: vitestPlugin,
        tsdoc: tsdocPlugin,
      },
      rules: {
        ...get(tsPlugin, ['configs', 'strict', 'rules'], {}),
        ...get(importPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(importPlugin, ['configs', 'typescript', 'rules'], {}),
        ...get(unicornPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(vitestPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(prettierConfig, ['rules'], {}),
      },
      settings: { 'import/resolver': { node: {} } },
    },
    { ignores: joinRoot('**/*.d.ts', 'dist/*', 'build/*', 'node_modules') },
  ];
};
