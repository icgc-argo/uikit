import { css } from '@emotion/react';
import Template from './Template.component';

export default (props) => (
  <Template
    css={(theme) => css`
      color: ${theme.uikit.colors.grey};
    `}
    {...props}
  />
);
