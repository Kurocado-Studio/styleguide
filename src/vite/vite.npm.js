import fs from 'node:fs';
import path from 'node:path';
import dts from 'vite-plugin-dts';

import { viteConfig } from './config';

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

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
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
  plugins: [...viteConfig.plugins, dts({ insertTypesEntry: true })],
  test: {
    ...viteConfig.test,
    setupFiles: './setup.npm.js',
  },
};
