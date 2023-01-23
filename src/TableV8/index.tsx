import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { StyledTable, StyledTbody, StyledTr, StyledTrGroup } from './styled';

export const TableV8 = ({
  columns = [],
  data = [],
  isStriped = false,
}: {
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
    <StyledTable className="rt-table" role="grid">
      {/* TODO: thead */}
      <StyledTbody className="rt-tbody">
        {table.getRowModel().rows.map((row, rowIndex) => (
          <StyledTrGroup key={row.id} className="rt-tr-group" role="rowgroup">
            <StyledTr
              className={`rt-tr ${rowIndex % 2 ? '-even' : '-odd'} ${isStriped ? '-striped' : ''} `}
              role="row"
              isStriped={isStriped}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </StyledTr>
          </StyledTrGroup>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};
