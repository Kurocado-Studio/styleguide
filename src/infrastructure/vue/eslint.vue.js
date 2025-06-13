// eslint-vue.config.ts
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import { get } from 'lodash-es';

import { defineConfig } from '../eslint/index.js';
import { makeRootPathJoiner } from '../../domain/eslint/utils/make-root-path-joiner.js';

export const defineVueEslintConfig = (repoRoot = process.cwd()) => {
  const joinRoot = makeRootPathJoiner(repoRoot);

  return [
    ...defineConfig(repoRoot),
    {
      files: joinRoot('**/*.vue'),
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          ecmaVersion: 2021,
          extraFileExtensions: ['.vue'],
          parser: tsParser,
          sourceType: 'module',
        },
      },
      plugins: { vue: vuePlugin },
      rules: get(vuePlugin, ['configs', 'vue3-recommended', 'rules'], {}),
    },
  ];
};
