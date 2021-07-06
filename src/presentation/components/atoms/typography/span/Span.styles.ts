import styled from 'styled-components';

interface StyledProps {
  spanStyles?: Record<string, string>;
}

export const StyledSpan = styled.span`
  font-style: normal;
  color: white;

  ${({ spanStyles }: StyledProps) => spanStyles};
`;
