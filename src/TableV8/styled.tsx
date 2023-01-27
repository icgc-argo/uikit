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

export const TABLE_CLASSES = {
  CONTAINER: 'rt-container',
  RESIZABLE_HEADER: 'rt-resizable-header-content',
  TABLE: 'rt-table',
  TBODY: 'rt-tbody',
  TD: 'rt-td',
  TH: 'rt-th',
  THEAD: 'rt-thead -header',
  TR_GROUP: 'rt-tr-group',
  TR: 'rt-tr',
};

const Container = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.CONTAINER, props.className)} />
);
export const StyledContainer = styled(Container)`
  overflow-x: auto;
  width: 100%;
`;

const Table = (
  props: React.PropsWithChildren<{
    className?: string;
    width?: number;
    withOutsideBorder?: boolean;
  }>,
) => <table {...props} className={clsx(TABLE_CLASSES.TABLE, props.className)} />;
export const StyledTable = styled(Table, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['withOutsideBorder', 'width'].includes(prop),
})`
  border: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  border-right-width: ${({ withOutsideBorder }) => (withOutsideBorder ? '1px' : '0')};
  border-left-width: ${({ withOutsideBorder }) => (withOutsideBorder ? '1px' : '0')};
  flex: auto 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-collapse: collapse;
  overflow: auto;
  * {
    box-sizing: border-box;
  }
  width: ${({ width }) => (!!width ? `${width}px` : 'auto')};
`;

const TableHead = (props: React.PropsWithChildren<{ className?: string }>) => (
  <thead {...props} className={clsx(TABLE_CLASSES.THEAD, props.className)} />
);
export const StyledTableHead = styled(TableHead)`
  min-width: 600px;
  border-bottom: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  user-select: none;
  .${TABLE_CLASSES.TR} {
    text-align: center;
  }
`;

const TableHeader = (props: React.PropsWithChildren<{ className?: string }>) => (
  <th {...props} className={clsx(TABLE_CLASSES.TH, props.className)} />
);
export const StyledTableHeader = styled(TableHeader)`
  &:not(:last-of-type) {
    border-right: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  }
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-left: none;
  display: flex;
  flex: 100 0 auto;
  font-family: Work Sans, sans-serif;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  justify-content: space-between;
  letter-spacing: normal;
  line-height: 1.17;
  line-height: 1.33;
  min-height: 28px;
  padding: 2px 8px;
  text-align: left;
  width: 100px;
`;

const ResizableHeader = (props: React.PropsWithChildren<{ className?: string }>) => (
  <div {...props} className={clsx(TABLE_CLASSES.RESIZABLE_HEADER, props.className)} />
);
export const StyledResizableHeader = styled(ResizableHeader)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableBody = (props: React.PropsWithChildren<{ className?: string }>) => (
  <tbody {...props} className={clsx(TABLE_CLASSES.TBODY, props.className)} />
);
export const StyledTableBody = styled(TableBody)`
  min-width: 200px;
  flex: 99999 1 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

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
  flex: 1 0 auto;
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.white};
  &.-even.-striped {
    background: ${({ theme }) => theme.colors.grey_4};
  }
`;

const TableCell = (props: React.PropsWithChildren<{ className?: string }>) => (
  <td {...props} className={clsx(TABLE_CLASSES.TD, props.className)} />
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
