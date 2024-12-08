/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { vitePlugin as remixVitePlugin } from '@remix-run/dev';

import { viteConfig } from './config.js';

export const viteWebConfig = {
  build: {
    target: 'esnext',
  },
  plugins: [
    remixVitePlugin({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    ...viteConfig.plugins,
  ],
  test: {
    ...viteConfig.test,
    css: true,
    environment: 'jsdom',
    setupFiles: './setup.web.js',
  },
};
//# sourceMappingURL=vite.web.js.map
