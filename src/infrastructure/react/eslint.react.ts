import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import { get } from 'lodash-es';

import { defineTypescriptEslintConfig } from '../typescript/defineTypescriptEslintConfig';
import { makeRootPathJoiner } from '../../domain/eslint/utils/makeRootPathJoiner';
import { reactEslintConfig } from './eslint';

export const defineReactEslintConfig = (repoRoot = process.cwd()) => {
  const joinRoot = makeRootPathJoiner(repoRoot);

  return [
    ...defineTypescriptEslintConfig(repoRoot),
    {
      files: joinRoot('**/*.tsx'),
      languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
      plugins: { react: reactPlugin, 'react-hooks': hooksPlugin },
      rules: {
        ...reactEslintConfig.rules,
        ...get(reactPlugin, ['configs', 'recommended', 'rules'], {}),
        ...get(hooksPlugin, ['configs', 'recommended', 'rules'], {}),
        'react/react-in-jsx-scope': 'off',
      },
      settings: {
        react: { version: 'detect' },
      },
    },
  ];
};

export default defineReactEslintConfig();
