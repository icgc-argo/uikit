import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Template from './Template.component';

export default (props) => (
  <Template
    css={(theme) =>
      css`
        color: ${theme.uikit.colors.grey};
        border: 20px solid gold;
      `
    }
    {...props}
  />
);

export const StyledTemplate = styled(Template)`
  border: 10px green solid;
  color: ${({ theme }) => theme.uikit.colors.grey};
`;

// not quite idiomatic use but emotion theme has usage like this in projects
// css={theme => css`...`} is better
export const UseThemeTemplate = (props) => {
  const theme = useTheme();
  console.log('use theme', theme);
  return (
    <Template
      css={css`
        background-color: ${theme.uikit.colors.grey};
      `}
      {...props}
    />
  );
};

// add useTheme test
// does next build ok
