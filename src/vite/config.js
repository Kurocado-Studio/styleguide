/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export const viteConfig = {
  plugins: [
    dts({ exclude: ['**/*.test.ts', '**/*.test.tsx'] }),
    tsconfigPaths(),
  ],
};
