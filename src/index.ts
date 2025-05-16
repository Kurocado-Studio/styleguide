export {
  commitLintConfig,
  commitLintReferenceRequiredConfig,
} from './infrastructure/common/commitlint.config';

export { prettierConfig } from './infrastructure/common/prettier.config';

export * from './infrastructure/node/eslint.node';
export * from './infrastructure/react/eslint.react';
export * from './infrastructure/vue/eslint.vue';

export {
  semanticReleaseAppConfig,
  semanticReleaseAppMonorepoConfig,
} from './infrastructure/semantic-release/semanticRelease.app';
export {
  semanticReleaseNpmConfig,
  semanticReleaseNpmMonorepoConfig,
} from './infrastructure/semantic-release/semanticRelease.npm';
export {
  semanticReleaseInternalConfig,
  semanticReleaseInternalMonorepoConfig,
} from './infrastructure/semantic-release/semanticRelease.internal';

export { viteNodeConfig } from './infrastructure/vite/vite.node';
export { viteNpmConfig } from './infrastructure/vite/vite.npm';
export { viteWebConfig } from './infrastructure/vite/vite.web';

export { defineConfig as defineESLintConfig } from 'eslint-define-config';
