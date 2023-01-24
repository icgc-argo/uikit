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
