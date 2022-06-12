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
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { string } from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import { placeholderImageURLRoot } from '../testUtil';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants';
import Button from './index';

const CustomLoaderComp = ({ theme, variant }) => (
  <div>
    <Icon
      name="spinner"
      width={'12px'}
      height={'12px'}
      fill={theme.uikit.button.textColors[variant].default}
      css={css`
        margin-right: 4px;
      `}
    />
    VALIDATING FILES
  </div>
);

export default {
  component: Button,
  argTypes: {
    variant: { control: 'radio', options: BUTTON_VARIANTS },
    size: { control: 'radio', options: BUTTON_SIZES },
    disabled: { control: { type: 'boolean' } },
    isAsync: { control: { type: 'boolean' } },
    children: string,
    onClick: { action: 'clicked' },
  },
  args: {
    variant: BUTTON_VARIANTS.PRIMARY,
    size: BUTTON_SIZES.MD,
    disabled: false,
    isAsync: false,
    children: 'Click me',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MultipleChildNodes = Template.bind({});
MultipleChildNodes.args = {
  children: (
    <>
      <img src={`${placeholderImageURLRoot}/12/20`} />
      <span style={{ color: '#64D518' }}>Red Span</span>
      <img src={`${placeholderImageURLRoot}/20/20`} />
      <img src={`${placeholderImageURLRoot}/7/7`} />
    </>
  ),
};

export const Loader = Template.bind({});
Loader.args = {
  onClick: (e) => {
    action('click')(e);
    return new Promise((resolve) => setTimeout(resolve, 1500));
  },
  isAsync: true,
};

export const CustomLoader = Template.bind({});
CustomLoader.args = {
  children: 'Upload Files...',
  Loader: CustomLoaderComp,
  onClick: (e) => {
    action('click')(e);
    return new Promise((resolve) => setTimeout(resolve, 1500));
  },
  isAsync: true,
};
