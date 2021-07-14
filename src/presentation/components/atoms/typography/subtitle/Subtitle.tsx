import React, { FunctionComponent as FC, ReactElement as RE, ReactNode, useMemo } from 'react';
import { StyleRemapper } from '../../../../utils/style-remapper/StyleRemapper';
import { StyledSubtitle } from './Subtitle.styles';

export interface Props {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

const Subtitle: FC<Props> = ({ children, styles = { '': '' }, beforeText, afterText }: Props): RE => {
  const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);

  return (
    <StyledSubtitle subtitleStyles={updatedStyles}>
      {beforeText}
      {children}
      {afterText}
    </StyledSubtitle>
  );
};

export default Subtitle;
