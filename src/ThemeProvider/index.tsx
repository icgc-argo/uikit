/*
 * Copyright (c) 2020 The Ontario Institute for Cancer Research. All rights reserved
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

import { Interpolation, ThemeContext, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { CreateStyled, default as emotionStyled } from '@emotion/styled';
import * as React from 'react';
import defaultTheme from '../theme/defaultTheme';

// this declaration merge is for typings in uikit local project to work
declare module '@emotion/react' {
  interface Theme {
    colors: typeof defaultTheme.colors;
    typography: typeof defaultTheme.typography;
    shadows: typeof defaultTheme.shadows;
    button: typeof defaultTheme.button;
    appBar: typeof defaultTheme.appBar;
    titleBar: typeof defaultTheme.titleBar;
    input: typeof defaultTheme.input;
    multiSelect: typeof defaultTheme.multiSelect;
    radiocheckbox: typeof defaultTheme.radiocheckbox;
    progress: typeof defaultTheme.progress;
    checkbox: typeof defaultTheme.checkbox;
  }
}

export interface Theme {
  colors: typeof defaultTheme.colors;
  typography: typeof defaultTheme.typography;
  shadows: typeof defaultTheme.shadows;
  button: typeof defaultTheme.button;
  appBar: typeof defaultTheme.appBar;
  titleBar: typeof defaultTheme.titleBar;
  input: typeof defaultTheme.input;
  multiSelect: typeof defaultTheme.multiSelect;
  radiocheckbox: typeof defaultTheme.radiocheckbox;
  progress: typeof defaultTheme.progress;
  checkbox: typeof defaultTheme.checkbox;
}

const ThemeProvider: React.ComponentType<React.PropsWithChildren<{ theme?: Theme }>> = ({
  theme = defaultTheme,
  children,
}) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;

export type CssInterpolation = Interpolation<Theme>;

export const useTheme = () => React.useContext(ThemeContext as React.Context<Theme>);
export const styled: CreateStyled = emotionStyled;
