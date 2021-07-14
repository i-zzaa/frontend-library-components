import React, { FunctionComponent as FC, ReactElement as RE, ReactNode, useMemo } from 'react';
import { StyleRemapper } from '../../../../utils/style-remapper/StyleRemapper';
import { StyledParagraph } from './Paragraph.styles';

export interface Props {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

const Paragraph: FC<Props> = ({ children, styles = { '': '' }, beforeText, afterText }: Props): RE => {
  const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);

  return (
    <StyledParagraph paragraphStyles={updatedStyles}>
      {beforeText}
      {children}
      {afterText}
    </StyledParagraph>
  );
};

export default Paragraph;
