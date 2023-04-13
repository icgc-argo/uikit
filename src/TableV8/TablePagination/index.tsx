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

import { css, useTheme } from '@emotion/react';
import { Select } from '../../form/Select';
import { POPUP_POSITIONS } from '../../form/Select/styledComponents';
import { Arrow, DoubleArrow, PageButton, PageControl, TableActionBar } from './styled';
import { ceil, floor, range } from 'lodash';
import {
  NextTablePaginationRule,
  TablePageSizeChangeArguments,
  TablePaginationRule,
} from '../types';
import { useState } from 'react';

// given 1 5 5 or 2 5 5, return [0,1,2,3,4]
function getPagesAround(p: number, num: number, pages: number) {
  const l = p - floor(num / 2);
  const r = p + ceil(num / 2);
  if (r > pages) {
    return range(pages - num, pages);
  }

  if (l < 0) {
    return range(0, num);
  }
  return range(l, r);
}

export const useTablePagination = (initialPagination: TablePaginationRule) => {
  const [paginationState, setPaginationState] = useState<TablePaginationRule>(initialPagination);

  const handlePaginationState = (nextPagingState: NextTablePaginationRule) => {
    setPaginationState({ ...paginationState, ...nextPagingState });
  };
  const onPageChange = async (newPageNum: number) => {
    handlePaginationState({ page: newPageNum }); // newPageNum is zero indexed
  };
  const onPageSizeChange = async ({ pageSize, totalRows }: TablePageSizeChangeArguments) => {
    handlePaginationState({
      page: 0,
      pages: Math.ceil(totalRows / pageSize),
      pageSize: pageSize,
    });
  };

  return { paginationState, handlePaginationState, onPageChange, onPageSizeChange };
};

export const TablePaginationV8 = ({
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 25, 50, 100],
  paginationState,
  showPageSizeOptions = true,
  totalRows,
}: {
  onPageChange: (page: number) => void;
  onPageSizeChange?: ({ pageSize, totalRows }: TablePageSizeChangeArguments) => void; // the page size value in the UI is a string
  pageSizeOptions?: number[];
  paginationState?: TablePaginationRule;
  showPageSizeOptions?: boolean;
  totalRows?: number;
}) => {
  const theme = useTheme();
  return (
    <TableActionBar showPageSizeOptions={showPageSizeOptions}>
      {showPageSizeOptions ? (
        <PageControl>
          Show
          <Select
            css={css`
              z-index: 10;
              transform: scale(0.8);
              & [role='button'] {
                min-width: 70px;
              }
            `}
            aria-label="Select page size"
            options={pageSizeOptions.map((v: number) => ({
              content: v.toString(),
              value: v.toString(),
            }))}
            onChange={(pageSizeValue: string) => {
              // the type of values returned by onChange is always string,
              // even if we provide a number in the options prop.
              onPageSizeChange({ pageSize: parseInt(pageSizeValue), totalRows });
            }}
            value={paginationState.pageSize.toString()}
            popupPosition={POPUP_POSITIONS.UP}
          />
          rows
        </PageControl>
      ) : null}
      <PageControl>
        <PageButton
          onClick={() => {
            if (paginationState.page === 0) return;
            onPageChange(0);
          }}
        >
          <DoubleArrow transform="rotate(180)" />
        </PageButton>
        <PageButton
          onClick={() => {
            if (paginationState.page === 0) return;
            onPageChange(paginationState.page - 1);
          }}
        >
          <Arrow transform="rotate(180)" />
        </PageButton>
        {getPagesAround(paginationState.page, 5, paginationState.pages).map(
          (p) =>
            p > -1 &&
            p < paginationState.pages && (
              <PageButton
                key={p}
                onClick={() => onPageChange(p)}
                css={css`
                  background-color: ${paginationState.page === p ? theme.colors.secondary_4 : ''};
                `}
              >
                {p + 1}
              </PageButton>
            ),
        )}
        <PageButton
          onClick={() => {
            if (paginationState.page === paginationState.pages - 1) return;
            onPageChange(paginationState.page + 1);
          }}
        >
          <Arrow />
        </PageButton>
        <PageButton
          onClick={() => {
            if (paginationState.page === paginationState.pages - 1) return;
            onPageChange(paginationState.pages - 1);
          }}
        >
          <DoubleArrow />
        </PageButton>
      </PageControl>
    </TableActionBar>
  );
};
