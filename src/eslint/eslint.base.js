import globals from 'globals';

import {
  JS_EXTENSIONS_PREFIX,
  TS_EXTENSIONS_PREFIX,
  javascriptLanguageRootConfig,
  typescriptLanguageRootConfig,
} from './constants.js';
import { unicornConfig } from './rules/base/unicorn.js';

export const eslintBaseConfig = [
  ...unicornConfig.overrides,
  javascriptLanguageRootConfig,
  typescriptLanguageRootConfig,
  {
    files: [`**/*.${JS_EXTENSIONS_PREFIX}`, `**/*.${TS_EXTENSIONS_PREFIX}`],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: [
      `src/eslint/constants.${TS_EXTENSIONS_PREFIX}`,
      `src/eslint/constants.${JS_EXTENSIONS_PREFIX}`,
    ],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  {
    files: [
      '.commitlintrc.js',
      '.releaserc.js',
      'eslint.config.js',
      'prettier.config.js',
      'vite.config.ts',
      `**/*.test.ts`,
      `**/*.test.tsx`,
    ],
    rules: {
      'import/no-cycle': 'off',
      'import/no-default-export': 'off',
    },
  },
  {
    ignores: ['**/*.d.ts', 'dist/*', 'build/*', 'node_modules'],
  },
];
