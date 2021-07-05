import useWindowSize from '@/presentation/hooks/useWindowSize/useWindowSize';
import React from 'react';
import FormItem from './form-item/FormItem';
import { StyledForm } from './Form.styles';
const Form = ({ children, formName, onSubmit }) => {
    const { width } = useWindowSize();
    const isMobile = width < 1076;
    return (React.createElement(StyledForm, { isMobile: isMobile, width: width, name: formName, onSubmit: onSubmit }, children));
};
Form.Item = FormItem;
export default Form;
//# sourceMappingURL=Form.js.map