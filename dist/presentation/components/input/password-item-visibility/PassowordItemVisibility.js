import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { VisibilityEyeContainer } from './PassowordItemVisibility.styles';
const PasswordItemVisibility = ({ itemType, setItemType, }) => {
    const handleItemTypeChange = () => {
        switch (itemType) {
            case 'password':
                setItemType('text');
                break;
            case 'text':
                setItemType('password');
                break;
            default:
                setItemType(itemType);
        }
    };
    if (itemType === 'password') {
        return (React.createElement(VisibilityEyeContainer, null,
            React.createElement(AiOutlineEyeInvisible, { onClick: handleItemTypeChange, size: 24 })));
    }
    if (itemType === 'text') {
        return (React.createElement(VisibilityEyeContainer, null,
            React.createElement(AiOutlineEye, { onClick: handleItemTypeChange, size: 24 })));
    }
    return null;
};
export default PasswordItemVisibility;
//# sourceMappingURL=PassowordItemVisibility.js.map