import { FunctionComponent as FC } from 'react';
import { Props as FormItemProps } from './form-item/FormItem';
interface SubProps {
    Item: FC<FormItemProps>;
}
interface Props {
    children?: SubProps[];
    formName?: string;
    onSubmit?(): void;
    Item: FC<FormItemProps>;
}
declare const Form: Props;
export default Form;
//# sourceMappingURL=Form.d.ts.map