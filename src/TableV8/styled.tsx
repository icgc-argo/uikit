import { styled } from '../ThemeProvider';

export const StyledTable = styled('div')`
  border: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
  flex: auto 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  border: 1px solid magenta;
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

export const StyledTr = styled('div')`
  flex: 1 0 auto;
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.white};
  &.-even.-striped {
    background: ${({ theme }) => theme.colors.grey_4};
  }
`;

export const StyledTd = styled('div')`
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1 0 0px;
  padding: 7px 5px;
  overflow: hidden;
  transition: width 0.3s ease 0s, min-width, padding, opacity;
  .rt-tbody & {
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    min-height: 28px;
    line-height: 1.33;
    padding: 2px 8px;
    border-right: ${({ theme }) => `solid 1px ${theme.colors.grey_2}`};
    display: flex;
    align-items: center;
    &:last-of-type {
      border-right: 0px;
    }
  }
`;
