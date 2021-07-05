import styled from 'styled-components';
export const StyledButton = styled.button `
  display: flex;

  justify-content: center;
  align-items: center;
`;
export const StyledDisabledButton = styled(StyledButton) `
  background-color: gray !important;
  color: black !important;

  cursor: default !important;
`;
//# sourceMappingURL=Button.styles.js.map