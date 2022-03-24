import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Template from './Template.component';

export default (props) => (
  <Template
    css={(theme) =>
      css`
        color: ${theme.uikit.colors.grey};
        border: 20px solid blue;
      `
    }
    {...props}
  />
);

export const StyledTemplate = styled(Template)`
  border: 10px green solid;
  color: ${({ theme }) => theme.uikit.colors.grey};
`;
