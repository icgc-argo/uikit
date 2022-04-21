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

import { css } from '@emotion/react';
import React from 'react';
import Icon from '../Icon';
import { UikitIconNames } from '../Icon/icons';
import Link from '../Link';
import { useTheme } from '../ThemeProvider';
import Typography from '../Typography';
import { ThemeColorNames } from '../theme/types';

type AlertLevel = 'error' | 'warning' | 'info';

type AlertVariant = {
  [key in AlertLevel]: {
    color: keyof ThemeColorNames;
    icon: UikitIconNames;
    fill: keyof ThemeColorNames;
  };
};

const ALERT_VARIANTS: AlertVariant = {
  error: {
    color: 'error',
    icon: 'warning_transparent',
    fill: 'white',
  },
  warning: {
    color: 'warning_1',
    icon: 'warning_transparent',
    fill: 'primary_dark',
  },
  info: {
    color: 'secondary',
    icon: 'info_transparent',
    fill: 'white',
  },
};

export type Alert = {
  level: AlertLevel;
  title: string;
  message?: string;
  dismissable: boolean;
};

type AlertProps = {
  alert: Alert;
  onClose: () => void;
};

/**
 * Find markdown style links in the alert message and render them as Link
 * @param message
 * @param linkColor
 * @returns
 */
const parseMessage = (message: string, linkColor: string) => {
  // Split message into text and links
  const messageParts = message.split(/(\[.+\]\(.*\))/);
  return messageParts.map((part) => {
    const matches = part.match(/\[(.*)\]\((.*)\)/);
    // matches will either be null (not a markdown link) or an array with the content like:
    // matches[0]: provided text
    // matches[1]: first group match (Link Display Text)
    // matches[2]: second group match (Link href)
    // matches... more stuff we dont care about
    if (matches) {
      return (
        <Link href={matches[2]} style={{ color: linkColor }} target="_blank">
          {matches[1]}
        </Link>
      );
    } else {
      return part;
    }
  });
};

const SystemAlert: React.ComponentType<AlertProps> = ({ alert, onClose }) => {
  const theme = useTheme();
  const icon = ALERT_VARIANTS[alert.level].icon;
  const fill = ALERT_VARIANTS[alert.level].fill;
  return (
    <div
      css={css`
        background-color: ${theme.uikit.colors[ALERT_VARIANTS[alert.level].color]};
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div>
          <Icon
            name={icon}
            fill={fill}
            width="30px"
            height="30px"
            css={css`
              margin-right: 15px;
            `}
          />
        </div>
        <div>
          <Typography
            css={css`
              font-size: 16px;
              font-weight: 500;
              color: ${theme.uikit.colors[ALERT_VARIANTS[alert.level].fill]};
              margin: 0;
            `}
          >
            {alert.title}
          </Typography>
          {alert.message && (
            <Typography
              css={css`
                margin: 0;
                color: ${theme.uikit.colors[ALERT_VARIANTS[alert.level].fill]};
                font-weight: 300;
              `}
            >
              {parseMessage(alert.message, theme.uikit.colors[ALERT_VARIANTS[alert.level].fill])}
            </Typography>
          )}
        </div>
      </div>

      <div>
        {alert.dismissable ? (
          <Icon
            name="times"
            width="15px"
            height="15px"
            fill={theme.uikit.colors[ALERT_VARIANTS[alert.level].fill]}
            onClick={onClose}
            title="Close"
            css={css`
              padding-left: 5px;
              padding-right: 18px;
              cursor: pointer;
            `}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SystemAlert;
