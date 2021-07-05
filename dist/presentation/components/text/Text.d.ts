import { FunctionComponent as FC, ReactNode } from 'react';
interface SubProps {
    beforeText?: string;
    afterText?: string;
    children: string | string[] | ReactNode;
    styles?: Record<string, string>;
}
interface Props {
    Title: FC<SubProps>;
    Subtitle: FC<SubProps>;
    Paragraph: FC<SubProps>;
    Span: FC<SubProps>;
}
declare const Text: Props;
export default Text;
//# sourceMappingURL=Text.d.ts.map