/*
 * Copyright (c) 2023 The Ontario Institute for Cancer Research. All rights reserved
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
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';

export const TableActionBar = (props: PropsWithChildren<{ showPageSizeOptions: boolean }>) => (
  <Typography
    {...props}
    variant="label"
    color="grey"
    component="div"
    css={css`
      min-height: 32px;
      display: flex;
      justify-content: ${props.showPageSizeOptions ? 'end' : 'space-between'};
      align-items: center;
      padding: 8px 0 8px;
      & svg {
        box-sizing: content-box !important;
      }
      & button > svg {
        position: relative;
      }
    `}
  />
);

export const Arrow: React.ComponentType<{ transform?: string }> = ({ transform }) => (
  <Icon width="6px" height="6px" name="chevron_right" fill="grey" transform={transform} />
);

export const DoubleArrow: React.ComponentType<{ transform?: string }> = ({ transform }) => (
  <>
    <Arrow transform={transform} />
    <Arrow
      css={css`
        position: relative;
        left: -3px;
      `}
      transform={transform}
    />
  </>
);

export const PageButton = styled('button')`
  ${({ theme }) => theme.typography.data as any};
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  line-height: 18px;
  text-align: center;
  width: 24px;
  margin-right: 2px;
  border: 0 none;
  color: ${({ theme }) => theme.colors.grey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_4};
  }
`;

export const PageControl = styled('div')`
  display: flex;
  align-items: center;
`;
