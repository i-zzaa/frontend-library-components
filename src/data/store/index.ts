import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';

const store = configureStore({
  reducer: {
    l10n: L10nSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
