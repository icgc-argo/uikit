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

import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Toast, TOAST_INTERACTION, TOAST_VARIANTS } from '.';

storiesOf(`Toast`, module).add('Basic', () => {
  const variant = select('variant', [undefined, ...Object.values(TOAST_VARIANTS)], undefined);
  const interactionType = select(
    'interactionType',
    [undefined, ...Object.values(TOAST_INTERACTION)],
    TOAST_INTERACTION.NONE,
  );
  const title = text('title', 'Hipster Ipsum');
  const content = text(
    'content',
    'Lorem ipsum dolor amet helvetica post-ironic fingerstache trust fund pitchfork tofu venmo live-edge',
  );
  return (
    <Toast
      variant={variant}
      title={title}
      content={content}
      onInteraction={action('onInteraction')}
      interactionType={interactionType}
    />
  );
});
