/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { eslintBaseConfig } from './eslint.base.js';

export const eslintBrowserConfig = {
  ...eslintBaseConfig,
  languageOptions: {
    globals: {
      browser: true,
    },
  },
};
