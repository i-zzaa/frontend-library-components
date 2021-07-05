import { Colors } from '@/presentation/styles/colors.enum';
import styled from 'styled-components';
import { CentredColumnLayout } from '../layouts';
export const FormExternalContainer = styled(CentredColumnLayout) `
  width: 100%;
  height: 100%;

  background-color: ${Colors.BLUE};
`;
export const StyledForm = styled.form `
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin: 0 0 50px;
  ${({ isMobile, width }) => ({
    // eslint-disable-next-line no-nested-ternary
    width: !isMobile ? '80%' : width && width > 500 ? '400px' : '80%',
})}
`;
//# sourceMappingURL=Form.styles.js.map