import React from 'react';
import TablePagination from './TablePagination.comp';
import times from 'lodash/times';
import { boolean } from '@storybook/addon-knobs';

import Table from '..';

export const Basic = () => {
  const containerRef = React.createRef<HTMLDivElement>();
  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <Table
        parentRef={containerRef}
        data={times(104, (idx) => ({
          id: idx,
          prop2: idx,
          prop3: 'some text of ' + idx,
        }))}
        columns={[
          {
            sortable: false,
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Property 2',
            accessor: 'prop2',
          },
          {
            Header: 'Property 3',
            accessor: 'prop3',
          },
        ]}
        showPagination={boolean('showPagination', true)}
        showPageSizeOptions={boolean('showPageSizeOptions', true)}
      />
    </div>
  );
};

Basic.story = {
  parameters: {
    info: {
      propTables: [TablePagination],
      propTablesExclude: [Table],
    },
  },
};
