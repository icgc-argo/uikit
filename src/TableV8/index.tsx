import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import cx from 'classnames';
import { StyledTable, StyledTbody, StyledTr, StyledTrGroup, StyledTd } from './styled';

export const TableV8 = ({
  className = '',
  columns = [],
  data = [],
  isStriped = false,
}: {
  className?: string;
  columns: any[];
  data: any[];
  isStriped: boolean;
}) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTable className={cx('rt-table', className)} role="grid">
      {/* TODO: thead */}
      <StyledTbody className="rt-tbody">
        {table.getRowModel().rows.map((row, rowIndex) => (
          <StyledTrGroup key={row.id} className="rt-tr-group" role="rowgroup">
            <StyledTr
              className={`rt-tr ${rowIndex % 2 ? '-even' : '-odd'} ${isStriped ? '-striped' : ''} `}
              role="row"
            >
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id} className="rt-td">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </StyledTr>
          </StyledTrGroup>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};
