import Logo from '@/presentation/components/logo/Logo';
import React from 'react';
import history from '@/main/routes/history/history';
import { useIntl } from 'react-intl';
import { StyledLeftHeaderContainer } from './LeftHeader.styles';
const LeftHeader = () => {
    const intl = useIntl();
    const handleLogoClick = () => {
        history.push(intl.formatMessage({ id: 'routes.dashboard' }));
    };
    return (React.createElement(StyledLeftHeaderContainer, null,
        React.createElement(Logo, { onClick: handleLogoClick })));
};
export default LeftHeader;
//# sourceMappingURL=LeftHeader.js.map