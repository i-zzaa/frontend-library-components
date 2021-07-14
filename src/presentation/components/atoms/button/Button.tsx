import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './Button.styles';
import { ButtonType } from './Button.types';

interface Props {
  label?: string;
  type?: ButtonType;
  disabled?: boolean;
  styles?: Record<string, string>;
  onClick?(): void;
  iconLeft?: RE | null;
}

const Button: FC<Props> = ({ label, type, onClick, styles, disabled, iconLeft, ...props }: Props): RE => {
  return (
    <StyledButton type={type} onClick={onClick} style={styles} disabled={disabled} {...props}>
      {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
      {label}
    </StyledButton>
  );
};

export default Button;
