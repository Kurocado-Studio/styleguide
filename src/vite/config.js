/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
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
