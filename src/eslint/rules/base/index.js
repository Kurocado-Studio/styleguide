/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { bestPractice } from './bestPractice.js';
import { es6Config } from './es6.js';
import { importConfig } from './import.js';
import { possibleErrorsConfig } from './possibleErrors.js';
import { stylisticConfig } from './stylistic.js';
import { unicornConfig } from './unicorn.js';
import { variablesConfig } from './variables.js';

export const base = {
  rules: {
    ...es6Config.rules,
    ...importConfig.rules,
    ...possibleErrorsConfig.rules,
    ...stylisticConfig.rules,
    ...unicornConfig.rules,
    ...variablesConfig.rules,
    ...bestPractice.rules,
    /**
     * Require any TSDoc comments conform to the TSDoc specification.
     *
     * @see  https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
     */
    'tsdoc/syntax': 'error',
  },
};
