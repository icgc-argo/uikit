import React from 'react';
import ThemeProvider from '../src/ThemeProvider';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PropTypesTable from './PropTypesTable';

addDecorator(withInfo({ inline: true, header: false, TableComponent: PropTypesTable }));
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
