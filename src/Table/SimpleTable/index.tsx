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
import { Table } from '../';

type SimpleTableData = { [key: string]: any };
type MappedTableData = Array<{ key: string; val: any }>;
type SimpleTableProps = {
  className?: string;
  data: SimpleTableData;
};

const columns = [
  {
    accessorKey: 'key',
  },
  {
    accessorKey: 'val',
    cell: ({ renderValue }) => renderValue(),
  },
];

const mapSimpleTableData = (data: SimpleTableData): MappedTableData =>
  Object.keys(data).map((k) => ({ key: k, val: data[k] }));

export const SimpleTable = ({ className = '', data }: SimpleTableProps) => {
  const tableData = mapSimpleTableData(data);

  return (
    <Table
      className={className}
      columns={columns}
      data={tableData}
      withSideBorders
      withStripes
      css={css`
        .rt-td {
          flex: 100 0 auto;
          white-space: unset;
          width: 100px;
        }
      `}
    />
  );
};
