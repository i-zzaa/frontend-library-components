import { StyleRemapper } from '@/presentation/utils/style-remapper/StyleRemapper';
import React, { useMemo, } from 'react';
import { StyledSubtitle } from './Subtitle.styles';
const Subtitle = ({ children, styles = { '': '' }, beforeText, afterText, }) => {
    const updatedStyles = useMemo(() => StyleRemapper(styles), [styles]);
    return (React.createElement(StyledSubtitle, { subtitleStyles: updatedStyles },
        beforeText,
        children,
        afterText));
};
export default Subtitle;
//# sourceMappingURL=Subtitle.js.map