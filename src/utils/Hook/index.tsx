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

import React from 'react';

/*
 * Please edit me!
 */
const Hook: React.ComponentType<{
  initialState: any;
  /**
   * receives [state, setState] to keep with hooks semantic
   */
  render: (a: [any, React.Dispatch<any>]) => React.ReactNode | React.ReactNodeArray;
  /**
   * gets passed to React.useEffect, return cleanup function if needed
   */
  effect?: () => void | (() => () => void);
  /**
   * call result gets passed to React.useEffect, receives this component's state
   */
  watch?: (state: any) => any[];
}> = ({
  initialState,
  render = ([]) => null,
  effect = () => () => {},
  watch = (state: any) => [],
}) => {
  const [state, setState] = React.useState(initialState);

  // @ts-ignore
  // only used in storybook for "utility component for building stories and creating quick state hooks."
  React.useEffect(effect, watch(state));
  return render([state, setState]);
};

export default Hook;
