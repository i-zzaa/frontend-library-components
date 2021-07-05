import { FunctionComponent as FC, ReactNode } from 'react';
export interface Props {
    beforeText?: string;
    afterText?: string;
    children: string | string[] | ReactNode;
    styles?: Record<string, string>;
}
declare const Title: FC<Props>;
export default Title;
//# sourceMappingURL=Title.d.ts.map