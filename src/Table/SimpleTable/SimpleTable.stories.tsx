import React from 'react';
import SimpleTable from './SimpleTable.comp';

export const Basic = () => {
  const fruitData = {
    Bananas: 39,
    Peaches: 194,
    Oranges: 13,
    Pears: 8,
    Lemons: 1,
  };
  return <SimpleTable data={fruitData} />;
};
