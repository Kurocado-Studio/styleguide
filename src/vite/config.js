import tsconfigPaths from 'vite-tsconfig-paths';

export const viteConfig = {
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    globals: true,
    include: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.tsx', '**/*.test.tsx'],
    root: './',
  },
};
