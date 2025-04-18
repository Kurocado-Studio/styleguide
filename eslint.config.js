import { eslintNodeConfig } from './src/index.js';

export default [
  ...eslintNodeConfig,
  {
    files: ['src/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
];
