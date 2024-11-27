/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
const bestPracticeRules = require('./bestPractice');
const es6Rules = require('./es6');
const importRules = require('./import');
const possibleErrorsRules = require('./possibleErrors');
const stylisticRules = require('./stylistic');
const unicornRules = require('./unicorn');
const variablesRules = require('./variables');

module.exports = {
  rules: {
    ...es6Rules.rules,
    ...importRules.rules,
    ...possibleErrorsRules.rules,
    ...stylisticRules.rules,
    ...unicornRules.rules,
    ...variablesRules.rules,
    ...bestPracticeRules.rules,
    /**
     * Require any TSDoc comments conform to the TSDoc specification.
     *
     * @see  https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
     */
    'tsdoc/syntax': 'error',
  },
};
