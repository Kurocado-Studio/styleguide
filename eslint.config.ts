import { eslintNodeConfig } from './src';

export default [
  ...eslintNodeConfig,
  {
    files: ['src/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
];
