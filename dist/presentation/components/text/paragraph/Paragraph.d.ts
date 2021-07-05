import { FunctionComponent as FC, ReactNode } from 'react';
export interface Props {
    beforeText?: string;
    afterText?: string;
    children: string | string[] | ReactNode;
    styles?: Record<string, string>;
}
declare const Paragraph: FC<Props>;
export default Paragraph;
//# sourceMappingURL=Paragraph.d.ts.map