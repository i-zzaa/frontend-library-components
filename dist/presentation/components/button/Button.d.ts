import { FunctionComponent as FC } from 'react';
import { ButtonType } from './Button.types';
interface Props {
    children?: string;
    type?: ButtonType;
    disabled?: boolean;
    styles?: Record<string, string>;
    onClick?(): void;
}
declare const Button: FC<Props>;
export default Button;
//# sourceMappingURL=Button.d.ts.map