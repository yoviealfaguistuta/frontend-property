import ApiService from "../../../services/ApiService";

export const getProperty = (params: any) => {
    return ApiService.get(`/get-property`, {
        params: params
    });
};