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

import clsx from 'clsx';
import isPropValid from '@emotion/is-prop-valid';
import { styled } from '../ThemeProvider';
import colors from '../theme/defaultTheme/colors';
import { DnaLoader } from '../DnaLoader';
import { css } from '@emotion/react';

export const TABLE_CLASSES = {
  LOADING_COMPONENT: 'rt-loading',
  RESIZABLE_HEADER_CONTENT: 'rt-resizable-header-content',
  RESIZER: 'rt-resizer',
  SORT_BUTTON: 'rt-sort-button',
  TABLE_CONTAINER: 'rt-table-container',
  TABLE_CONTAINER_INNER: 'rt-table-container-inner',
  TABLE: 'rt-table',
  TBODY: 'rt-tbody',
  TD_WRAPPER: 'rt-td-wrapper',
  TD: 'rt-td',
  TH_WRAPPER: 'rt-th-wrapper',
  TH: 'rt-th',
  THEAD: 'rt-thead -header',
  TR_GROUP: 'rt-tr-group',
  TR: 'rt-tr',
};

const COLORS = {
  BACKGROUND_HIGHLIGHT: colors.grey_3,
  BACKGROUND_SECONDARY: colors.grey_4,
  BACKGROUND_SELECTED: colors.secondary_4,
  BACKGROUND: colors.white,
  BORDER: colors.grey_2,
};

const tableCellHeaderStyle = css`
  padding: 0;
  &:not(:last-of-type) {
    border-right: 1px solid ${COLORS.BORDER};
  }
`;

const tableCellHeaderWrapperStyle = css`
  padding: 2px 8px;
  font-family: Work Sans, sans-serif;
  font-size: 12px;
  line-height: 1.33;
  min-height: 28px;
  text-align: left;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

const tableHeaderWrapperStyle = css`
  font-weight: bold;
  display: flex;
`;

const TableContainerComp = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.TABLE_CONTAINER, props.className)} />
);
export const TableContainer = styled(TableContainerComp, {
  // naming conflict with <Table />
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background: ${COLORS.BACKGROUND};
`;

/*
 * stop cells from having overlapping border if we have side borders on our container
 */
const sideBordersStyle = css`
  border-right: 1px solid ${colors.grey_2};
  border-left: 1px solid ${colors.grey_2};

  table,
  tr td:first-of-type,
  tr th:first-of-type {
    border-left: none;
  }
  table,
  tr td:last-of-type,
  tr th:last-of-type {
    border-right: none;
  }
`;

const TableContainerInnerComp = (
  props: React.PropsWithChildren<{
    className?: string;
    withFilters?: boolean;
    withTabs?: boolean;
    withSideBorders?: boolean;
  }>,
) => <div {...props} className={clsx(TABLE_CLASSES.TABLE_CONTAINER_INNER, props.className)} />;
export const TableContainerInner = styled(TableContainerInnerComp, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  ${(props) => props.withSideBorders && sideBordersStyle};
  ${(props) =>
    props.withFilters &&
    `
      min-height: 250px;
  `}
  ${(props) => props.withTabs && `padding-top: 30px;`}
`;

const TableComp = (
  props: React.PropsWithChildren<{
    className?: string;
    withSideBorders?: boolean;
  }>,
) => <table {...props} className={clsx(TABLE_CLASSES.TABLE, props.className)} />;
export const TableStyled = styled(TableComp, {
  // naming conflict with <Table />
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  border: solid 1px ${COLORS.BORDER};
  border-right-width: ${(props) => `${props.withSideBorders ? '1' : '0'}px`};
  border-left-width: ${(props) => `${props.withSideBorders ? '1' : '0'}px`};
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;
`;

const TableHeadComp = (props: React.PropsWithChildren<{ className?: string }>) => (
  <thead {...props} className={clsx(TABLE_CLASSES.THEAD, props.className)} />
);
export const TableHead = styled(TableHeadComp)`
  .${TABLE_CLASSES.TR} {
    background: ${COLORS.BACKGROUND};
  }
`;

// the TH element should only for table structure.
// use TableHeaderWrapper for additional styling within the TH.
const TableHeaderComp = (
  props: React.PropsWithChildren<{
    canSort?: boolean;
    className?: string;
    colSpan?: number;
    sorted: 'asc' | 'desc' | false;
    width?: number;
  }>,
) => <th {...props} className={clsx(TABLE_CLASSES.TH, props.className)} />;
export const TableHeader = styled(TableHeaderComp, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['width'].includes(prop),
})`
  ${tableCellHeaderStyle}
  border-bottom: 1px solid ${COLORS.BORDER};
  position: relative;
  width: ${(props) => `${props.width || 1}px`};
  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${(props) =>
    props.sorted &&
    `
      box-shadow: inset 0 ${props.sorted === 'asc' ? '' : '-'}3px 0 0 rgb(7 116 211);
  `}
  ${(props) =>
    props.canSort &&
    `
      padding: 0; // padding messes up box-shadow
  `}
  &:last-of-type .${TABLE_CLASSES.RESIZER} {
    // stop horizontal scrolling
    width: 6px;
    padding: 0;
    right: 0;
  }
`;

