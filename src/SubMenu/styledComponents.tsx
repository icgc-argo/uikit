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

import { css } from '@emotion/react';
import { styled } from '../ThemeProvider';
import defaultTheme from '../theme/defaultTheme';

type StyleCalculationInput = {
  selected?: boolean;
  theme?: typeof defaultTheme;
};

const defaultLabelStyle = ({ selected, theme }: StyleCalculationInput) => css`
  & > .MenuItemContent {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${selected ? theme.colors.secondary_dark : theme.colors.primary};
    &:hover {
      background: ${theme.colors.grey_3};
    }
  }
  & > .FacetMenu {
    display: flex;
    border-bottom: ${selected ? '0px' : '1px'} solid;
    background: ${selected ? theme.colors.white : theme.colors.grey_4};
    border-color: ${theme.colors.grey_2};
    color: ${theme.colors.primary};
    padding: 8px 12px;
    font-weight: 600;
    width: calc(100% - (2 * 12px));
    ${css(theme.typography.paragraph2 as any)}
  }
`;

const level1Style = ({ selected, theme }: StyleCalculationInput) => css`
  ${css(theme.typography.navigation as any)}
  ${defaultLabelStyle({ theme, selected })}
  background: ${theme.colors.white};
  animation: all 1s;
  width: 100%;
  & > .MenuItemContent {
    padding: 12px;
  }
  & > .FacetContent .MenuItemContent {
    padding: 6px 12px;
  }
  & > .FacetContentSlim .MenuItemContent {
    padding: 6px;
    border-bottom: 1px solid;
    border-color: ${theme.colors.grey_2};
  }
  & a {
    text-decoration: underline;
    font-weight: normal;
  }
`;

const level2Style = ({ selected, theme }: StyleCalculationInput) => css`
  ${css(theme.typography.paragraph as any)}
  ${defaultLabelStyle({ theme, selected })}
  border: none;
  border-left: solid 2px;
  font-weight: normal;
  border-left-color: ${selected ? theme.colors.secondary : theme.colors.white};
  background: ${selected ? theme.colors.grey_4 : 'none'};
  & > .MenuItemContent {
    padding-left: 40px;
    padding-right: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    & > ContentContainer! {
      line-height: 20px;
    }
  }
`;

const level3Style = ({ selected, theme }: StyleCalculationInput) => css`
  ${css(theme.typography.navigation as any)}
  ${defaultLabelStyle({ theme, selected })}
  border: none;
  font-weight: normal;
  background: ${selected ? theme.colors.secondary_4 : 'none'};
  & > .MenuItemContent {
    font-size: 13px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 52px;
  }
`;

const defaultStyle = (props: StyleCalculationInput) => css`
  ${level1Style(props)}
  ${defaultLabelStyle(props)}
  .MenuItemContainer > & {
    ${level2Style(props)}
    .MenuItemContainer > & {
      ${level3Style(props)}
    }
  }
`;

export const MenuItemContainer = styled('div')<{ level?: 1 | 2 | 3; selected?: boolean }>`
  & a {
    text-decoration: none;
  }
  ${({ level, ...rest }) =>
    level === 1
      ? level1Style(rest)
      : level === 2
      ? level2Style(rest)
      : level === 3
      ? level3Style(rest)
      : defaultStyle(rest)}
`;

export const IconContainer = styled('span')`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled('button')<{ as?: keyof JSX.IntrinsicElements }>`
  ${({ theme }) => css(theme.typography.default as any)};
  border: none;
  width: 100%;
  padding: 0px 2px 0px 0px;
  background: none;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  text-align: left;
`;
