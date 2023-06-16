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

/** @jsxImportSource @emotion/react */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../ThemeProvider';
import { Icon } from '../Icon';
import icgcLogo from '../assets/icgc_logo.svg';
import { css } from '@emotion/react';
import { Row, Col } from 'react-grid-system';
import { Link as A } from '../Link';

const Container = styled('footer')`
  ${({ theme }) => css(theme.typography.paragraph as any)};
  background: #fff;
  z-index: 1;
  padding: 0 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_2};
  font-size: 11px;
  min-height: 58px;

  & a + svg {
    margin: 0px 8px;
  }
`;

type FooterLink = { displayName: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type FooterProps = {
  subtitle?: string;
  links?: FooterLink[];
  className?: string;
  Logo?: ReactNode;
  otherProps?: any;
};

const DefaultLogo = () => (
  <a href="https://www.oicr.on.ca/" target="_blank">
    <img
      alt="Logo for Ontario Institute for Cancer Research"
      src={icgcLogo}
      style={{ height: '42px' }}
    />
  </a>
);

export const Footer = ({
  subtitle = '',
  links = [],
  className = '',
  Logo = <DefaultLogo />,
  ...otherProps
}: FooterProps) => (
  <Container className={`footer ${className}`} {...otherProps}>
    <Row
      css={css`
        min-height: 58px;
      `}
      justify="between"
      nogutter
    >
      <Col
        md={5}
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        {/** copyright and ARGO logo */}
        <div>
          © {new Date().getFullYear()} ICGC ARGO. All rights reserved.
          <br />
          {subtitle}
        </div>
      </Col>

      <Col
        md={7}
        css={css`
          display: flex;
          align-items: center;
          font-size: 12px;
          justify-content: flex-end;
          padding-left: 22px;
        `}
      >
        {/** nav links */}
        <div>
          {links.map(({ displayName, href, target }, idx) => {
            if (idx !== links.length - 1) {
              return (
                <React.Fragment key={displayName}>
                  <A target={target} href={href}>
                    {displayName}
                  </A>
                  <Icon width="12px" height="12px" name="slash" fill="grey_1" />
                </React.Fragment>
              );
            } else {
              return (
                <A key={displayName} href={href} target={target}>
                  {displayName}
                </A>
              );
            }
          })}
        </div>

        {/** right side logo eg. OICR, RDPC */}
        <div>{Logo}</div>
      </Col>
    </Row>
  </Container>
);

Footer.propTypes = {
  version: PropTypes.string,
  apiVersion: PropTypes.string,
  links: PropTypes.array,
};
