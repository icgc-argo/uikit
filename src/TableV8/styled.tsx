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
import isPropValid from '@emotion/is-prop-valid';
import { styled } from '../ThemeProvider';
import colors from '../theme/defaultTheme/colors';
import { DnaLoader } from '../DnaLoader';

export const TABLE_CLASSES = {
  LOADING_COMPONENT: 'rt-loading',
  RESIZABLE_HEADER_CONTENT: 'rt-resizable-header-content',
  RESIZER: 'rt-resizer',
  SORT_BUTTON: 'rt-sort-button',
  TABLE_CONTAINER: 'rt-table-container',
  TABLE: 'rt-table',
  TBODY: 'rt-tbody',
  TD: 'rt-td',
  TH: 'rt-th',
  THEAD: 'rt-thead -header',
  TR_GROUP: 'rt-tr-group',
  TR: 'rt-tr',
};

const COLORS = {
  BACKGROUND: colors.grey_4,
  BORDER: colors.grey_2,
  ROW_HIGHLIGHT_BACKGROUND: colors.grey_3,
};

const TableContainer = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.TABLE_CONTAINER, props.className)} />
);
export const StyledTableContainer = styled(TableContainer)`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  position: relative;
`;

const Table = (
  props: React.PropsWithChildren<{
    className?: string;
    withSideBorders?: boolean;
  }>,
) => <table {...props} className={clsx(TABLE_CLASSES.TABLE, props.className)} />;
export const StyledTable = styled(Table, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  border: solid 1px ${COLORS.BORDER};
  border-right-width: ${(props) => `${props.withSideBorders ? '1' : '0'}px`};
  border-left-width: ${(props) => `${props.withSideBorders ? '1' : '0'}px`};
  border-collapse: collapse;
  width: 100%;
  .${TABLE_CLASSES.TH}, .${TABLE_CLASSES.TD} {
    &:not(:last-of-type) {
      border-right: 1px solid ${COLORS.BORDER};
    }
  }
  .${TABLE_CLASSES.TH}, .${TABLE_CLASSES.TD}, .${TABLE_CLASSES.SORT_BUTTON} {
    padding: 2px 8px;
    font-family: Work Sans, sans-serif;
    font-size: 12px;
    line-height: 1.33;
    height: 24px;
    text-align: left;
  }
  .${TABLE_CLASSES.TH}, .${TABLE_CLASSES.SORT_BUTTON} {
    font-weight: bold;
  }
`;

const TableHead = (props: React.PropsWithChildren<{ className?: string }>) => (
  <thead {...props} className={clsx(TABLE_CLASSES.THEAD, props.className)} />
);
export const StyledTableHead = styled(TableHead)``;

const TableHeader = (
  props: React.PropsWithChildren<{
    canSort?: boolean;
    className?: string;
    colSpan?: number;
    sorted?: 'asc' | 'desc' | false;
    width?: number;
  }>,
) => <th {...props} className={clsx(TABLE_CLASSES.TH, props.className)} />;
export const StyledTableHeader = styled(TableHeader, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['width'].includes(prop),
})`
  border-bottom: 1px solid ${COLORS.BORDER};
  position: relative;
  width: ${(props) => `${props.width || 1}px`};
  &:last-of-type {
    overflow-x: hidden; // stop resizer from adding horizontal scrollbar
  }
  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${(props) =>
    props.sorted &&
    `
      box-shadow: inset 0 ${props.sorted === 'asc' ? '' : '-'}3px 0 0 rgb(7 116 211);
  `}
  ${(props) =>
    props.canSort &&
    `
      padding: 0 !important;
     
  `}
`;

const TableBody = (props: React.PropsWithChildren<{ className?: string }>) => (
  <tbody {...props} className={clsx(TABLE_CLASSES.TBODY, props.className)} />
);
export const StyledTableBody = styled(TableBody)``;

const TableRow = (
  props: React.PropsWithChildren<{
    className?: string;
    index: number;
    withRowBorder?: boolean;
    withRowHighlight?: boolean;
    withStripes?: boolean;
  }>,
) => <tr {...props} className={clsx(TABLE_CLASSES.TR, props.className)} />;
export const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  background: ${(props) =>
    props.index % 2 && props.withStripes ? COLORS.BACKGROUND : 'transparent'};
  border-bottom: ${(props) => (props.withRowBorder ? `1px solid ${COLORS.BORDER}` : '0 none')};
  ${(props) =>
    props.withRowHighlight &&
    `
    &:hover {
      background: ${COLORS.ROW_HIGHLIGHT_BACKGROUND}
    }
  `}
`;

const TableCell = (props: React.PropsWithChildren<{ className?: string; width?: number }>) => (
  <td {...props} className={clsx(TABLE_CLASSES.TD, props.className)} />
);
export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['width'].includes(prop),
})`
  width: ${(props) => `${props.width || 1}px`};
`;

const Resizer = (
  props: React.PropsWithChildren<{
    className?: string;
    onMouseDown: (e: unknown) => void;
    onTouchStart: (e: unknown) => void;
  }>,
) => <button {...props} className={clsx(TABLE_CLASSES.RESIZER, props.className)} type="button" />;
export const StyledResizer = styled(Resizer)`
  border: 0 none;
  position: absolute;
  right: -6px;
  top: 0;
  height: 100%;
  width: 13px;
  cursor: col-resize;
  background: transparent;
  user-select: none; // send event to <Resizer />
  touch-action: none; // send event to <Resizer />
`;

const Loader = (props: React.PropsWithChildren<{ className?: string; loading?: boolean }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.TABLE_CONTAINER, props.className)}>
    <DnaLoader />
  </div>
);
export const StyledLoader = styled(Loader, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0;
  ${(props) =>
    props.loading &&
    `
      opacity: 1;
      z-index: 2;
      pointer-events: all;
    `}
`;

const SortButton = (
  props: React.PropsWithChildren<{ className?: string; onClick: (e: unknown) => void }>,
) => <button {...props} className={clsx(TABLE_CLASSES.SORT_BUTTON, props.className)} />;
export const StyledSortButton = styled(SortButton, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  background: none;
  border: 0 none;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
