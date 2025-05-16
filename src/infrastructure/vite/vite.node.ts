import { get } from 'lodash-es';

import { viteConfig } from './config';
import type { UserConfig } from 'vite';

export const viteNodeConfig: UserConfig = {
  ...viteConfig,
  plugins: get(viteConfig, ['plugins'], []),
};
