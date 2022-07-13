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

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import InputComp from '../../form/Input';
import MultiSelectComp, { Option } from '../../form/MultiSelect';
import Typography from '../../Typography';
import FormCheckboxComp from '../FormCheckbox/FormCheckbox.comp';
import FormHelperText from '../FormHelperText';
import InputLabel from '../InputLabel';
import FormControl from './FormControl.comp';

export const FormCheckbox = (args) => {
  const [checked, setChecked] = useState(false);
  const value = 'myCheckbox';

  return (
    <FormControl {...args}>
      <FormCheckboxComp
        aria-label="I agree with the terms and conditions"
        checked={checked}
        onChange={() => {
          if (args.disabled) {
            action('checkbox clicked while disabled')(value, checked);
          } else {
            action('checkbox clicked')(value, !checked);
            setChecked(!checked);
          }
        }}
        value={value}
      >
        <Typography bold component="span">
          I agree
        </Typography>{' '}
        with the terms and conditions.
      </FormCheckboxComp>

      <FormHelperText onErrorOnly>This field is required!</FormHelperText>
    </FormControl>
  );
};

export const _MultiSelect = () => {
  const [value, setValue] = React.useState([]);
  return (
    <FormControl>
      <InputLabel htmlFor="country">Country</InputLabel>
      <MultiSelectComp
        aria-label="multi-select"
        inputProps={{ id: 'country' }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Add one or more..."
      >
        <Option value="Australia">Australia</Option>
        <Option value="Cambodia">Cambodia</Option>
        <Option value="Cameroon">Cameroon</Option>
        <Option value="Canada">Canada</Option>
      </MultiSelectComp>

      <FormHelperText>Some helper text</FormHelperText>
    </FormControl>
  );
};

export const Input = () => (
  <FormControl>
    <InputLabel htmlFor="text-input">text input</InputLabel>
    <InputComp aria-label="text input" id="text-input" placeholder="put some text" />
    <FormHelperText>Some helper text</FormHelperText>
    <FormHelperText onErrorOnly>This field has an error!</FormHelperText>
  </FormControl>
);

export default {
  component: FormControl,
};
