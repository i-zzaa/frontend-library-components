import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, { useMemo, } from 'react';
import { StyledParagraph } from './Paragraph.styles';
const Paragraph = ({ children, styles = { '': '' }, beforeText, afterText, }) => {
    const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);
    return (React.createElement(StyledParagraph, { paragraphStyles: updatedStyles },
        beforeText,
        children,
        afterText));
};
export default Paragraph;
//# sourceMappingURL=Paragraph.js.map