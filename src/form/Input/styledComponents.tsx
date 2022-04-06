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
export { StyledInputWrapper } from '../common';

interface InputProps {
  inputSize?: string;
  size?: any;
}

interface StyledInputProps extends InputProps {
  theme?: any;
}

export const StyledInput = styled('input')<StyledInputProps>`
  ${({ theme }) => css(theme.uikit.typography.default)};
  padding: ${({ theme, inputSize }) => theme.uikit.input.paddings[inputSize]};
  border: none;
  outline: none;
  flex: 1;
  width: 100%;
  min-width: 0;
  background-color: inherit;
  color: inherit;
  font-size: inherit;
  max-height: 100%;
  padding: 0px 10px;
`;

export const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 11px;
  background-color: inherit;
  color: inherit;
`;
