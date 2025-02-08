/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { get } from 'lodash-es';

import { viteConfig } from './config.js';

export const viteNodeConfig = {
  ...viteConfig,
  plugins: get(viteConfig, ['plugins'], []),
};
