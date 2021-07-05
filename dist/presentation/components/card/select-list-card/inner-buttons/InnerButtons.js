import Text from '@/presentation/components/text/Text';
import React from 'react';
import { StyledInnerButtonsContainer } from './InnerButtons.styles';
const InnerButtons = ({ children, onClick, textStyles, buttonStyles, }) => {
    const { Span } = Text;
    return (React.createElement(StyledInnerButtonsContainer, { onClick: onClick, style: buttonStyles },
        React.createElement(Span, { styles: textStyles }, children)));
};
export default InnerButtons;
//# sourceMappingURL=InnerButtons.js.map