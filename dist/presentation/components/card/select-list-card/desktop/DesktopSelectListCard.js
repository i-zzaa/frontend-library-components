import React from 'react';
import { useIntl } from 'react-intl';
import InnerButtons from '../inner-buttons/InnerButtons';
import { StyledDesktopSelectListCard, StyledDesktopRowSelectListCard, okButtonStyles as ExternalOkButtonStyles, cancelButtonStyles as ExternalCancelButtonStyles, } from './DesktopSelectListCard.styles';
const DesktopSelectListCard = ({ cancel, ok, renderOkButton = true, renderCancelButton = true, okButtonStyles = {}, cancelButtonStyles = {}, buttonContainerStyles = {}, children, }) => {
    const intl = useIntl();
    return (React.createElement(StyledDesktopSelectListCard, null,
        children,
        React.createElement(StyledDesktopRowSelectListCard, { style: buttonContainerStyles },
            renderCancelButton && (React.createElement(InnerButtons, { textStyles: ExternalCancelButtonStyles, buttonStyles: cancelButtonStyles, onClick: cancel }, intl.formatMessage({
                id: 'filters.business.type.button.cancel',
            }))),
            renderOkButton && (React.createElement(InnerButtons, { textStyles: ExternalOkButtonStyles, buttonStyles: okButtonStyles, onClick: ok }, intl.formatMessage({
                id: 'filters.business.type.button.ok',
            }))))));
};
export default DesktopSelectListCard;
//# sourceMappingURL=DesktopSelectListCard.js.map