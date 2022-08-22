# ARGO UIKit

[![Netlify Status](https://api.netlify.com/api/v1/badges/378c5fea-f016-406c-9449-f3099441b0b1/deploy-status)](https://app.netlify.com/sites/argo-ui-storybook/deploys)
[![Storybook](https://img.shields.io/badge/React-Storybook-ff69b4)](https://argo-ui-storybook.netlify.com)
[![npm version](https://badge.fury.io/js/%40icgc-argo%2Fuikit.svg)](https://badge.fury.io/js/%40icgc-argo%2Fuikit)
[![TypeScript](https://img.shields.io/badge/types-%20TypeScript-blue)](https://www.typescriptlang.org/)

Reusable UI components for Argo.

# Development

### Local

Both local development and building for publishing write to the dist folder. We use `npm link` for local development and avoid adding it to `package.json`.
`npm run watch` will point to the consuming projects react libs in the global node folder. If you get an error about multiple versions of react, chances are something went wrong here.

Consuming project folder eg. `platform-ui`:

- run `npm link` from both `react` and `react-dom` node_modules.

UIKit lib:

- Install dependencies: `npm i`
- Start watching: `npm run watch`

NB: `npm link` installs to global node folder. be careful when using something like NVM which creates different global folders for different node versions. Both `uikit` and the consuming project will need to be using the same node version.

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

# Dependencies

react/react-dom are needed as dependencies for storybook
project does not work if they are just defined as peerDeps

# Storybook

Stories are written in the older `storiesOf` style
https://github.com/storybookjs/storybook/blob/master/lib/core/docs/storiesOf.md

- No explicit export from module required
- Use a constant string for story name
  - Stories can break easily when you use dynamic vars as story name `${__dirname}` (too many '/', diff OS)
