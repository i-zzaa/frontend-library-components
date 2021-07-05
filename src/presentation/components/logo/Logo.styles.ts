import { StyledSizeProps } from '@/presentation/styles/global.types';
import styled from 'styled-components';
import { CentredColumnLayout } from '../layouts';

export const StyledImageContainer = styled(CentredColumnLayout)`
  ${({ width, height }: StyledSizeProps) => ({
    width,
    height,
  })}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
