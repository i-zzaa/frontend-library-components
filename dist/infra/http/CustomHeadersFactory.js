export const internalHeaders = (apiKey) => ({
    'x-api-key': apiKey,
});
export const externalHeaders = (token) => ({
    Authorization: token,
    'Content-Type': 'application/json',
});
//# sourceMappingURL=CustomHeadersFactory.js.map