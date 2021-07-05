import {
  CentredColumnLayout,
  CentredLeftColumnLayout,
  CentredLeftRowLayout,
  CentredRowLayout,
  UpperCentredColumnLayout,
} from '@/presentation/components/layouts';
import { Colors } from '@/presentation/styles/colors.enum';
import styled from 'styled-components';

export const StyledBackground = styled(CentredColumnLayout)`
  position: absolute;
  inset: 0;
  background-color: transparent;
  z-index: 2;
`;

export const StyledDesktopSelectListCard = styled(UpperCentredColumnLayout)`
  position: absolute;
  top: 135px;
  margin: 0 10px;

  min-width: 170px;
  min-height: 50px;
  padding: 10px;

  z-index: 5;

  background-color: ${Colors.WHITE};
  box-shadow: 0px 6px 16px #0000003b;
  border-radius: 4px;
  border: none;
`;

export const StyledDesktopRowSelectListCard = styled(CentredRowLayout)`
  justify-content: space-between;
  width: 100%;
`;

export const StyledDesktopSelectListItem = styled(CentredLeftColumnLayout)`
  width: 100%;
  margin: 0 10px 10px;
`;

export const StyledDesktopSelectListRowItem = styled(CentredLeftRowLayout)`
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export const StyledCheckbox = styled.input`
  width: 14px;
  height: 14px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a1a9b4;
  border-radius: 2px;
  opacity: 1;
  margin: 5px 10px;

  cursor: pointer;
`;

export const StyledInput = styled.input`
  border: 1px solid #a1a9b4;
  border-radius: 4px;
  opacity: 1;
  width: 113px;
  height: 40px;
`;

export const okButtonStyles = {
  fontSize: '14px',
  color: `${Colors.BLUE}`,
};

export const cancelButtonStyles = {
  fontSize: '14px',
  color: '#A1A9B4',
};

export const itemText = {
  fontSize: '14px',
  color: `${Colors.BLUE}`,
};

export const leftHandSideOkButtonStyles = {
  justifyContent: 'flex-end',
};
