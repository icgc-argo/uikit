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

import clsx from 'clsx';
import { styled } from '../ThemeProvider';

export const TABLE_CLASSES = {
  TABLE: 'rt-table',
  TBODY: 'rt-tbody',
  TD: 'rt-td',
  TR_GROUP: 'rt-tr-group',
  TR: 'rt-tr',
};

const Table = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div role="table" {...props} className={clsx(TABLE_CLASSES.TABLE, props.className)} />
);
export const StyledTable = styled(Table)`
  border: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  flex: auto 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  * {
    box-sizing: border-box;
  }
`;

const TableBody = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div role="tbody" {...props} className={clsx(TABLE_CLASSES.TBODY, props.className)} />
);
export const StyledTableBody = styled(TableBody)`
  min-width: 200px;
  flex: 99999 1 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const TableRowGroup = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div role="rowgroup" {...props} className={clsx(TABLE_CLASSES.TR_GROUP, props.className)} />
);
export const StyledTableRowGroup = styled(TableRowGroup)`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TableRow = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div role="row" {...props} className={clsx(TABLE_CLASSES.TR, props.className)} />
);
export const StyledTableRow = styled(TableRow)`
  flex: 1 0 auto;
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.white};
  &.-even.-striped {
    background: ${({ theme }) => theme.colors.grey_4};
  }
`;

const TableCell = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div role="cell" {...props} className={clsx(TABLE_CLASSES.TD, props.className)} />
);
export const StyledTableCell = styled(TableCell)`
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1 0 0px;
  padding: 7px 5px;
  overflow: hidden;
  transition: width 0.3s ease 0s, min-width, padding, opacity;
  .${TABLE_CLASSES.TBODY} & {
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    min-height: 28px;
    line-height: 1.33;
    padding: 2px 8px;
    border-right: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
    display: flex;
    align-items: center;
    &:last-of-type {
      border-right: 0px;
    }
  }
`;
