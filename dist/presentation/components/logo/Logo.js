import React from 'react';
import EEMOVEL_DARK_LOGO from '@/presentation/assets/logos/EEMOVEL-logo-escuro.svg';
import { StyledImageContainer, StyledImage } from './Logo.styles';
const Logo = ({ width = 91, height = 20, altText = 'logo img', imageSrc = EEMOVEL_DARK_LOGO, onClick, }) => {
    return (React.createElement(StyledImageContainer, { width: width, height: height, onClick: onClick },
        React.createElement(StyledImage, { alt: altText, src: imageSrc })));
};
export default Logo;
//# sourceMappingURL=Logo.js.map