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

import Typography from '../../../uikit/Typography';
import Container from '../../../uikit/Container';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { FileAccessState } from './types';
import Icon from 'uikit/Icon';

export const FileCard: React.ComponentType<{
  cardTitle?: string;
  cardHeight?: string;
  loading?: boolean;
}> = ({ cardTitle, children, cardHeight = '100%', loading = false }) => (
  <Container
    loading={loading}
    css={css`
      height: ${cardHeight};
    `}
  >
    <div
      css={css`
        padding: 16px;
      `}
    >
      <Typography
        color="primary"
        variant="default"
        component="span"
        css={css`
          padding-bottom: 10px;
        `}
      >
        {cardTitle}
      </Typography>
      {children}
    </div>
  </Container>
);

export const TableDiv = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const getAccessIcon = (state: FileAccessState) =>
  ({
    [FileAccessState.CONTROLLED]: (
      <Icon
        width="18px"
        height="16px"
        fill="primary_2"
        name="lock"
        css={css`
          margin-right: 5px;
          margin-top: -5px;
        `}
      />
    ),
  }[state]);

export const DownloadIcon = () => (
  <Icon
    css={css`
      padding-right: 4px;
    `}
    fill="white"
    name="download"
    height="12px"
  />
);
