import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import EEMOVEL_DARK_LOGO from '@/presentation/assets/logos/EEMOVEL-logo-escuro.svg';
import { StyledImageContainer, StyledImage } from './Logo.styles';

interface Props {
  width?: number;
  height?: number;
  altText?: string;
  imageSrc?: string;

  onClick?(): void;
}

const Logo: FC<Props> = ({
  width = 91,
  height = 20,
  altText = 'logo img',
  imageSrc = EEMOVEL_DARK_LOGO,
  onClick,
}: Props): RE => {
  return (
    <StyledImageContainer width={width} height={height} onClick={onClick}>
      <StyledImage alt={altText} src={imageSrc} />
    </StyledImageContainer>
  );
};

export default Logo;
