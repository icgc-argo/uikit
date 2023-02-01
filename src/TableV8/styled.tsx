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
import React from 'react';

export const TABLE_CLASSES = {
  TABLE_CONTAINER: 'rt-table-container',
  TABLE: 'rt-table',
  TBODY: 'rt-tbody',
  TD: 'rt-td',
  TH: 'rt-th',
  THEAD: 'rt-thead -header',
  TR_GROUP: 'rt-tr-group',
  TR: 'rt-tr',
};

const TableContainer = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.TABLE_CONTAINER, props.className)} />
);
export const StyledTableContainer = styled(TableContainer)``;

const Table = (
  props: React.PropsWithChildren<{
    className?: string;
    withOutsideBorder?: boolean;
  }>,
) => <table {...props} className={clsx(TABLE_CLASSES.TABLE, props.className)} />;
export const StyledTable = styled(Table, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['withOutsideBorder'].includes(prop),
})``;

const TableHead = (props: React.PropsWithChildren<{ className?: string }>) => (
  <thead {...props} className={clsx(TABLE_CLASSES.THEAD, props.className)} />
);
export const StyledTableHead = styled(TableHead)`
  border-bottom: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  user-select: none;
  .${TABLE_CLASSES.TR} {
    text-align: center;
  }
`;

const TableHeader = (props: React.PropsWithChildren<{ className?: string; colSpan?: number }>) => (
  <th {...props} className={clsx(TABLE_CLASSES.TH, props.className)} />
);
export const StyledTableHeader = styled(TableHeader)``;

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
export const StyledTableRow = styled(TableRow)``;

const TableCell = (props: React.PropsWithChildren<{ className?: string }>) => (
  <td {...props} className={clsx(TABLE_CLASSES.TD, props.className)} />
);
export const StyledTableCell = styled(TableCell)``;
