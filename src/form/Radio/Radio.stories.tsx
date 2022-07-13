import React from 'react';
import Radio from './Radio.comp';
import { boolean, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const createKnobs = () => {
  const checked = boolean('checked', false);
  const ariaChecked = boolean('checked', false);
  const disabled = boolean('disabled', false);

  return {
    checked,
    'aria-checked': ariaChecked.toString(),
    disabled,
  };
};

export const Basic = () => (
  <Radio {...createKnobs()} onChange={action('radio on change')} aria-label="radio" />
);
