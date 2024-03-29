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

export default {
  title: 'Legend',
  viewBox: '0 0 12 12',
  path: `M1.2.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm0 4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm0 4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm3.349-5.96c-.619 0-1.12-.403-1.12-.9s.501-.9 1.12-.9h6.16c.618 0 1.12.403 1.12.9s-.502.9-1.12.9h-6.16zm6.16 2.16c.619 0 1.12.403 1.12.9s-.5.9-1.12.9H4.55c-.618 0-1.12-.403-1.12-.9 0-.496.501-.9 1.12-.9h6.16zm0 4.08c.619 0 1.12.403 1.12.9 0 .496-.5.9-1.12.9H4.55c-.618 0-1.12-.403-1.12-.9s.501-.9 1.12-.9h6.16z`,
  css: css`
    width: 12px;
    height: 12px;
  `,
  defaultFill: '#523785',
};
