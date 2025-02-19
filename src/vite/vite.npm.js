/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { get } from 'lodash-es';
import fs from 'node:fs';
import path from 'node:path';
import dts from 'vite-plugin-dts';

import { viteConfig } from './config.js';

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const packageName = packageJson.name;

const getGlobalName = (name) => {
  return name.startsWith('@') ? name.split('/')[1] : name;
};

const getFileName = (name, format) => {
  const sanitized = name.replace('@', '').replace('/', '::');
  return `${sanitized.trim()}.${format}.js`;
};

export const viteNpmConfig = {
  build: {
    lib: {
      entry: path.resolve(process.cwd(), 'src/index.js'),
      fileName: (format) => getFileName(packageName, format),
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
