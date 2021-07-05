var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getLocale } from '@/data/l10n/L10nHelper';
export default function AxiosLanguageInterceptor(config) {
    return __awaiter(this, void 0, void 0, function* () {
        config.headers['Accept-Language'] = getLocale();
        return config;
    });
}
//# sourceMappingURL=AxiosLanguageInterceptor.js.map