import { FunctionComponent as FC, ReactElement as RE } from 'react';
interface Props {
    cancel?(): void;
    ok?(): void;
    renderOkButton?: boolean;
    renderCancelButton?: boolean;
    okButtonStyles?: Record<string, string>;
    cancelButtonStyles?: Record<string, string>;
    buttonContainerStyles?: Record<string, string>;
    children?: RE | RE[];
}
declare const DesktopSelectListCard: FC<Props>;
export default DesktopSelectListCard;
//# sourceMappingURL=DesktopSelectListCard.d.ts.map