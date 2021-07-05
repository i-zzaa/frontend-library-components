import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    '': {
        '': '',
    },
};
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        onChange: (state, action) => {
            const { formName } = action.payload;
            const { inputName } = action.payload;
            const { value } = action.payload;
            if (state) {
                state[formName][inputName] = value;
            }
        },
    },
});
// eslint-disable-next-line no-empty-pattern
export const { onChange } = formSlice.actions;
export default formSlice.reducer;
//# sourceMappingURL=index.js.map