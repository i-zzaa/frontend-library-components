declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    l10n: string;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    l10n: string;
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
    l10n: string;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    l10n: string;
}, null, import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<{
    l10n: string;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export default store;
//# sourceMappingURL=index.d.ts.map