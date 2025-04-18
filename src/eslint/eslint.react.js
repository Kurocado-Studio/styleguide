import jsxA11yRecommended from 'eslint-plugin-jsx-a11y';
import reactRecommended from 'eslint-plugin-react';
import reactHooksRecommended from 'eslint-plugin-react-hooks';
import globals from 'globals';

import {
  TS_EXTENSIONS_PREFIX,
  typescriptLanguageRootConfig,
} from './constants.js';
import { eslintBaseConfig } from './eslint.base.js';
import { reactEslintConfig } from './rules/react/index.js';

export const eslintReactConfig = [
  ...eslintBaseConfig,
  {
    ...typescriptLanguageRootConfig,
    languageOptions: {
      globals: globals.browser,
    },
    rules: typescriptLanguageRootConfig.rules,
    settings: {
      'import/resolver': {
        alias: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          map: [['~', './app']],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
  {
    files: [`**/*.${TS_EXTENSIONS_PREFIX}`],
    ...reactRecommended.configs.flat.recommended,
    languageOptions: {
      ...reactRecommended.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      ...reactRecommended.configs.flat.recommended.plugins,
      'jsx-a11y': jsxA11yRecommended,
      'react-hooks': reactHooksRecommended,
    },
    rules: {
      ...reactEslintConfig.rules,
      ...reactRecommended.configs.flat.recommended.rules,
      ...reactHooksRecommended.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
