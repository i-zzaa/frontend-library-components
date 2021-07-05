import { Colors } from '@/presentation/styles/colors.enum';
import styled from 'styled-components';

export const StyledInnerButtonsContainer = styled.button`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  border: none;

  background-color: ${Colors.WHITE};

  cursor: pointer;
`;
