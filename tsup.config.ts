/* eslint-disable import/no-default-export */
import { execSync } from 'node:child_process';
import { type Options, defineConfig } from 'tsup';

const tsupOptions: Options = {
  clean: true,
  dts: true,
  entry: ['./src/index.js'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  // Disable code splitting for CommonJS compatibility
  splitting: false,
  target: 'node20',
  treeshake: true,
  onSuccess: async () => {
    execSync('copyfiles -u 1 src/tsconfig/*.json dist', { stdio: 'inherit' });
  },
};

export default defineConfig((options: Options) => ({
  ...options,
  ...tsupOptions,
}));
