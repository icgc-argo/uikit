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

import { Checkbox } from '../../form/Checkbox';
import { PropsWithChildren, useState } from 'react';
import { TableCellWrapper } from '../styled';

export const TableRowSelectionCheckbox = ({
  checked,
  onChange,
  value,
}: {
  checked: boolean;
  onChange: (value?: string) => void;
  value: string;
}) => (
  <Checkbox
    aria-label="table-row-select"
    checked={checked}
    onChange={() => onChange(value)}
    value={value}
  />
);

export function useTableRowSelection({
  selectionKeyField,
  totalEntriesCount,
}: {
  selectionKeyField: string;
  totalEntriesCount: number;
}) {
  const [allRowsSelected, setAllRowsSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [unselectedRows, setUnselectedRows] = useState<string[]>([]);

  const setSelectedRowIds = (rowIds: string[]) => setSelectedRows(rowIds);

  const setUnselectedRowIds = (rowIds: string[]) => setUnselectedRows(rowIds);

  const toggleHandler = (rowId: string) => {
    const notMatchesSelectionString = (id: string) => id !== rowId;
    if (allRowsSelected) {
      setUnselectedRowIds(
        unselectedRows.includes(rowId)
          ? unselectedRows.filter(notMatchesSelectionString)
          : [...unselectedRows, rowId],
      );
    } else {
      setSelectedRowIds(
        selectedRows.includes(rowId)
          ? selectedRows.filter(notMatchesSelectionString)
          : [...selectedRows, rowId],
      );
    }
  };

  const toggleAllHandler = () => {
    setSelectedRowIds([]);
    setUnselectedRowIds([]);
    setAllRowsSelected(!allRowsSelected);
  };

  const isSelected = (objectId: string) =>
    allRowsSelected ? !unselectedRows.includes(objectId) : selectedRows.includes(objectId);

  const selectedRowsCount = allRowsSelected
    ? totalEntriesCount - unselectedRows.length
    : selectedRows.length;

  return {
    allRowsSelected,
    isSelected,
    selectedRows,
    selectedRowsCount,
    selectionKeyField,
    toggleAllHandler,
    toggleHandler,
    unselectedRows,
  };
}

export const RowSelectionCell = ({
  children,
  isSelected,
}: PropsWithChildren<{
  isSelected: boolean;
}>) => <TableCellWrapper selected={isSelected}>{children}</TableCellWrapper>;
