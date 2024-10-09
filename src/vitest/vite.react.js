import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// needed this way by vitest
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: require.resolve('./setup.react.js'),
  },
});
