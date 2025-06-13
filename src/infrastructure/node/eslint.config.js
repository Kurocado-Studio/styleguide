import { defineConfig } from '../eslint/index.js';
import * as process from 'node:process';

export const defineEslintNode = () => defineConfig(process.cwd());
