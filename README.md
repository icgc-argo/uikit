# ARGO UIKit

[![Netlify Status](https://api.netlify.com/api/v1/badges/378c5fea-f016-406c-9449-f3099441b0b1/deploy-status)](https://app.netlify.com/sites/argo-ui-storybook/deploys)
[![Storybook](https://img.shields.io/badge/React-Storybook-ff69b4)](https://argo-ui-storybook.netlify.com)
[![npm version](https://badge.fury.io/js/%40icgc-argo%2Fuikit.svg)](https://badge.fury.io/js/%40icgc-argo%2Fuikit)
[![TypeScript](https://img.shields.io/badge/types-%20TypeScript-blue)](https://www.typescriptlang.org/)

Reusable UI components for Argo.

# Development

### Local

NB: `npm link` installs to global node folder. be careful when using something like NVM which creates different global folders for different node versions. Both `uikit` and the consuming project will need to be using the same node version.

Both local development and building for publishing write to the dist folder. We use `npm link` for local development and avoid adding it to `package.json`.

Consuming project folder eg. `platform-ui`:

- run `npm link @icgc-argo/uikit`

Modify your project settings to ensure there is only one version of react in use.
Here is an example for nextjs project:

```
const path = require("path");
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    webpack: (config, options) => {
      // These 'react' related configs are added to enable linking packages in development
      // (e.g. Arranger), and not get the "broken Hooks" warning.
      // https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
      if (options.isServer) {
        config.externals = ["react", ...config.externals];
      }

      config.resolve.alias["react"] = path.resolve(
        __dirname,
        ".",
        "node_modules",
        "react"
      );
      return config;
    },
  };
  return nextConfig;
};
```

UIKit lib:

- Install dependencies: `npm i`
- Link to global package `npm link`
- Start watching: `npm run build:watch`

### Storybook

- `npm run storybook` for starting the storybook on port 6006 for isolated component development.
- `npm run build-storybook` creates static storybook build in `./storybook-static`

### Component Boilerplate

- creating a new component: `npm run create-component`

### Writing commits

To keep commit messages consistent, we use [gitmoji-cli](https://www.npmjs.com/package/gitmoji-cli), available as a dev dependency

- `npm run commit` will start interactive commit tool
- configuring gitmoji-cli: `npm run gitmoji-config`

### Type checking

- `npm run type-check`: trigger TypeScript type check for whole repo
- `npm run type-check -- --watch`: runs the above with watch mode
  - Any `npm run type-check` triggers `tsc`, so any flag layed out [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html) can be used
- If using [vscode](https://code.visualstudio.com/) (recommended), `tsc` can also be run as a task in the editor:
  - `Cmd+Shift+B`, then select `tsc:build - tsconfig.json`
  - This will report errors in vscode's `PROBLEMS` tab

### Publish to npm:

1. Increase `version` under `uikit/package.release.json`

- Automated process (recommended)

  2. Merge that change to `develop`, and let the Jenkins pipeline handle it

- Manual process (discouraged, but available)

  2. Run `npm run build-uikit` which performs the following:
  3. Run `npm run publish-uikit` to publish latest version to npm

# Testing

Tests use React Testing Library and Jest
Jest uses ts-jest not babel so emotion needs pragma at top
ie. /\*_ @jsxImportSource @emotion/react _/

https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

`screen.debug` is incredibly useful to view jsdom output

# Emotion key points

css from @emotion/react does not return the computed class name string. The function returns an object containing the computed name and flattened styles. The returned object is understood by emotion at a low level and can be composed with other emotion based styles inside of the css prop, other css calls, or the styled API.

https://emotion.sh/docs/css-prop

Styled api takes precedence over css

# Recommended usage

Use `css` for consistency
hard to define what takes precedence when we mix styled and css

Themes will merge with same versions of emotion
UIKit theme is namespaced
Please use as last theme provider
