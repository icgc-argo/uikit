import React, { useState } from 'react';
import { boolean, button } from '@storybook/addon-knobs';
import FormRadio from './FormRadio.comp';
import { action } from '@storybook/addon-actions';
import Hook from '../../utils/Hook';
import Checkbox from '../FormCheckbox/FormCheckbox.comp';
import RadioCheckboxGroup from '../RadioCheckboxGroup';

export const Radio = () => <FormRadio>Single Radio Button</FormRadio>;

export const RadioGroup = () => {
  const [selectedItem, setSelected] = React.useState('one');
  const onChange = (value) => {
    action('radio button clicked')(value);
    setSelected(value);
  };
  const isChecked = (item) => item === selectedItem;

  return (
    <RadioCheckboxGroup onChange={onChange} isChecked={isChecked}>
      <FormRadio value="one">One</FormRadio>
      <FormRadio value="two">Two</FormRadio>
      <FormRadio value="three">Three</FormRadio>
      <div>
        <FormRadio value="four">Four</FormRadio>
      </div>
      <FormRadio value="five">Five</FormRadio>
      <div>
        <FormRadio value="six">Six</FormRadio>
      </div>
    </RadioCheckboxGroup>
  );
};

export const DisabledRadioGroup = () => {
  const [selectedItem, setSelected] = React.useState('one');
  const onChange = (value) => {
    action('radio button clicked')(value);
    setSelected(value);
  };
  const isChecked = (item) => item === selectedItem;

  return (
    <RadioCheckboxGroup onChange={onChange} isChecked={isChecked} disabled>
      <FormRadio value="one">One</FormRadio>
      <FormRadio value="two">Two</FormRadio>
      <FormRadio value="three">Three</FormRadio>
    </RadioCheckboxGroup>
  );
};
