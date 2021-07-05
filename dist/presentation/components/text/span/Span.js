import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, { useMemo, } from 'react';
import { StyledSpan } from './Span.styles';
const Span = ({ children, styles = { '': '' }, beforeText, afterText, }) => {
    const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);
    return (React.createElement(StyledSpan, { spanStyles: updatedStyles },
        beforeText,
        children,
        afterText));
};
export default Span;
//# sourceMappingURL=Span.js.map