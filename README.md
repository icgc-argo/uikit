# ARGO UIKit

[![Netlify Status](https://api.netlify.com/api/v1/badges/378c5fea-f016-406c-9449-f3099441b0b1/deploy-status)](https://app.netlify.com/sites/argo-ui-storybook/deploys)
[![Storybook](https://img.shields.io/badge/React-Storybook-ff69b4)](https://argo-ui-storybook.netlify.com)
[![npm version](https://badge.fury.io/js/%40icgc-argo%2Fuikit.svg)](https://badge.fury.io/js/%40icgc-argo%2Fuikit)
[![TypeScript](https://img.shields.io/badge/types-%20TypeScript-blue)](https://www.typescriptlang.org/)

Reusable UI components for ARGO projects.

# Development

### Local Dev

UIKit:

- Install dependencies: `npm i`
- Start watching: `npm run watch`

Consumer project:

- `npm i <root_path_to_uikit>`

Notes:

- make sure to run `watch` first as `dist` folder is used
- assets will require a restart of watcher
- typescript changes often need vscode to restart the TS server
- avoid default exports for anything that needs to be used by 3rd party

### Testing

react-testing-lib with Jest test runner
see Button.test.tsx for example

### Storybook

- `npm run storybook`
- `npm run build-storybook` creates static storybook build in `./storybook-static`

### Component Boilerplate

- creating a new component: `npm run create-component`

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
