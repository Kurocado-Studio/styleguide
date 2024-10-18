import * as path from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// needed this way by vitest
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      // @ts-expect-error since its 'c8' custom
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    environment: 'node',
    exclude: ['node_modules', 'dist'],
    globals: true,
    include: ['**/*.spec.ts', '**/*.test.ts'],
    setupFiles: require.resolve('./setup.node.ts'),
  },
});
