import swc from 'unplugin-swc';

import { viteConfig } from './config';

module.exports = {
  plugins: [
    ...viteConfig.plugins,
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
  test: {
    ...viteConfig.test,
    setupFiles: './setup.node.js',
  },
};
