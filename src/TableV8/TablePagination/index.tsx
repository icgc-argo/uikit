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

import { css } from '@emotion/react';
import { Select } from '../../form/Select';
import { POPUP_POSITIONS } from '../../form/Select/styledComponents';
import { PageControl, TableActionBar } from './styled';

export const TablePagination = ({
  onPageSizeChange,
  pageSize = 20,
  pageSizeOptions = [5, 10, 20, 25, 50, 100],
  showPageSizeOptions = true,
}: {
  onPageSizeChange: () => void;
  pageSize?: number;
  pageSizeOptions?: number[];
  showPageSizeOptions?: boolean;
}) => {
  return (
    <TableActionBar>
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
            options={pageSizeOptions.map((v: number) => ({ content: v.toString(), value: v }))}
            onChange={onPageSizeChange}
            value={`${pageSize}`}
            popupPosition={POPUP_POSITIONS.UP}
          />
          rows
        </PageControl>
      ) : null}
    </TableActionBar>
  );
};
