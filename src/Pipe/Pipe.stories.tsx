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
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSSmj  OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { css } from '@emotion/react';
import React from 'react';
import defaultTheme from '../theme/defaultTheme';
import Pipe from './index';

const themeColors = Object.keys(defaultTheme.colors) as Array<keyof typeof defaultTheme.colors>;

const PipeExample = () => (
  <div
    style={{
      margin: 'auto',
      width: '50%',
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'stretch',
    }}
  >
    <Pipe>
      <Pipe.Item fill="primary_1">1</Pipe.Item>
      <Pipe.Item fill="primary_2">2</Pipe.Item>
      <Pipe.Item fill="primary_3">3</Pipe.Item>
    </Pipe>
    <Pipe>
      <Pipe.Item fill={'accent3_dark'}>Just One Child</Pipe.Item>
    </Pipe>
    <Pipe>
      <Pipe.Item fill={'accent2'}>Or Many</Pipe.Item>
      <Pipe.Item fill={'secondary_dark'}>2</Pipe.Item>
      <Pipe.Item fill={'accent4_dark'}>1</Pipe.Item>
      <Pipe.Item fill={'accent2'}>9</Pipe.Item>
      <Pipe.Item fill={'secondary_dark'}>4</Pipe.Item>
      <Pipe.Item fill={'accent4_dark'}>8</Pipe.Item>
    </Pipe>
  </div>
);

export default {
  title: 'Pipe',
  component: Pipe,
};

export const Basic = (args) => <PipeExample />;
