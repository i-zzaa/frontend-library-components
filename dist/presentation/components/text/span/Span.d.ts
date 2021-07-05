import { FunctionComponent as FC, ReactNode } from 'react';
export interface Props {
    beforeText?: string;
    afterText?: string;
    children: string | string[] | ReactNode;
    styles?: Record<string, string>;
}
declare const Span: FC<Props>;
export default Span;
//# sourceMappingURL=Span.d.ts.map