// import this to add custom styles to a table header
const TableHeaderWrapperComp = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.TH_WRAPPER, props.className)} />
);
export const TableHeaderWrapper = styled(TableHeaderWrapperComp)`
  ${tableCellHeaderWrapperStyle}
  ${tableHeaderWrapperStyle}
`;

const TableBodyComp = (props: React.PropsWithChildren<{ className?: string }>) => (
  <tbody {...props} className={clsx(TABLE_CLASSES.TBODY, props.className)} />
);
export const TableBody = styled(TableBodyComp)``;

const TableRowComp = (
  props: React.PropsWithChildren<{
    className?: string;
    index: number;
    withRowBorder?: boolean;
    withRowHighlight?: boolean;
    withStripes?: boolean;
  }>,
) => <tr {...props} className={clsx(TABLE_CLASSES.TR, props.className)} />;
export const TableRow = styled(TableRowComp, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  height: 1px; // needed for cell wrapper to fill height
  background: ${(props) =>
    props.index % 2 && props.withStripes ? COLORS.BACKGROUND_SECONDARY : COLORS.BACKGROUND};
  border-bottom: ${(props) => (props.withRowBorder ? `1px solid ${COLORS.BORDER}` : '0 none')};
  ${(props) =>
    props.withRowHighlight &&
    `
    &:hover {
      background: ${COLORS.BACKGROUND_HIGHLIGHT}
    }
  `}
`;

// the TD element should only for table structure.
// use TableCellWrapper for additional styling within the TD.
const TableCellComp = (props: React.PropsWithChildren<{ className?: string; width?: number }>) => (
  <td {...props} className={clsx(TABLE_CLASSES.TD, props.className)} />
);
export const TableCell = styled(TableCellComp, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['width'].includes(prop),
})`
  ${tableCellHeaderStyle}
  width: ${(props) => `${props.width || 1}px`};
  height: inherit; // needed for cell wrapper to fill height
`;

// import this to add custom styles to a table cell
const TableCellWrapperComp = (
  props: React.PropsWithChildren<{ className?: string; selected?: boolean }>,
) => <div {...props} className={clsx(TABLE_CLASSES.TD_WRAPPER, props.className)} />;
export const TableCellWrapper = styled(TableCellWrapperComp, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  ${tableCellHeaderWrapperStyle}
  background: ${(props) => (props.selected ? COLORS.BACKGROUND_SELECTED : 'transparent')};
`;

const ResizerComp = (
  props: React.PropsWithChildren<{
    className?: string;
    onMouseDown: (e: unknown) => void;
    onTouchStart: (e: unknown) => void;
  }>,
) => <button {...props} className={clsx(TABLE_CLASSES.RESIZER, props.className)} type="button" />;
export const Resizer = styled(ResizerComp)`
  border: 0 none;
  position: absolute;
  right: -6px;
  top: 0;
  height: 100%;
  width: 13px;
  cursor: col-resize;
  background: transparent;
  user-select: none; // send event to <ResizerComp />
  touch-action: none; // send event to <ResizerComp />
  z-index: 10;
`;

const LoaderComp = (props: React.PropsWithChildren<{ className?: string; $loading?: boolean }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.LOADING_COMPONENT, props.className)}>
    <DnaLoader />
  </div>
);
export const Loader = styled(LoaderComp, {
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
  ${({ $loading }) =>
    $loading &&
    `
      opacity: 1;
      z-index: 2;
      pointer-events: all;
    `}
`;

const SortButtonComp = (
  props: React.PropsWithChildren<{
    className?: string;
    canSort?: boolean;
    onClick: (e: unknown) => void;
  }>,
) => <button {...props} className={clsx(TABLE_CLASSES.SORT_BUTTON, props.className)} />;
export const SortButton = styled(SortButtonComp, {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  ${tableHeaderWrapperStyle}
  background: none;
  border: 0 none;
  width: 100%;
  height: 100%;
  .${TABLE_CLASSES.TH_WRAPPER} {
    font-size: 13px;
  }
  ${(props) =>
    props.canSort &&
    `
      cursor: pointer;
    `}
  padding: 0;
`;
