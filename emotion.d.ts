/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';
import defaultTheme from './src/theme/defaultTheme';
declare module '@emotion/react' {
  export interface Theme {
    uikit: typeof defaultTheme;
  }
}
