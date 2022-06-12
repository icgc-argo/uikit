import { withInfo } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react';
import PropTypesTable from './PropTypesTable';
import ThemeProvider from '../src/ThemeProvider/ThemeProvider.comp';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
//addDecorator(withInfo({ inline: true, header: false, TableComponent: PropTypesTable }));
export const decorators = [(Story) => <ThemeProvider>{Story()}</ThemeProvider>];
