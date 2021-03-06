import styled from 'styled-components';
import { Colors } from '../../../styles/colors.enum';

export const StyledButton = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;

  background: ${Colors.WHITE};
  border: 1px solid ${Colors.GOLD};
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;
  color: ${Colors.GOLD};
  text-transform: capitalize;
  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
