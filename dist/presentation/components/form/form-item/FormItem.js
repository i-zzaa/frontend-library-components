import Text from '@/presentation/components/text/Text';
import React from 'react';
import { spanValidator, StyledInput, StyledLabel } from './FormItem.styles';
const FormItem = ({ labelName, itemType, inputName, placeholder, inputValue, onChangeInput, errors, }) => {
    const { Span } = Text;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledLabel, null, labelName),
        React.createElement(StyledInput, { type: itemType, name: inputName, placeholder: placeholder, value: inputValue, onChange: onChangeInput }),
        errors && React.createElement(Span, { styles: spanValidator }, errors)));
};
export default FormItem;
//# sourceMappingURL=FormItem.js.map