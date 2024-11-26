import { viteConfig } from './config';

module.exports = {
  plugins: viteConfig.plugins,
  test: {
    ...viteConfig.test,
    setupFiles: './setup.node.js',
  },
};
