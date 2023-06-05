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

import { useTheme } from '@emotion/react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table } from '.';
import { Button } from '../Button';
import { ThemeColorNames } from '../theme/types';
import readme from './readme.md';
import { TableCellWrapper, TableHeaderWrapper } from './styled';
import { useTableTabs } from './TableTabs';

enum TabNames {
  FRUIT = 'Fruit',
  VEGETABLES = 'Vegetables',
}

const TAB_COLORS: { [k: string]: keyof ThemeColorNames } = {
  [TabNames.FRUIT]: 'accent1_3',
  [TabNames.VEGETABLES]: 'accent2_3',
};

const tabsTableData = [
  {
    citrus: 'orange',
    berries: 'strawberry',
    leafy: 'lettuce',
    root: 'potato',
  },
];

const basicTableColumns = [
  {
    accessorKey: 'fruit',
    cell: ({ cell, row }) => {
      return (
        <TableCellWrapper
        // add custom styles based on the content & metadata of the cell
        // css={css`
        //   background: ${row.index % 2 ? 'red' : 'blue'};
        // `}
        >
          {cell.getValue()}
        </TableCellWrapper>
      );
    },
    header: () => {
      return (
        <TableHeaderWrapper
        // add custom styles
        // css={css`
        //   background: green;
        // `}
        >
          Cells & header with custom CSS
        </TableHeaderWrapper>
      );
    },
    meta: {
      customCell: true,
      customHeader: true,
    },
  },
  {
    header: 'Cells with buttons. Sorting disabled',
    accessorKey: 'vegetables',
    cell: ({ cell }) => <Button>{cell.getValue()}</Button>,
    enableSorting: false,
  },
  {
    header: 'Basic cells',
    accessorKey: 'protein',
  },
];

const basicTableData = [
  { fruit: 'strawberries', vegetables: 'carrots', protein: 'lamb' },
  {
    fruit: 'apples',
    vegetables: 'celery',
    protein: 'a variety of meats and cheeses, as well as vegetarian options',
  },
  { fruit: 'bananas', vegetables: 'lettuce', protein: 'chicken' },
  { fruit: 'oranges', vegetables: 'beets', protein: 'tofu' },
  { fruit: 'mangoes', vegetables: 'onions', protein: 'eggs' },
];

storiesOf(`Table`, module)
  .add(
    'Basic, with client-side sorting',
    () => {
      const knobs = {
        enableColumnResizing: boolean('enableColumnResizing', false),
        enableSorting: boolean('enableSorting', true),
        loading: boolean('loading', false),
        withHeaders: boolean('withHeaders', true),
        withRowBorder: boolean('withRowBorder', false),
        withRowHighlight: boolean('withRowHighlight', false),
        withSideBorders: boolean('withSideBorders', false),
        withStripes: boolean('withStripes', false),
      };
      return <Table {...knobs} data={basicTableData} columns={basicTableColumns} />;
    },
    { info: { text: readme } },
  )
  .add(
    'Column tabs',
    () => {
      const knobs = {
        enableColumnResizing: boolean('enableColumnResizing', false),
        enableSorting: boolean('enableSorting', false),
        loading: boolean('loading', false),
        withHeaders: boolean('withHeaders', true),
        withRowBorder: boolean('withRowBorder', false),
        withRowHighlight: boolean('withRowHighlight', false),
        withSideBorders: boolean('withSideBorders', false),
        withStripes: boolean('withStripes', false),
      };
      const theme = useTheme();
      const { activeTableTab, handleActiveTableTab } = useTableTabs(TabNames.FRUIT);
      const tableColumns = [
        {
          header: () => (
            <TableHeaderWrapper
            // css doesn't work in storybook
            // css={css`
            //   background: ${theme.colors[TAB_COLORS[activeTableTab]]};
            // `}
            >
              {activeTableTab}
            </TableHeaderWrapper>
          ),
          id: 'food',
          columns: [
            ...(activeTableTab === TabNames.FRUIT
              ? [
                  { header: 'Citrus', accessorKey: 'citrus' },
                  { header: 'Berries', accessorKey: 'berries' },
                ]
              : []),
            ...(activeTableTab === TabNames.VEGETABLES
              ? [
                  { header: 'Leafy', accessorKey: 'leafy' },
                  { header: 'Root', accessorKey: 'root' },
                ]
              : []),
          ],
          meta: {
            columnTabs: {
              activeTab: activeTableTab,
              handleTabs: handleActiveTableTab,
              tabs: [
                {
                  label: TabNames.FRUIT,
                  value: TabNames.FRUIT,
                  color: theme.colors[TAB_COLORS.Fruit],
                },
                {
                  label: TabNames.VEGETABLES,
                  value: TabNames.VEGETABLES,
                  color: theme.colors[TAB_COLORS.Vegetables],
                },
              ],
            },
            customHeader: true,
          },
        },
      ];
      return <Table {...knobs} data={tabsTableData} columns={tableColumns} withHeaders withTabs />;
    },
    { info: { text: readme } },
  );
