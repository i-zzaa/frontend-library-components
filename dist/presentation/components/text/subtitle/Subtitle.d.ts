import { FunctionComponent as FC, ReactNode } from 'react';
export interface Props {
    beforeText?: string;
    afterText?: string;
    children: string | string[] | ReactNode;
    styles?: Record<string, string>;
}
declare const Subtitle: FC<Props>;
export default Subtitle;
//# sourceMappingURL=Subtitle.d.ts.map