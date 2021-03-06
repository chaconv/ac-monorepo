import { Config } from '@stencil/core';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    angular({
      componentCorePackage: '@ac/components',
      directivesProxyFile: '../../apps/angular-seed/src/lib/stencil-generated/components.ts',
    }),
    react({
      componentCorePackage: '@ac/components',
      proxiesFile: '../../apps/react-seed/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
