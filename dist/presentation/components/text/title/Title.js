import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, { useMemo, } from 'react';
import { StyledTitle } from './Title.styles';
const Title = ({ children, styles = { '': '' }, beforeText, afterText, }) => {
    const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);
    return (React.createElement(StyledTitle, { titleStyles: updatedStyles },
        beforeText,
        children,
        afterText));
};
export default Title;
//# sourceMappingURL=Title.js.map