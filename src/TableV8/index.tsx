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
  OnChangeFn,
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

// IMPORTANT
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
  loading?: boolean;
  manualSorting?: boolean;
  withHeaders?: boolean;
  enableColumnResizing?: boolean;
  withRowBorder?: boolean;
  withRowHighlight?: boolean;
  withSideBorders?: boolean;
  enableSorting?: boolean;
  withStripes?: boolean;
  state?: { sorting?: SortingState };
  onSortingChange?: OnChangeFn<SortingState>;
}

export const TableV8 = <TData extends object>({
  className = '',
  columns = [],
  data = [],
  LoaderComponent = Loader,
  loading = false,
  manualSorting = false,
  withHeaders = false,
  enableColumnResizing = false,
  withRowBorder = false,
  withRowHighlight = false,
  withSideBorders = false,
  enableSorting = false,
  withStripes = false,
  state = {},
  onSortingChange,
}: ReactTableProps<TData>) => {
  const table = useReactTable({
    columnResizeMode: 'onChange',
    columns,
    data,
    enableColumnResizing,
    enableSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting,
    ...(manualSorting ? { onSortingChange } : {}),
    state: {
      ...(manualSorting ? { sorting: state.sorting || [] } : {}),
    },
  });

  return (
    <TableContainer className={className} withFilters={true}>
      <TableStyled withSideBorders={withSideBorders}>
        {withHeaders && (
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, headerIndex) => (
              <TableRow key={headerGroup.id} index={headerIndex} withStripes={withStripes}>
                {headerGroup.headers.map((header) => {
                  const canSort = enableSorting && header.column.getCanSort();
                  const isCustom = header.column.columnDef.meta?.customHeader;
                  const headerContents = header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext());

                  return (
                    <TableHeader
                      key={header.id}
                      colSpan={header.colSpan}
                      width={header.getSize()}
                      sorted={header.column.getIsSorted()}
                      canSort={canSort}
                    >
                      <SortButton
                        canSort={canSort}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {isCustom ? (
                          headerContents
                        ) : (
                          <TableHeaderWrapper>{headerContents}</TableHeaderWrapper>
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
      <LoaderComponent loading={loading} />
    </TableContainer>
  );
};
