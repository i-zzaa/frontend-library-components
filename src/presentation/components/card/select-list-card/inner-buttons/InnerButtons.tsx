import Text from '@/presentation/components/text/Text';
import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledInnerButtonsContainer } from './InnerButtons.styles';

interface Props {
  children?: string;
  onClick?(): void;
  textStyles?: Record<string, string>;
  buttonStyles?: Record<string, string>;
}

const InnerButtons: FC<Props> = ({
  children,
  onClick,
  textStyles,
  buttonStyles,
}: Props): RE => {
  const { Span } = Text;

  return (
    <StyledInnerButtonsContainer onClick={onClick} style={buttonStyles}>
      <Span styles={textStyles}>{children}</Span>
    </StyledInnerButtonsContainer>
  );
};

export default InnerButtons;
