/*
 * Copyright (c) 2020 The Ontario Institute for Cancer Research. All rights reserved
 *
 * This program and the accompanying materials are made available under the terms of
 * the GNU Affero General Public License v3.0. You should have received a copy of the
 * GNU Affero General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import {
  Loader,
  Resizer,
  SortButton,
  TableStyled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableCellWrapper,
  TableHeaderWrapper,
} from './styled';

// ==================================================
// IMPORTANT
// ==================================================
// react table v8 is headless and we made our own UI.
// see the readme & stories for help.

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends unknown, TValue> {
    customCell?: boolean;
    customHeader?: boolean;
  }
}

interface ReactTableProps<TData> {
  className?: string;
  columns: ColumnDef<TData>[];
  data: TData[];
  LoaderComponent?: any;
  loading?: boolean | null;
  manualSorting?: boolean;
  withHeaders?: boolean;
  withResize?: boolean;
  withRowBorder?: boolean;
  withRowHighlight?: boolean;
  withSideBorders?: boolean;
  withSorting?: boolean;
  withStripes?: boolean;
}

export const TableV8 = <TData extends object>({
  className = '',
  columns = [],
  data = [],
  LoaderComponent = Loader,
  loading = null,
  manualSorting = false,
  withHeaders = false,
  withResize = false,
  withRowBorder = false,
  withRowHighlight = false,
  withSideBorders = false,
  withSorting = true,
  withStripes = false,
}: ReactTableProps<TData>) => {
  const [sortingState, setSortingState] = useState<SortingState>([]);

  const table = useReactTable({
    columnResizeMode: 'onChange',
    columns,
    data,
    enableColumnResizing: withResize,
    enableSorting: withSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting,
    onSortingChange: setSortingState,
    state: {
      sorting: sortingState,
    },
  });

  return (
    <TableContainer className={className}>
      <TableStyled withSideBorders={withSideBorders}>
        {withHeaders && (
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, headerIndex) => (
              <TableRow key={headerGroup.id} index={headerIndex} withStripes={withStripes}>
                {headerGroup.headers.map((header) => {
                  const isCustom = header.column.columnDef.meta?.customHeader;
                  const headerText = header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext());

                  return (
                    <TableHeader
                      key={header.id}
                      colSpan={header.colSpan}
                      width={header.getSize()}
                      sorted={header.column.getIsSorted()}
                      canSort={header.column.getCanSort()}
                    >
                      <SortButton
                        canSort={header.column.getCanSort()}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {isCustom ? (
                          headerText
                        ) : (
                          <TableHeaderWrapper>{headerText}</TableHeaderWrapper>
                        )}
                      </SortButton>
                      {header.column.getCanResize() && (
                        <Resizer
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                        />
                      )}
                    </TableHeader>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
        )}

        <TableBody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <TableRow
              index={rowIndex}
              key={row.id}
              withRowBorder={withRowBorder}
              withRowHighlight={withRowHighlight}
              withStripes={withStripes}
            >
              {row.getVisibleCells().map((cell) => {
                const isCustom = cell.column.columnDef.meta?.customCell;
                const cellContents = flexRender(cell.column.columnDef.cell, cell.getContext());
                return (
                  <TableCell key={cell.id} width={cell.column.getSize()}>
                    {isCustom ? cellContents : <TableCellWrapper>{cellContents}</TableCellWrapper>}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
      {loading !== null && <LoaderComponent loading={loading} />}
    </TableContainer>
  );
};
