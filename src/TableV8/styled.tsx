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

import React from 'react';
import clsx from 'clsx';
import isPropValid from '@emotion/is-prop-valid';
import { styled } from '../ThemeProvider';
import colors from '../theme/defaultTheme/colors';

export const TABLE_CLASSES = {
  TABLE_CONTAINER: 'rt-table-container',
  TABLE: 'rt-table',
  TBODY: 'rt-tbody',
  TD: 'rt-td',
  TH: 'rt-th',
  THEAD: 'rt-thead -header',
  TR_GROUP: 'rt-tr-group',
  TR: 'rt-tr',
  RESIZABLE_HEADER_CONTENT: 'rt-resizable-header-content',
};

const COLORS = {
  BACKGROUND: colors.grey_4,
  BORDER: colors.grey_2,
};

const TableContainer = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.TABLE_CONTAINER, props.className)} />
);
export const StyledTableContainer = styled(TableContainer)`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;

const Table = (
  props: React.PropsWithChildren<{
    className?: string;
    withOutsideBorder?: boolean;
  }>,
) => <table {...props} className={clsx(TABLE_CLASSES.TABLE, props.className)} />;
export const StyledTable = styled(Table, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['withOutsideBorder'].includes(prop),
})`
  border: solid 1px ${COLORS.BORDER};
  border-right-width: ${({ withOutsideBorder }) => `${withOutsideBorder ? '1' : '0'}px`};
  border-left-width: ${({ withOutsideBorder }) => `${withOutsideBorder ? '1' : '0'}px`};
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0;
  th,
  td {
    display: flex;
    flex: 100 1 auto;
    width: 100px;
    padding: 2px 8px;
    font-family: Work Sans, sans-serif;
    font-size: 12px;
    line-height: 1.33;
    min-height: 24px;
    align-items: center;
    &:not(:last-of-type) {
      border-right: 1px solid ${COLORS.BORDER};
    }
  }
`;

const TableHead = (props: React.PropsWithChildren<{ className?: string }>) => (
  <thead {...props} className={clsx(TABLE_CLASSES.THEAD, props.className)} />
);
export const StyledTableHead = styled(TableHead)``;

const TableHeader = (props: React.PropsWithChildren<{ className?: string; colSpan?: number }>) => (
  <th {...props} className={clsx(TABLE_CLASSES.TH, props.className)} />
);
export const StyledTableHeader = styled(TableHeader)`
  text-align: left;
  border-bottom: 1px solid ${COLORS.BORDER};
`;

const ResizableTableHeaderContent = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.RESIZABLE_HEADER_CONTENT, props.className)} />
);
export const StyledResizableTableHeaderContent = styled(ResizableTableHeaderContent)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TableBody = (props: React.PropsWithChildren<{ className?: string }>) => (
  <tbody {...props} className={clsx(TABLE_CLASSES.TBODY, props.className)} />
);
export const StyledTableBody = styled(TableBody)``;

const TableRow = (
  props: React.PropsWithChildren<{ className?: string; withStripes?: boolean; index: number }>,
) => (
  <tr
    {...props}
    className={clsx(
      TABLE_CLASSES.TR,
      props.index % 2 ? '-even' : '-odd',
      { '-striped': props.withStripes },
      props.className,
    )}
  />
);
export const StyledTableRow = styled(TableRow)`
  display: flex;
  &.-even.-striped {
    background: ${COLORS.BACKGROUND};
  }
`;

const TableCell = (props: React.PropsWithChildren<{ className?: string }>) => (
  <td {...props} className={clsx(TABLE_CLASSES.TD, props.className)} />
);
export const StyledTableCell = styled(TableCell)`
  white-space: break-spaces;
  word-break: break-word;
`;
