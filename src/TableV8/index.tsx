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
                  {cell.renderValue()}
                </StyledTd>
              ))}
            </StyledTr>
          </StyledTrGroup>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};
