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

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TagVariant =
  | 'DISABLED'
  | 'EDITABLE'
  | 'ERROR'
  | 'HIGHLIGHT'
  | 'INFO'
  | 'NEUTRAL'
  | 'SUCCESS'
  | 'UPDATE'
  | 'WARNING';

export const TAG_VARIANTS: { [k in TagVariant]: k } = {
  DISABLED: 'DISABLED',
  EDITABLE: 'EDITABLE',
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  UPDATE: 'UPDATE',
  NEUTRAL: 'NEUTRAL',
  HIGHLIGHT: 'HIGHLIGHT',
};
const blackTextVariants: Array<keyof typeof TAG_VARIANTS> = [
  TAG_VARIANTS.NEUTRAL,
  TAG_VARIANTS.HIGHLIGHT,
];

interface TagProps {
  variant?: keyof typeof TAG_VARIANTS;
  theme?: any;
}
const Tag = styled('div')<TagProps>`
  ${({ theme }) => css(theme.uikit.typography.paragraph as any)};
  box-sizing: border-box;
  display: inline-block;
  min-height: 14px;
  font-size: 11px;
  line-height: 14px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 8px;
  background-color: ${({ theme, variant = 'INFO' }) =>
    ({
      [TAG_VARIANTS.DISABLED]: theme.uikit.colors.primary_2,
      [TAG_VARIANTS.EDITABLE]: theme.uikit.colors.accent2,
      [TAG_VARIANTS.ERROR]: theme.uikit.colors.error,
      [TAG_VARIANTS.WARNING]: theme.uikit.colors.warning,
      [TAG_VARIANTS.INFO]: theme.uikit.colors.secondary,
      [TAG_VARIANTS.NEUTRAL]: theme.uikit.colors.grey_2,
      [TAG_VARIANTS.SUCCESS]: theme.uikit.colors.accent1_dimmed,
      [TAG_VARIANTS.UPDATE]: theme.uikit.colors.accent3_dark,
      [TAG_VARIANTS.HIGHLIGHT]: theme.uikit.colors.secondary_2,
    }[variant])};
  color: ${({ variant = 'INFO' }) =>
    blackTextVariants.includes(variant as keyof typeof TAG_VARIANTS) ? 'black' : 'white'};
`;

export default Tag;