import useWindowSize from '@/presentation/hooks/useWindowSize/useWindowSize';
import React from 'react';
import { StyledHeader } from './Header.styles';
import LeftHeader from './sub-components/left-header/LeftHeader';
import RightDesktopHeader from './sub-components/right-header/right-desktop-header/RightDesktopHeader';
const Header = () => {
    const { width } = useWindowSize();
    const isMobile = width < 1076;
    if (isMobile) {
        return (React.createElement(StyledHeader, null,
            React.createElement(LeftHeader, null)));
    }
    return (React.createElement(StyledHeader, null,
        React.createElement(LeftHeader, null),
        React.createElement(RightDesktopHeader, null)));
};
export default Header;
//# sourceMappingURL=Header.js.map