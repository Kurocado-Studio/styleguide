import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import react from '@vitejs/plugin-react';

import { viteConfig } from './config.js';

export const viteWebConfig = {
  ...viteConfig,
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    remixVitePlugin({
      future: {
        v3_fetcherPersist: true,
        // @ts-expect-error due to their types not being updated yet
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
      },
    }),
    ...viteConfig.plugins,
  ],
};
