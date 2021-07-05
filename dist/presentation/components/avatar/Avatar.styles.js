import styled from 'styled-components';
import { CentredColumnLayout } from '../layouts';
export const StyledAvatarContainer = styled(CentredColumnLayout) `
  border: 2px solid gray;
  border-radius: 50%;
  ${({ width, height }) => ({
    width,
    height,
})}
`;
export const StyledAvatar = styled.img `
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
//# sourceMappingURL=Avatar.styles.js.map