/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import react from '@vitejs/plugin-react';
import { get } from 'lodash-es';

import { viteConfig } from './config.js';

export const viteWebConfig = {
  build: {
    target: 'esnext',
  },
  plugins: [
    ...get(viteConfig, ['plugins'], []),
    react(),
    remixVitePlugin({
      future: {
        v3_fetcherPersist: true,
        // @ts-expect-error due to their types not being updated yet
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_singleFetch: true,
        v3_throwAbortReason: true,
        v7_skipActionErrorRevalidation: true,
      },
    }),
  ],
};
