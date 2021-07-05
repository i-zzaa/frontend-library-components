var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import L10n from './L10n';
import { getLocale } from './L10nHelper';
import LocaleRepository from './LocaleRepository';
const initialState = getLocale();
export const changeLocale = createAsyncThunk('l10n/changeLocale', (locale) => __awaiter(void 0, void 0, void 0, function* () {
    L10n.loadMessages(locale);
    LocaleRepository.set(locale);
    return Promise.resolve(locale);
}));
const L10nSlice = createSlice({
    name: 'l10n',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(changeLocale.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});
export const selectLocale = (state) => state === null || state === void 0 ? void 0 : state.l10n;
export default L10nSlice.reducer;
//# sourceMappingURL=L10nSlice.js.map