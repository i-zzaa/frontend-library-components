import React from 'react';
import { StyledButton, StyledDisabledButton } from './Button.styles';
const Button = ({ children, type, onClick, styles, disabled, }) => {
    if (disabled) {
        return (React.createElement(StyledDisabledButton, { style: styles, disabled: disabled }, children));
    }
    return (
    // eslint-disable-next-line react/button-has-type
    React.createElement(StyledButton, { type: type, onClick: onClick, style: styles }, children));
};
export default Button;
//# sourceMappingURL=Button.js.map