import '@emotion/react';
import defaultTheme from './src/theme/defaultTheme';
type d = typeof defaultTheme;
declare module '@emotion/react' {
  export interface Theme extends d {}
}
