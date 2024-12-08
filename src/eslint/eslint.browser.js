/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import babelParser from '@babel/eslint-parser';

import {
  javascriptLanguageOptions,
  typescriptLanguageRootConfig,
} from './constants.js';
import { eslintBaseConfig } from './eslint.base.js';

export const eslintBrowserConfig = [
  ...eslintBaseConfig,
  {
    ...typescriptLanguageRootConfig,
    rules: {
      ...typescriptLanguageRootConfig.rules,
      'import/no-cycle': 'off',
    },
    settings: {
      'import/resolver': {
        alias: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          map: [['~', './app']],
        },
      },
    },
  },
];
