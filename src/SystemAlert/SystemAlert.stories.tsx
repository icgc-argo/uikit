/*
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
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

import { ComponentMeta, ComponentStory } from '@storybook/react';
import SystemAlert, { Alert } from './SystemAlert.comp';

const mockAlerts: Alert[] = [
  {
    level: 'error',
    title: 'There is a system error occurring.',
    dismissable: true,
  },
  {
    level: 'warning',
    title: 'There is system maintenance occurring.',
    message:
      'To learn what system maintenance is you can visit this [example link](https://google.com)',
    dismissable: true,
  },
  {
    level: 'info',
    title: 'There is a new version of the dictionary available.',
    message:
      'Version 2.0 of the Data Dictionary was released on Jul. 2, 2020 at 3:12pm. Check out the version differences.',
    dismissable: true,
  },
];

export default {
  title: 'System Alert',
  component: SystemAlert,
  argTypes: {
    alert: { control: 'object' },
    onClose: { action: 'on close' },
  },
  args: { alert: mockAlerts[0] },
} as ComponentMeta<typeof SystemAlert>;

export const Basic: ComponentStory<typeof SystemAlert> = (args) => <SystemAlert {...args} />;
