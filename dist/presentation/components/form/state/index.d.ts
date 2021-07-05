import { PayloadAction } from '@reduxjs/toolkit';
interface PayloadActionType {
    formName: string;
    inputName: string;
    value: any;
}
declare type InitialFormStateType = Record<string, Record<string, any>> | undefined;
export declare const formSlice: import("@reduxjs/toolkit").Slice<Record<string, Record<string, any>>, {
    onChange: (state: InitialFormStateType, action: PayloadAction<PayloadActionType>) => void;
}, "form">;
export declare const onChange: import("@reduxjs/toolkit").ActionCreatorWithPayload<PayloadActionType, string>;
declare const _default: import("redux").Reducer<Record<string, Record<string, any>>, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=index.d.ts.map