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
import { useState } from 'react';
import { Tab, Tabs } from '../../Tabs';
import { styled } from '../../ThemeProvider';

export type TableTabsInput = { label: string; value: string; color: string }[];
export type TableTabsHandler = (e: any, value: string) => void;

export const useTableTabs = (defaultTableTab: string) => {
  const [activeTableTab, setActiveTableTab] = useState<string>(defaultTableTab);
  const handleActiveTableTab = (e: any, value: string) => {
    setActiveTableTab(value);
  };
  return {
    activeTableTab,
    handleActiveTableTab,
    setActiveTableTab,
  };
};

const StyledTab = styled(Tab)<{ color: string }>`
  align-items: center;
  justify-content: center;
  padding: 3px 20px;
  margin: 0 8px 0 0;
  border: 1px solid ${({ theme }) => css(theme.colors.grey_2)};
  border-bottom: 1px none ${({ theme }) => css(theme.colors.white)};
  border-radius: 5px 5px 0px 0px;
  font-size: 13px;
  background: ${({ theme }) => css(theme.colors.grey_3)};
  :hover {
    background-color: ${({ theme }) => css(theme.colors.grey_4)};
  }
  &.active {
    background: ${({ color }) => css(color)};
    border-bottom: 0px none ${({ theme }) => css(theme.colors.white)};
    border-top: 3px solid ${({ theme }) => css(theme.colors.secondary)};
    :hover {
      background-color: ${({ color }) => css(color)};
    }
  }
`;

export const TableTabs = ({
  activeTab,
  handleTabs,
  tabs,
}: {
  activeTab: string;
  handleTabs: TableTabsHandler;
  tabs: TableTabsInput;
}) => (
  <Tabs
    containerProps={{
      css: css`
        position: absolute;
        top: -30px;
        left: -1px;
      `,
    }}
    onChange={handleTabs}
    value={activeTab}
  >
    {tabs.map((tab) => (
      <StyledTab color={tab.color} label={tab.label} value={tab.value} />
    ))}
  </Tabs>
);
