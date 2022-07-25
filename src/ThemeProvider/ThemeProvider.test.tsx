/*
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 * This program and the accompanying materials are made available under the terms of
 * the GNU Affero General Public License v3.0. You should have received a copy of the
 * GNU Affero General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { render, screen } from '@testing-library/react';
import UIKitThemeProvider from '.';
import { css, ThemeProvider as ProjectThemeProvider } from '@emotion/react';
import Template from '../Template';
import defaultTheme from '../theme/defaultTheme';
import styled from '@emotion/styled';
import { StyledTemplate } from '../Template/Template.styled';

// debug helper
function getStyle(query, property) {
  const el = document.querySelectorAll(query)[0];
  const styles = getComputedStyle(el);
  return styles.getPropertyValue(property);
}

const ThemesWrapper = ({ projectTheme = {}, uikitTheme = undefined, children }) => (
  <ProjectThemeProvider theme={projectTheme}>
    <UIKitThemeProvider theme={uikitTheme}>{children}</UIKitThemeProvider>
  </ProjectThemeProvider>
);

const defaultThemeGrey = defaultTheme.colors.grey;
const overwriteGrey = '#808080';

describe.skip('Theme Provider', () => {
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
      render(
        <ThemesWrapper uikitTheme={{ colors: { grey: overwriteGrey } }}>
          <Template>Text</Template>
        </ThemesWrapper>,
      );

      expect(screen.getByText('Text')).toHaveStyleRule('color', overwriteGrey);
    });
  });

  describe('Emotion apis should be supported', () => {
    //!! NB: Use `css` api consistently
    test('styled() on a component', async () => {
      const GreenBackgroundTemplate = styled(Template)`
        background-color: green;
      `;

      render(
        <ThemesWrapper projectTheme={{ colors: { blue: 'blue' } }}>
          <GreenBackgroundTemplate>Text</GreenBackgroundTemplate>
          <StyledTemplate>Styled Template</StyledTemplate>
        </ThemesWrapper>,
      );
      screen.debug();

      const comp = screen.getByText('Text');
      // color gets overwritten
      expect(comp).toHaveStyleRule('background-color', 'green');
      expect(comp).toHaveStyleRule('color', defaultThemeGrey);
      // styled template
      const styledComp = screen.getByText('Styled Template');
      expect(styledComp).toHaveStyleRule('color', defaultThemeGrey);
    });

    test('css prop on component with override', async () => {
      render(
        <ThemesWrapper projectTheme={{ colors: { blue: `blue` } }}>
          <Template
            css={(theme) =>
              css`
                color: ${theme.colors.blue};
                background-color: green;
                border-color: black;
              `
            }
          >
            Text
          </Template>
        </ThemesWrapper>,
      );

      const comp = screen.getByText('Text');

      expect(comp).toHaveStyleRule('background-color', 'green');
      expect(comp).toHaveStyleRule('color', 'blue');
      expect(comp).toHaveStyleRule('border-color', 'black');
      // should not have default original color
      expect(comp).not.toHaveStyleRule('color', defaultThemeGrey);
    });
  });
});
