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

import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { merge } from 'lodash';
import * as React from 'react';
import { Tooltip as ReactTippy, TooltipProps as TippyProps } from 'react-tippy';
import { TooltipProps } from './types';
import useTheme from '../utils/useTheme';

const Tooltip: React.ComponentType<TooltipProps> = ({
  className,
  html,
  position = 'top',
  arrow = true,
  ...rest
}) => {
  const theme = useTheme();
  const arrowStyles = {
    top: `
      right: 50%;
      top: 100%;
      border-top-color: ${theme.uikit.colors.primary_1};
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      margin-right: -5px;
    `,
    left: `
      bottom: 50%;
      left: 100%;
      border-left-color: ${theme.uikit.colors.primary_1};
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      margin-bottom: -5px;
    `,
    bottom: `
      left: 50%;
      bottom: 100%;
      border-bottom-color: ${theme.uikit.colors.primary_1};
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      margin-left: -5px;
    `,
    right: `
      top: 50%;
      right: 100%;
      border-right-color: ${theme.uikit.colors.primary_1};
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      margin-top: -5px;
    `,
  };

  const TooltipContainer = styled('div')`
    ${css(theme.uikit.typography.caption as any)}
    background: ${theme.uikit.colors.primary_1};
    border-radius: 2px;
    padding: 2px 4px;
    color: white;
    font-weight: normal;
    ${arrow &&
    `
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        pointer-events: none;
        ${arrowStyles[position]}
      }
    `}
  `;

  return (
    <>
      <Global
        styles={css`
          .tippy-popper .leave {
            opacity: 0;
          }
        `}
      />
      <ReactTippy
        popperOptions={{
          modifiers: merge(
            {
              preventOverflow: {
                enabled: false,
              },
              flip: {
                enabled: false,
              },
              hide: {
                enabled: false,
              },
            },
            rest.popperOptions,
          ),
        }}
        html={<TooltipContainer className={className}>{html}</TooltipContainer>}
        position={position}
        {...rest}
      />
    </>
  );
};

export default Tooltip;