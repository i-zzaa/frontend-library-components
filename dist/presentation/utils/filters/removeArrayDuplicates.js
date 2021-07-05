export const removeArrayDuplicates = (array) => {
    return Object.values(array.reduce((acc, cv) => acc[cv.toString()] ? Object.assign({}, acc) : Object.assign(Object.assign({}, acc), { [cv.toString()]: cv }), {}));
};
//# sourceMappingURL=removeArrayDuplicates.js.map