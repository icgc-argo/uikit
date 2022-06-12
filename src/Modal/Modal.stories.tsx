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
import { BUTTON_SIZES } from '../Button';
import { BUILT_IN_ICON_COLORS } from '../Icon';
import Icons from '../Icon/icons';
import Modal from './index';

export default {
  component: Modal,
  argTypes: {
    onActionClick: { action: 'onActionClick' },
    onCancelClick: { action: 'onCancelClick' },
    onCloseClick: { action: 'onCloseClick' },
    buttonSize: { options: Object.values(BUTTON_SIZES), control: 'radio' },
    titleIconConfigName: { type: 'select', options: Object.keys(Icons) },
    titleIconConfigFill: { type: 'select', options: Object.values(BUILT_IN_ICON_COLORS) },
  },
  args: {
    title: 'Modal Title',
    actionButtonText: 'Action!',
    actionVisible: true,
    actionDisabled: false,
    cancelText: 'Cancel',
    children: `Lorem ipsum dolor amet hoodie iPhone palo santo freegan bitters chicharrones fingerstache taiyaki authentic fam skateboard next level helvetica forage. Squid typewriter mustache, chia shoreditch retro gluten-free tbh bicycle rights kickstarter pickled pork belly post-ironic. Authentic green juice tofu kickstarter.`,
  },
};

const Template = (args) => {
  const { titleIconConfigName, titleIconConfigFill, ...rest } = args;
  const titleIconConfig = { name: titleIconConfigName, fill: titleIconConfigFill };
  return (
    <Modal.Overlay>
      <Modal titleIconConfig={titleIconConfig} {...rest} />
    </Modal.Overlay>
  );
};

export const Basic = Template.bind({});
