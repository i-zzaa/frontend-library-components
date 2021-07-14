import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CentredLeftColumnLayout, CentredRowLayout } from '../../templates/layouts';
import { Colors } from '../../../styles/colors.enum';

export const StyledLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin: 0 0 5px;

  color: ${Colors.WHITE};
`;

export const StyledInputContainer = styled(CentredRowLayout)`
  margin: 5px 0 5px;
  box-sizing: border-box;

  position: relative;
  display: flex;
  padding: 10px 10px;
  gap: 5px;

  border: 1px solid ${Colors.WHITESMOKE};
  border-radius: 3px;
  color: ${Colors.BLACK};
  :disabled {
    opacity: 0.4;
    cursor: not-allowed !important;
  }
`;

export const StyledInput = styled.input`
  line-height: 24px;
  box-sizing: border-box;
  border: none;
  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const spanValidator = {
  color: 'red',
  width: '100%',
  margin: '0 0 10px',
};

export const lebelStyles: Record<string, string> = {
  textAlign: 'left',
  fontSize: '14px',
  letterSpacing: '0px',
  color: Colors.BLUE,
  opacity: '1',
};

export const StyledItemContainer = styled(CentredLeftColumnLayout)`
  width: 100px;
  margin: 0 5px 10px 20px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${Colors.WATER};
`;

export const StyledDisabledIcon = styled(StyledIcon)`
  cursor: not-allowed;
  opacity: 0.4;
`;
