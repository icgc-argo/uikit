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

import { radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import ReactJson from 'react-json-view';
import ThemeProvider, { useTheme } from './index';
import { Typography } from '../Typography';

const ThemeJSON = () => {
  const myTheme = useTheme();
  return <ReactJson src={myTheme} collapsed={1} />;
};

const ColorViewer = () => {
  const theme = useTheme();
  return (
    <div>
      {Object.entries(theme.colors).map(([name, value]) => (
        <div
          key={name}
          style={{
            background: value,
            margin: '20px',
            borderRadius: '10px',
            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
            display: 'flex',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              padding: '10px',
              width: '100px',
            }}
          >
            {name} <pre>{value}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

storiesOf(`ThemeProvider`, module)
  .add('Theme object', () => <ThemeJSON />)
  .add('Colors', () => <ColorViewer />);
