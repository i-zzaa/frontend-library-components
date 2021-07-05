import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { StyledAvatarContainer, StyledAvatar } from './Avatar.styles';

interface Props {
  size?: number;
  width?: number;
  height?: number;

  altText?: string;
  srcImage?: string;
}

const Avatar: FC<Props> = ({
  size = 24,
  width = size,
  height = size,

  altText = 'avatar img',
  srcImage,
}: Props): RE => {
  if (srcImage) {
    return (
      <StyledAvatarContainer width={width} height={height}>
        <StyledAvatar alt={altText} src={srcImage} />
      </StyledAvatarContainer>
    );
  }

  return (
    <StyledAvatarContainer>
      <BsFillPersonFill size={size} color="gray" />
    </StyledAvatarContainer>
  );
};

export default Avatar;
