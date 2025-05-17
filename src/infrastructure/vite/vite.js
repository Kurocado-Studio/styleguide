import { get } from 'lodash-es';

import { viteConfig } from './config.js';

export const viteNodeConfig = {
  ...viteConfig,
  plugins: get(viteConfig, ['plugins'], []),
};
