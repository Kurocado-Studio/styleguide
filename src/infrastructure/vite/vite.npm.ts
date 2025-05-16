import { get } from 'lodash-es';
import fs from 'node:fs';
import path from 'node:path';
import dts from 'vite-plugin-dts';

import { viteConfig } from './config';

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const packageName = packageJson.name;

const getGlobalName = (name: string) => {
  return name.startsWith('@') ? name.split('/')[1] : name;
};

const getFileName = (name: string, format: string): string => {
  const sanitized = name.replace('@', '').replace('/', '::');
  return `${sanitized.trim()}.${format}.js`;
};

export const viteNpmConfig = {
  build: {
    lib: {
      entry: path.resolve(process.cwd(), 'src/prettier.config.js'),
      fileName: (format: string) => getFileName(packageName, format),
      formats: ['es', 'cjs'],
      name: getGlobalName(packageName),
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    sourcemap: true,
  },
  plugins: [
    ...get(viteConfig, ['plugins'], []),
    dts({
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
      insertTypesEntry: true,
    }),
  ],
};
