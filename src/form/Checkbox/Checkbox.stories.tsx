import Checkbox, { STYLEDCHECKBOX_SIZES } from './Checkbox.comp';

export default {
  component: Checkbox,
  argTypes: {
    checked: { type: 'boolean' },
    disabled: { type: 'boolean' },
    size: { type: 'radio', options: STYLEDCHECKBOX_SIZES },
    onChange: { action: 'clicked!' },
  },
};

export const Basic = (args) => <Checkbox {...args} />;
