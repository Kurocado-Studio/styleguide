/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { eslintNodeConfig } from './src/eslint/eslint.node.js';

export default [
  ...eslintNodeConfig,
  {
    files: ['src/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
  {
    ignores: [
      'src/vitest/setup.web.ts',
      'src/vitest/setup.node.ts',
      'src/vitest/vitest.web.ts',
      'src/vitest/vitest.node.ts',
      'node_modules',
      '**/temp.js',
      'config/*',
    ],
  },
];
