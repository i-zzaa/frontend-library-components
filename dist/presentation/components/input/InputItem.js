import Text from '@/presentation/components/text/Text';
import React, { useState, } from 'react';
import { spanValidator, StyledInputContainer, StyledInput, StyledLabel, lebelStyles as ls, StyledItemContainer, } from './InputItem.styles';
import PasswordItemVisibility from './password-item-visibility/PassowordItemVisibility';
const FormItem = ({ labelStyles = ls, inputID, labelName, itemType = 'text', inputName, placeholder, inputValue, onChangeInput, errors, }) => {
    const { Span } = Text;
    const [temporaryItemType, setTemporaryItemType] = useState(itemType);
    return (React.createElement(StyledItemContainer, null,
        React.createElement(StyledLabel, null,
            React.createElement(Span, { styles: labelStyles }, labelName)),
        React.createElement(StyledInputContainer, null,
            React.createElement(StyledInput, { id: inputID, type: temporaryItemType, name: inputName, placeholder: placeholder, value: inputValue, onChange: onChangeInput }),
            itemType === 'password' && (React.createElement(PasswordItemVisibility, { itemType: temporaryItemType, setItemType: setTemporaryItemType }))),
        errors && React.createElement(Span, { styles: spanValidator }, errors)));
};
export default FormItem;
//# sourceMappingURL=InputItem.js.map