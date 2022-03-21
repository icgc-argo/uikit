/** @jsxImportSource @emotion/react */
import { render, screen } from '@testing-library/react';
import UIKitThemeProvider from '.';
import { jsx, css, ThemeProvider as ProjectThemeProvider } from '@emotion/react';
import Template from '../Template';
import defaultTheme from '../theme/defaultTheme';
import styled from '@emotion/styled';

// debug helper
function getStyle(query, property) {
  const el = document.querySelectorAll(query)[0];
  const styles = getComputedStyle(el);
  return styles.getPropertyValue(property);
}

const ThemesWrapper = ({ projectTheme = {}, uikitTheme = undefined, children }) => (
  <ProjectThemeProvider theme={projectTheme}>
    {/*@ts-ignore*/}
    <UIKitThemeProvider theme={uikitTheme}>{children}</UIKitThemeProvider>
  </ProjectThemeProvider>
);

const defaultThemeGrey = defaultTheme.colors.grey;
const overwriteGrey = '#808080';

describe('Theme Provider', () => {
  describe('UIKit components should not be affected by a project level theme provider', () => {
    test('UIKit component styles correctly wrapped by project imported Emotion theme provider', async () => {
      render(
        <ThemesWrapper projectTheme={{ colors: { grey: '#FFF' } }}>
          <Template>Text</Template>
        </ThemesWrapper>,
      );
      expect(screen.getByText('Text')).toHaveStyleRule('color', defaultThemeGrey);
    });

    test('UIKit component styles correctly wrapped with UIKit theme override', async () => {
      const { getByText } = render(
        <ThemesWrapper uikitTheme={{ colors: { grey: overwriteGrey } }}>
          <Template>Text</Template>
        </ThemesWrapper>,
      );
      expect(getByText('Text')).toHaveStyleRule('color', overwriteGrey);
    });
  });

  describe('Emotion v11 styled and css apis should be supported', () => {
    test('styled() on a component', async () => {
      const GreenBackgroundTemplate = styled(Template)`
        color: black;
        background-color: green;
      `;

      render(
        <ThemesWrapper projectTheme={{ colors: { blue: 'blue' } }}>
          <GreenBackgroundTemplate>Text</GreenBackgroundTemplate>
        </ThemesWrapper>,
      );

      // color gets overwritten
      expect(screen.getByText('Text')).toHaveStyleRule('color', 'black');
      expect(screen.getByText('Text')).toHaveStyleRule('background-color', 'green');
      // should not have default original color
      expect(screen.getByText('Text')).not.toHaveStyleRule('color', defaultThemeGrey);
    });

    test('css prop on component', async () => {
      render(
        <ThemesWrapper projectTheme={{ colors: { blue: 'blue' } }}>
          <Template
            css={(theme) =>
              css`
                color: black;
                background-color: green;
                border-color: ${theme.colors.blue};
              `
            }
          >
            Text
          </Template>
        </ThemesWrapper>,
      );

      expect(screen.getByText('Text')).toHaveStyleRule('background-color', 'green');
      expect(screen.getByText('Text')).toHaveStyleRule('color', 'black');
      expect(screen.getByText('Text')).toHaveStyleRule('border-color', 'blue');
      // should not have default original color
      expect(screen.getByText('Text')).not.toHaveStyleRule('color', defaultThemeGrey);
    });
  });

  test('UIKit component throws error if not wrapped in UIKitThemeProvider', async () => {
    // it should console.error but we don't need to see it
    jest.spyOn(console, 'error').mockImplementation(null);
    expect(() => render(<Template>Text</Template>)).toThrow();
  });
});
