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
  StyledTableHeader,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
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
    debugAll: true,
  });

  return (
    <StyledTableContainer>
      <StyledTable className={className} withOutsideBorder={withOutsideBorder}>
        {withHeaders && (
          <StyledTableHead>
            {table.getHeaderGroups().map((headerGroup, headerIndex) => (
              <StyledTableRow key={headerGroup.id} index={headerIndex} withStripes={withStripes}>
                {headerGroup.headers.map((header) => (
                  <StyledTableHeader key={header.id} colSpan={header.colSpan}>
                    <div
                      css={css`
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      `}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
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
  );
};
