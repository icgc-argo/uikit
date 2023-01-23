import { css } from '@emotion/react';
import { TableV8 } from '../';

type SimpleTableData = { [key: string]: any };
type MappedTableDatum = { key: string; val: any };
type MappedTableData = Array<MappedTableDatum>;

export const SimpleTableV8 = ({
  data,
  isStriped = false,
}: {
  data: SimpleTableData;
  isStriped?: boolean;
}) => {
  const tableData: MappedTableData = Object.keys(data).map((k) => ({ key: k, val: data[k] }));

  const columns = [
    {
      accessorKey: 'key',
      style: { whiteSpace: 'unset' },
    },
    {
      accessorKey: 'val',
      style: { whiteSpace: 'unset' },
    },
  ];

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <TableV8 data={tableData} columns={columns} isStriped />
    </div>
  );
};
