import tsconfigPaths from 'vite-tsconfig-paths';
import { type UserConfig } from 'vite';

export const viteConfig: UserConfig = {
  plugins: [tsconfigPaths()],
};
