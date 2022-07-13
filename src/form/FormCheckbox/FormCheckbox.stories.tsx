import { useCallback, useState } from 'react';
import RadioCheckboxGroup from '../RadioCheckboxGroup';
import FormCheckbox from './FormCheckbox.comp';

export const Default = () => <FormCheckbox>Item</FormCheckbox>;

export const CheckboxGroup = () => {
  const [selectedItems, setSelected] = useState(new Set([]));
  const isChecked = useCallback((item) => selectedItems.has(item), [selectedItems]);
  const onChange = (event) => {
    const value = event.target.defaultValue;

    selectedItems.has(value) ? selectedItems.delete(value) : selectedItems.add(value);
    const newSelectedItems = new Set(selectedItems);

    setSelected(newSelectedItems);
  };
  return (
    <RadioCheckboxGroup onChange={onChange} isChecked={isChecked} disabled>
      <FormCheckbox aria-label="Sausage" value="sausage">
        Sausage
      </FormCheckbox>
      <FormCheckbox aria-label="Rashers" value="rashers">
        Rashers
      </FormCheckbox>
      <FormCheckbox aria-label="Black Pudding" value="black_pudding">
        Black Pudding
      </FormCheckbox>
      <FormCheckbox aria-label="Grilled Tomato" value="grilled_tomato">
        Grilled Tomato
      </FormCheckbox>
      <FormCheckbox aria-label="Tayto Crisps" value="tayto_crisps">
        Tayto Crisps
      </FormCheckbox>
      <FormCheckbox aria-label="3-in-1" value="three_in_one">
        3-in-1
      </FormCheckbox>
    </RadioCheckboxGroup>
  );
};

export default {
  component: FormCheckbox,
};
