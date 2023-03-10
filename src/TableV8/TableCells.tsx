import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import useTheme from '../utils/useTheme';
import { ThemeColorNames } from '../theme/types';
import { TableHeaderWrapper } from './styled';

export const HeaderWithBackground = ({
  children,
  fill,
}: PropsWithChildren<{ fill: keyof ThemeColorNames }>) => {
  const theme = useTheme();
  return (
    <TableHeaderWrapper
      css={css`
        background: ${theme.colors[fill]};
        justify-content: center;
        text-transform: uppercase;
      `}
    >
      {children}
    </TableHeaderWrapper>
  );
};
