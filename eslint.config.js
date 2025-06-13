import { defineConfig } from './src/index.js';

export default [
  ...defineConfig(),
  {
    files: ['src/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
];
