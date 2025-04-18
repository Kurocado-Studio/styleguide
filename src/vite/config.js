import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line tsdoc/syntax
/** @type {import('vite').Plugin[]} */
export const viteConfig = {
  plugins: [tsconfigPaths()],
};
