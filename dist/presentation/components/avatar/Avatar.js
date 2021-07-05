import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { StyledAvatarContainer, StyledAvatar } from './Avatar.styles';
const Avatar = ({ size = 24, width = size, height = size, altText = 'avatar img', srcImage, }) => {
    if (srcImage) {
        return (React.createElement(StyledAvatarContainer, { width: width, height: height },
            React.createElement(StyledAvatar, { alt: altText, src: srcImage })));
    }
    return (React.createElement(StyledAvatarContainer, null,
        React.createElement(BsFillPersonFill, { size: size, color: "gray" })));
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map