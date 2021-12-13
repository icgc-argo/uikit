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

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { css } from "@emotion/core";
import Button from ".";
import { asyncDummyFunc, placeholderImageURLRoot } from "../testUtil";
import Icon from "src/Icon";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "./constants";

const getOnClick = (isAsync: boolean, onClick: any) =>
  isAsync ? () => asyncDummyFunc : onClick;

const Template: ComponentStory<typeof Button> = ({ onClick, ...args }) => (
  <Button onClick={getOnClick(args.isAsync, onClick)} {...args} />
);

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: BUTTON_VARIANTS,
      control: { type: "radio" },
    },
    size: {
      options: BUTTON_SIZES,
      control: { type: "radio" },
    },
    onClick: {
      action: "Clicked",
    },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
  },
} as ComponentMeta<typeof Button>;

const sharedArgs = {};

export const Basic = Template.bind({});
Basic.args = { ...sharedArgs, children: "Button" };

export const MultipleNodes = Template.bind({});
MultipleNodes.args = {
  ...sharedArgs,
  children: (
    <>
      <img src={`${placeholderImageURLRoot}/12/20`} />
      <span style={{ color: "#64D518" }}>Red Span</span>
      <img src={`${placeholderImageURLRoot}/20/20`} />
      <img src={`${placeholderImageURLRoot}/7/7`} />
    </>
  ),
};

MultipleNodes.storyName = "Child nodes";

export const Loader = Template.bind({});
Loader.args = {
  isAsync: true,
  children: "Click me",
};

export const CustomLoader = Template.bind({});
const CustomLoaderComp = ({ theme, variant }) => (
  <div>
    <Icon
      name="spinner"
      width={"12px"}
      height={"12px"}
      fill={theme.button.textColors[variant].default}
      css={css`
        margin-right: 4px;
      `}
    />
    VALIDATING FILES
  </div>
);

CustomLoader.args = {
  Loader: CustomLoaderComp,
  isAsync: true,
  children: "Upload files...",
};
