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

import { css } from '@emotion/react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TableV8 } from '.';
import readme from './readme.md';

const tableColumns = [
  {
    header: 'Custom',
    accessorKey: 'id',
    meta: {
      customCell: true,
      customHeader: true,
    },
  },
  {
    header: 'Property 2',
    accessorKey: 'prop2',
  },
  {
    header: 'Property 3',
    accessorKey: 'prop3',
  },
];

const tableData = [
  { id: 1, prop2: 5, prop3: 'some text 1' },
  {
    id: 2,
    prop2: 4,
    prop3:
      'a large section of text that will probably be big enough to demonstrate the vertical alignment of cells',
  },
  { id: 3, prop2: 3, prop3: 'some text 3' },
  { id: 4, prop2: 2, prop3: 'some text 4' },
  { id: 5, prop2: 1, prop3: 'some text 5' },
];

storiesOf(`TableV8`, module).add(
  'Basic',
  () => {
    const knobs = {
      withHeaders: boolean('withHeaders', true),
      withRowBorder: boolean('withRowBorder', false),
      withRowHighlight: boolean('withRowHighlight', false),
      withSideBorders: boolean('withSideBorders', false),
      withStripes: boolean('withStripes', false),
    };
    return <TableV8 {...knobs} data={tableData} columns={tableColumns} />;
  },
  { info: { text: readme } },
);
