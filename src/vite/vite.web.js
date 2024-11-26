import { vitePlugin as remixVitePlugin } from '@remix-run/dev';

import { viteConfig } from './config';

module.exports = {
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
