/*
 * Copyright (c) 2023 The Ontario Institute for Cancer Research. All rights reserved
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
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
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
  TableContainerInner,
} from './styled';
import { TablePaginationV8 } from './TablePagination';
import { TableTabs, TableTabsHandler, TableTabsInput } from './TableTabs';
import { ReactTableCustomProps } from './types';

// IMPORTANT
// react table v8 is headless and we made our own UI.
// see the readme & stories for help.

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends unknown, TValue> {
    columnTabs?: {
      activeTab: string;
      handleTabs: TableTabsHandler;
      tabs: TableTabsInput;
    };
    customCell?: boolean;
    customHeader?: boolean;
  }
}

interface ReactTableProps<TData> extends ReactTableCustomProps {
  columns?: ColumnDef<TData>[];
  data?: TData[];
}

export const DEFAULT_TABLE_PAGE_SIZE = 20;

// if not using pagination, put all rows on one page.
const singlePagePaginationState = {
  pagination: { pageIndex: 0, pageSize: Number.MAX_SAFE_INTEGER },
};

export const TableV8 = <TData extends object>({
  className = '',
  columns = [],
  data = [],
  enableColumnResizing = false,
  enableSorting = false,
  LoaderComponent = Loader,
  loading = false,
  manualPagination = false,
  manualSorting = false,
  onPaginationChange,
  onSortingChange,
  pageCount,
  paginationState = null,
  showPageSizeOptions = false,
  sortingState = null,
  withFilters = false,
  withHeaders = false,
  withPagination = false,
  withRowBorder = false,
  withRowHighlight = false,
  withSideBorders = false,
  withStripes = false,
  withTabs = false,
}: ReactTableProps<TData>) => {
  const table = useReactTable({
    columnResizeMode: 'onChange',
    columns,
    data,
    enableColumnResizing,
    enableSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: { pagination: { pageSize: DEFAULT_TABLE_PAGE_SIZE } },
    ...(manualPagination
      ? { manualPagination, onPaginationChange, pageCount }
      : { getPaginationRowModel: getPaginationRowModel() }),
    ...(manualSorting ? { manualSorting, onSortingChange } : {}),
    state: {
      ...(manualPagination ? { pagination: paginationState } : {}),
      ...(manualSorting ? { sorting: sortingState } : {}),
      ...(withPagination ? {} : singlePagePaginationState),
    },
  });

  return (
    <TableContainer className={className}>
      <TableContainerInner withFilters={withFilters} withTabs={withTabs}>
        <TableStyled withSideBorders={withSideBorders}>
          {withHeaders && (
            <TableHead>
              {table.getHeaderGroups().map((headerGroup, headerIndex) => (
                <TableRow key={headerGroup.id} index={headerIndex} withStripes={withStripes}>
                  {headerGroup.headers.map((header) => {
                    const canSort = enableSorting && header.column.getCanSort();
                    const isCustomHeader = header.column.columnDef.meta?.customHeader;
                    const headerContents = header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext());

                    const {
                      activeTab = '',
                      handleTabs = () => {},
                      tabs = [],
                    } = header.column.columnDef.meta?.columnTabs || {};

                    return (
                      <TableHeader
                        key={header.id}
                        colSpan={header.colSpan}
                        width={header.getSize()}
                        sorted={header.column.getIsSorted()}
                        canSort={canSort}
                      >
                        {!!tabs.length && (
                          <TableTabs activeTab={activeTab} handleTabs={handleTabs} tabs={tabs} />
                        )}
                        <SortButton
                          canSort={canSort}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {isCustomHeader ? (
                            headerContents
                          ) : (
                            <TableHeaderWrapper>{headerContents}</TableHeaderWrapper>
                          )}
                        </SortButton>
                        {header.column.getCanResize() && (
                          <Resizer
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`resizer ${
                              header.column.getIsResizing() ? 'isResizing' : ''
                            }`}
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
                  const isCustomCell = cell.column.columnDef.meta?.customCell;
                  const cellContents = flexRender(cell.column.columnDef.cell, cell.getContext());
                  return (
                    <TableCell key={cell.id} width={cell.column.getSize()}>
                      {isCustomCell ? (
                        cellContents
                      ) : (
                        <TableCellWrapper>{cellContents}</TableCellWrapper>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainerInner>
      {withPagination && (
        <TablePaginationV8
          canNextPage={table.getCanNextPage()}
          canPreviousPage={table.getCanPreviousPage()}
          nextPage={table.nextPage}
          pageCount={table.getPageCount()}
          pageIndex={table.getState().pagination.pageIndex}
          pageSize={table.getState().pagination.pageSize}
          previousPage={table.previousPage}
          setPageIndex={table.setPageIndex}
          setPageSize={table.setPageSize}
          showPageSizeOptions={showPageSizeOptions}
        />
      )}
      <LoaderComponent $loading={loading} />
    </TableContainer>
  );
};
