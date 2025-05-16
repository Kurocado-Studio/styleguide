import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import react from '@vitejs/plugin-react';

import { viteConfig } from './config';
import type { UserConfig } from 'vite';
import { get } from 'lodash-es';

export const viteWebConfig: UserConfig = {
  ...viteConfig,
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    remixVitePlugin({
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
        // @ts-expect-error until they fix the types
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
      },
    }),
    ...get(viteConfig, ['plugins'], []),
  ],
};
