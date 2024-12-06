/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { viteConfig } from './config';

export const viteNodeConfig = {
  plugins: viteConfig.plugins,
  test: {
    ...viteConfig.test,
    setupFiles: './setup.node.js',
  },
};
