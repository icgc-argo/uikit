import { styled } from '../ThemeProvider';
import isPropValid from '@emotion/is-prop-valid';

export const StyledTable = styled('div')`
  border: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  flex: auto 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  * {
    box-sizing: border-box;
  }
`;

export const StyledTbody = styled('div')`
  min-width: 200px;
  flex: 99999 1 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const StyledTrGroup = styled('div')`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledTr = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'isStriped',
})<{ isStriped?: boolean }>`
  flex: 1 0 auto;
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.white};
  &.-even.-striped {
    background: ${({ theme }) => theme.colors.grey_4};
  }
`;
