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

import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EventTargetMock } from '../../utils/testing';
import { render } from '../testUtil';
import Button from './index';

const defaultProps = Object.freeze({
  onClick: jest.fn(),
  text: 'Test Button',
});

const getButtonEl = async () => {
  const buttonChildNode = await screen.findByText(defaultProps.text);
  const buttonEl = buttonChildNode.closest('button');
  return buttonEl;
};

describe('Button', () => {
  test('should display children', async () => {
    render(<Button>{defaultProps.text}</Button>);
    const buttonChildNode = await screen.findByText(defaultProps.text);
    expect(buttonChildNode).toBeVisible();
  });

  test('should be disabled when passed disabled prop', async () => {
    render(<Button disabled={true}>{defaultProps.text}</Button>);
    const buttonEl = await getButtonEl();
    expect(buttonEl).toBeDisabled();
  });

  test('should fire on click function', async () => {
    const user = userEvent.setup();
    const onClick = defaultProps.onClick;
    render(<Button onClick={onClick}>{defaultProps.text}</Button>);
    const buttonEl = await getButtonEl();
    if (buttonEl) {
      await user.click(buttonEl);
    }
    expect(onClick).toHaveBeenCalled();
  });

  test('should recieve focus', async () => {
    const user = userEvent.setup();
    const onClick = defaultProps.onClick;
    render(<Button onClick={onClick}>{defaultProps.text}</Button>);
    const buttonEl = await getButtonEl();
    if (buttonEl) {
      await user.click(buttonEl);
    }
    expect(buttonEl).toHaveFocus();
  });

  test('full event should be passed to handler', async () => {
    const user = userEvent.setup();

    const eventTargetMock = new EventTargetMock();
    const onClick = eventTargetMock.createFunc();

    render(<Button onClick={onClick}>{defaultProps.text}</Button>);

    const buttonEl = await getButtonEl();
    if (buttonEl) {
      await user.click(buttonEl);
    }

    expect(onClick).toBeCalledTimes(1);
    expect(buttonEl).toEqual(eventTargetMock.target);
  });

  test('full event handler should be bubbled to parent', async () => {
    const user = userEvent.setup();

    const eventTargetMock = new EventTargetMock();
    const onClick = eventTargetMock.createFunc();

    render(
      <div onClick={onClick}>
        <Button>{defaultProps.text}</Button>
      </div>,
    );

    const buttonEl = await getButtonEl();
    if (buttonEl) {
      await user.click(buttonEl);
    }

    expect(onClick).toBeCalledTimes(1);
    expect(buttonEl).toEqual(eventTargetMock.target);
  });
});
