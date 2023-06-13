/*
 * Copyright (c) 2023 The Ontario Institute for Cancer Research. All rights reserved
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
/** @jsxImportSource @emotion/react */

import { ComponentType } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { UikitIconNames } from '../Icon/icons';
import { Link } from '../Link';
import { Typography } from '../Typography';
import { ThemeColorNames } from '../theme/types';
import { css, useTheme } from '..';

const CircleContainer: ComponentType<{
  fill: keyof ThemeColorNames;
  children: React.ReactNode;
}> = ({ fill, children }) => {
  const theme = useTheme();
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '44px',
        width: '44px',
        backgroundColor: theme.colors[fill],
        borderRadius: '100%',
      })}
    >
      {children}
    </div>
  );
};

export const DataCallout: React.PropsWithChildren<{
  iconName: UikitIconNames;
  iconFill: keyof ThemeColorNames;
  circleFill: keyof ThemeColorNames;
  title: string;
  urlData: { text: string; href: string };
  className?: string;
}> = ({ iconName, iconFill, circleFill, title, urlData, children, className }) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        textAlign: 'center',
        height: '100%',
        padding: '0 5%',
      })}
      className={className}
    >
      <CircleContainer fill={circleFill}>
        <Icon name={iconName} fill={iconFill} />
      </CircleContainer>
      <Typography
        color="primary"
        variant="subtitle"
        css={css({
          marginTop: '16px',
          marginBottom: '5px',
        })}
        as="h2"
      >
        {title}
      </Typography>
      <Typography
        as="p"
        css={css({
          margin: '14px 0',
        })}
      >
        {children}
      </Typography>

      <Link
        href={urlData.href}
        underline={false}
        css={css({
          margin: '0 15px',
          marginTop: 'auto',
        })}
        target="_blank"
      >
        <Button css={css({ padding: '6px 12px', marginBottom: '20px' })}>
          {urlData.text}
          <Icon
            name="external"
            fill="white"
            width="13px"
            height="13px"
            css={css({
              marginLeft: '10px',
            })}
          />
        </Button>
      </Link>
    </div>
  );
};
