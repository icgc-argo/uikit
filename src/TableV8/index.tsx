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

import { css } from '@emotion/react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {
  StyledTableContainer,
  StyledResizableHeader,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
  StyledResizer,
} from './styled';

interface ReactTableProps<TData> {
  className?: string;
  columns: ColumnDef<TData>[];
  data: TData[];
  withStripes?: boolean;
  withHeaders?: boolean;
  withOutsideBorder?: boolean;
}

export const TableV8 = <TData extends object>({
  className,
  columns,
  data,
  withStripes = false,
  withHeaders = true,
  withOutsideBorder = false,
}: ReactTableProps<TData>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    debugAll: true,
  });

  return (
    <div>
      <StyledTableContainer>
        <StyledTable
          className={className}
          width={table.getCenterTotalSize()}
          withOutsideBorder={withOutsideBorder}
        >
          {withHeaders && (
            <StyledTableHead>
              {table.getHeaderGroups().map((headerGroup, headerIndex) => (
                <StyledTableRow key={headerGroup.id} index={headerIndex} withStripes={withStripes}>
                  {headerGroup.headers.map((header) => (
                    <StyledTableHeader
                      key={header.id}
                      colSpan={header.colSpan}
                      width={header.getSize()}
                    >
                      <StyledResizableHeader>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        <StyledResizer
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={header.column.getIsResizing() ? 'isResizing' : ''}
                        />
                      </StyledResizableHeader>
                    </StyledTableHeader>
                  ))}
                </StyledTableRow>
              ))}
            </StyledTableHead>
          )}

          <StyledTableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <StyledTableRow key={row.id} index={rowIndex} withStripes={withStripes}>
                {row.getVisibleCells().map((cell) => (
                  <StyledTableCell key={cell.id}>{cell.renderValue()}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </StyledTableBody>
        </StyledTable>
      </StyledTableContainer>

      {/* testing out resizable table */}

      <div
        css={css`
          * {
            box-sizing: border-box;
          }

          html {
            font-family: sans-serif;
            font-size: 14px;
          }

          .tr {
            display: flex;
          }

          tr,
          .tr {
            width: fit-content;
            height: 30px;
          }

          th,
          .th,
          td,
          .td {
            box-shadow: inset 0 0 0 1px lightgray;
            padding: 0.25rem;
          }

          th,
          .th {
            padding: 2px 4px;
            position: relative;
            font-weight: bold;
            text-align: center;
            height: 30px;
          }

          td,
          .td {
            height: 30px;
          }

          .resizer {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 5px;
            background: pink;
            cursor: col-resize;
            user-select: none;
            touch-action: none;
          }

          .resizer.isResizing {
            background: blue;
            opacity: 1;
          }

          @media (hover: hover) {
            .resizer {
              opacity: 0;
            }

            *:hover > .resizer {
              opacity: 1;
            }
          }
        `}
      >
        <StyledTableContainer>
          <StyledTable width={table.getCenterTotalSize()}>
            <StyledTableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        style={{ cursor: 'pointer' }}
                        className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                      ></div>
                    </th>
                  ))}
                </tr>
              ))}
            </StyledTableHead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} style={{ width: cell.column.getSize() }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </div>
    </div>
  );
};
