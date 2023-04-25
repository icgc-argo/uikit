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
import { Updater } from '@tanstack/react-table';

// given 1 5 5 or 2 5 5, return [0,1,2,3,4]
function getPagesAround(pageIndex: number, rangeSize: number, pageCount: number) {
  const prevPage = pageIndex - floor(rangeSize / 2);
  const nextPage = pageIndex + ceil(rangeSize / 2);
  return pageIndex === pageCount - 1 // currently on last page
    ? range(pageCount - rangeSize, pageCount)
    : pageIndex === 0 // currently on first page
    ? range(0, rangeSize)
    : range(prevPage, nextPage);
}

export const TablePaginationV8 = ({
  canNextPage,
  canPreviousPage,
  nextPage,
  pageCount,
  pageIndex,
  pageSize,
  pageSizeOptions = [5, 10, 20, 25, 50, 100],
  previousPage,
  setPageIndex,
  setPageSize,
  showPageSizeOptions,
}: {
  canNextPage: boolean;
  canPreviousPage: boolean;
  nextPage: () => void;
  pageCount: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions?: number[];
  previousPage: () => void;
  setPageIndex: (updater: Updater<number>) => void;
  setPageSize: (updater: Updater<number>) => void;
  showPageSizeOptions?: boolean;
}) => {
  const theme = useTheme();
  return (
    <TableActionBar showPageSizeOptions={showPageSizeOptions}>
      {showPageSizeOptions ? (
        <PageControl>
          Show
          <Select
            aria-label="Select page size"
            css={css`
              z-index: 10;
              transform: scale(0.8);
              & [role='button'] {
                min-width: 70px;
              }
            `}
            onChange={(pageSizeValue: string) => setPageSize(() => Number(pageSizeValue))}
            options={pageSizeOptions.map((option: number) => ({
              content: option.toString(),
              value: option.toString(),
            }))}
            popupPosition={POPUP_POSITIONS.UP}
            value={pageSize.toString()}
          />
          rows
        </PageControl>
      ) : null}
      <PageControl>
        <PageButton onClick={() => setPageIndex(() => 0)}>
          <DoubleArrow transform="rotate(180)" />
        </PageButton>
        <PageButton
          onClick={() => {
            if (canPreviousPage) {
              previousPage();
            }
          }}
        >
          <Arrow transform="rotate(180)" />
        </PageButton>
        {getPagesAround(pageIndex, 5, pageCount).map(
          (pageItem) =>
            pageItem > -1 &&
            pageItem < pageCount && (
              <PageButton
                css={css`
                  background-color: ${pageIndex === pageItem ? theme.colors.secondary_4 : ''};
                `}
                key={pageItem}
                onClick={() => setPageIndex(() => pageItem)}
              >
                {pageItem + 1}
              </PageButton>
            ),
        )}
        <PageButton
          onClick={() => {
            if (canNextPage) {
              nextPage();
            }
          }}
        >
          <Arrow />
        </PageButton>
        <PageButton onClick={() => setPageIndex(() => pageCount - 1)}>
          <DoubleArrow />
        </PageButton>
      </PageControl>
    </TableActionBar>
  );
};
