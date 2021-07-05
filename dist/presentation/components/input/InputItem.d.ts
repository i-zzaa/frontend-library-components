import React, { FunctionComponent as FC } from 'react';
export interface Props {
    labelStyles?: Record<string, string>;
    inputID?: string;
    labelName?: string;
    itemType?: string;
    inputName?: string;
    placeholder?: string;
    inputValue?: string | number;
    onChangeInput?(e: React.ChangeEvent<HTMLInputElement>): void;
    errors?: string;
}
declare const FormItem: FC<Props>;
export default FormItem;
//# sourceMappingURL=InputItem.d.ts.map