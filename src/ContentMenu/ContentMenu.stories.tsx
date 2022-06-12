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

import React from 'react';
import ContentMenu from './index';

const contentNames = ['Sample Registration', 'Specimen', 'Donor', 'Treatment'];
const contents = contentNames.map((content, i) => ({
  name: content,
  disabled: i === 2 ? true : false, // set one as disabled
  contentRef: React.createRef<any>(),
}));

export default {
  component: ContentMenu,
  argTypes: {
    title: { control: 'text' },
    color: { control: 'color' },
  },
  args: {
    title: 'Clinical Files',
    contents: contents,
  },
};

export const Basic = (args) => (
  <div>
    <p>// NB: Jump to content only works on window level</p>
    <ContentMenu contents={contents} {...args} />
    <div style={{ marginTop: '20px', border: '1px solid blue' }}>
      {contents.map(({ name, contentRef }, i) => (
        <div ref={contentRef} key={i} style={{ height: '40px' }}>
          {name}
        </div>
      ))}
    </div>
  </div>
);
