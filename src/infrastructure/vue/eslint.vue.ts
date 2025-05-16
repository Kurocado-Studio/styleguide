// eslint-vue.config.ts
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import { get } from 'lodash-es';

import { defineTypescriptEslintConfig } from '../typescript/defineTypescriptEslintConfig.js';
import { makeRootPathJoiner } from '../../domain/eslint/utils/makeRootPathJoiner.js';

export const defineVueEslintConfig = (repoRoot = process.cwd()) => {
  const joinRoot = makeRootPathJoiner(repoRoot);

  return [
    ...defineTypescriptEslintConfig(repoRoot),
    {
      files: joinRoot('**/*.vue'),
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          parser: tsParser,
          ecmaVersion: 2021,
          sourceType: 'module',
          extraFileExtensions: ['.vue'],
        },
      },
      plugins: { vue: vuePlugin },
      rules: get(vuePlugin, ['configs', 'vue3-recommended', 'rules'], {}),
    },
  ];
};
