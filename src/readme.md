[![TypeScript](https://img.shields.io/badge/types-%20TypeScript-blue)](https://www.typescriptlang.org/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/378c5fea-f016-406c-9449-f3099441b0b1/deploy-status)](https://app.netlify.com/sites/argo-ui-storybook/deploys)
[![Storybook](https://img.shields.io/badge/React-Storybook-ff69b4)](https://argo-ui-storybook.netlify.com)

This package contains the reusable [React](https://reactjs.org/) UI components for the Icgc Argo project.

Basic setup:

```javascript
import { ThemeProvider } from '@icgc-argo/uikit';

const App = () => (
  <ThemeProvider theme={themeObject}>
    <YourAwesomeApp />
  </ThemeProvider>
);
```

Please import Work Sans font, 300, 400 and 600 weights.
eg.

```javascript
<link
  href={'https://fonts.googleapis.com/css?family=Work+Sans:300,400,600&display=swap'}
  rel="stylesheet"
/>
```

Use @emotion/react and @emotion/styled packages in consumer project
Ensure these are peer deps and versions match.

## Typescript

You can extend the theme type in your project by declaration merging like so:

```
import { ARGOThemeType } from '@icgc-argo/uikit';

declare module '@icgc-argo/uikit' {
	interface ARGOTheme {
    customProperty: string
  }
}

```

- Built with [Emotion.sh](https://emotion.sh/docs/introduction)
- All component import paths matches [Storybook](https://argo-ui-storybook.netlify.com) structure under `uikit`
  - ex: `import Table from '@icgc-argo/uikit/table`
- Also comes with TypeScript type definitions
