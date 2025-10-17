import axios from 'axios';
import { CONST_SERVICE_API_URL } from '../constant/environment';
import { catchDefaultError } from '../utils/validation';

const ApiService = axios.create({
    baseURL: CONST_SERVICE_API_URL, // http://192.168.128.101:31817
});

// const pendingRequests = new Map();
ApiService.interceptors.request.use(function (config) {
    // const requestIdentifier = `${config.url}_${config.method}`;

    // if (pendingRequests.has(requestIdentifier)) {
    //     const cancelTokenSource = pendingRequests.get(requestIdentifier);
    //     // cancel the previous request
    //     cancelTokenSource.cancel('Cancelled due to new request');
    // }
    // const newCancelTokenSource = axios.CancelToken.source();
    // config.cancelToken = newCancelTokenSource.token;

    // // store the new cancel token source in the map
    // pendingRequests.set(requestIdentifier, newCancelTokenSource);

    config.headers.Accept = `application/json`;
    config.headers['Content-Type'] = `application/json`;
    // const token = getCookie('X-SIPD-PU-TK');
    // if (token) {
    //     config.headers.authorization = `Bearer ${token}`;
    // }
    return config;
});

ApiService.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response != null && error.response.data != null && error.response.data.message != null && error.response.data.message === 'Forbidden - Anda tidak diizinkan mengakses fungsi ini') {
            return
        }
        catchDefaultError(error)
        return Promise.reject(error);
    }
);

export default ApiService;