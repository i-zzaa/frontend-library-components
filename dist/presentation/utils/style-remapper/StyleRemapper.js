/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const filterStylesArray = (stylesArray) => stylesArray.filter(([key, value]) => key && value);
const mapStylesArray = (filteredStylesArray) => (filteredStylesArray === null || filteredStylesArray === void 0 ? void 0 : filteredStylesArray.map(([key, value]) => [
    key,
    (value += ' !important'),
])) || ['', ''];
const mapBuilder = (stylesArray) => new Map(stylesArray);
export const StyleRemapper = (styles) => {
    const stylesArray = Object.entries(styles);
    // const filteredStylesArray = stylesArray.filter(
    //   ([key, value]: Array<string>) => key && value
    // );
    const filteredStylesArray = filterStylesArray(stylesArray);
    // const newStylesArray = filteredStylesArray?.map(
    //   ([key, value]: Array<string>) => [key, (value += ' !important')]
    // ) || ['', ''];
    const newStylesArray = mapStylesArray(filteredStylesArray);
    // const mappedStylesArray = new Map(
    //   newStylesArray as Iterable<readonly [unknown, unknown]>
    // );
    const mappedStylesArray = mapBuilder(newStylesArray);
    const newStyles = Object.fromEntries(mappedStylesArray);
    // styles = { ...newStyles };
    return newStyles;
};
//# sourceMappingURL=StyleRemapper.js.map