import { css } from '@emotion/react';
import { TableV8 } from '../';

type SimpleTableData = { [key: string]: any };
type MappedTableDatum = { key: string; val: any };
type MappedTableData = Array<MappedTableDatum>;

export const SimpleTableV8 = ({
  className = '',
  data,
  isStriped = false,
}: {
  className?: string;
  data: SimpleTableData;
  isStriped?: boolean;
}) => {
  const tableData: MappedTableData = Object.keys(data).map((k) => ({ key: k, val: data[k] }));

  const columns = [
    {
      accessorKey: 'key',
    },
    {
      accessorKey: 'val',
    },
  ];

  return (
    <TableV8
      className={className}
      columns={columns}
      data={tableData}
      isStriped
      css={css`
        width: 100%;
        font-size: 72px;
        .rt-td {
          color: white;
          whitespace: unset;
        }
      `}
    />
  );
};
