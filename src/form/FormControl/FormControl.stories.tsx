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

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { FormControl } from '.';
import { Typography } from '../../Typography';
import { FormCheckbox as FormCheckboxComp } from '../FormCheckbox';
import { FormHelperText } from '../FormHelperText';
import { Input as InputComp } from '../Input';
import { InputLabel } from '../InputLabel';
import { MultiSelect as MultiSelectComp, Option } from '../MultiSelect';

export default {
	component: FormControl,
};

export const FormCheckbox = () => ({
	render: () => {
		const [checked, setChecked] = useState(false);
		const disabled = boolean('disabled', false);
		const error = boolean('error', false);
		const required = boolean('required', true);
		const value = 'myCheckbox';

		return (
			<FormControl disabled={disabled} error={error} required={required}>
				<FormCheckboxComp
					aria-label="I agree with the terms and conditions"
					checked={checked}
					onChange={() => {
						if (disabled) {
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
	},
});

export const MultiSelect = () => ({
	render: () => {
		const [value, setValue] = React.useState([]);
		return (
			<FormControl
				error={boolean('error', false)}
				required={boolean('required', true)}
				disabled={boolean('disabled', false)}
			>
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
	},
});

export const Input = () => ({
	render: () => (
		<FormControl
			required={boolean('required', true)}
			disabled={boolean('disabled', false)}
			error={boolean('error', false)}
		>
			<InputLabel htmlFor="text-input">text input</InputLabel>
			<InputComp aria-label="text input" id="text-input" placeholder="put some text" />
			<FormHelperText>Some helper text</FormHelperText>
			<FormHelperText onErrorOnly>This field has an error!</FormHelperText>
		</FormControl>
	),
});
