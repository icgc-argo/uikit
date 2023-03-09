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

import { storiesOf } from '@storybook/react';
import React from 'react';
import { useTableTabs } from '.';
import { TableV8 } from '..';
import { ThemeColorNames } from '../../theme/types';
import { useTheme } from '../../ThemeProvider';
import { TableHeaderWrapper } from '../styled';

enum TabNames {
  FRUIT = 'Fruit',
  VEGETABLES = 'Vegetables',
}

const TAB_COLORS: { [k: string]: keyof ThemeColorNames } = {
  [TabNames.FRUIT]: 'accent1',
  [TabNames.VEGETABLES]: 'accent2',
};

const tableData = [
  {
    citrus: 'orange',
    berries: 'strawberry',
    leafy: 'lettuce',
    root: 'potato',
  },
];

storiesOf(`TableTabs`, module).add('Basic', () => {
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
  return <TableV8 columns={tableColumns} data={tableData} withHeaders withTabs />;
});
