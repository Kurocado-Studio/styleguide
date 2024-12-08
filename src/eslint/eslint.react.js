/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import jsxA11yRecommended from 'eslint-plugin-jsx-a11y';
import reactRecommended from 'eslint-plugin-react';
import reactHooksRecommended from 'eslint-plugin-react-hooks';

import { reactEslintConfig } from './rules/react/index.js';

export const eslintReactConfig = [
  {
    plugins: {
      'jsx-a11y': jsxA11yRecommended,
      react: reactRecommended,
      'react-hooks': reactHooksRecommended,
    },
    rules: reactEslintConfig.rules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
