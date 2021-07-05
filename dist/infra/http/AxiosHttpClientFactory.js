import Axios from 'axios';
import AxiosLanguageInterceptor from './AxiosLanguageInterceptor';
export default function makeAxiosHttpClient() {
    const baseURL = process.env.REACT_APP_SERVER_URI;
    const axios = Axios.create({ baseURL, withCredentials: false });
    axios.interceptors.request.use(AxiosLanguageInterceptor);
    axios.interceptors.response.use((response) => {
        return response.data;
    }, (error) => {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-throw-literal, no-throw-literal
        throw (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
    });
    return axios;
}
//# sourceMappingURL=AxiosHttpClientFactory.js.map