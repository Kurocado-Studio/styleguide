import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// needed this way by vitest
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      // @ts-expect-error since its 'c8' custom
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    css: true,
    environment: 'jsdom',
    globals: true,
    include: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.tsx', '**/*.test.tsx'],
    setupFiles: require.resolve('./setup.web.ts'),
  },
});
