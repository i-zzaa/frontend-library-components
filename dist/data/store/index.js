import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';
const store = configureStore({
    reducer: {
        l10n: L10nSlice,
    },
});
export const useAppDispatch = () => useDispatch();
export default store;
//# sourceMappingURL=index.js.map