import ApiService from "../../../services/ApiService";

export const getCategory = () => {
    return ApiService.get(`/get-category`);
};

export const getAgentList = (params: any) => {
    return ApiService.get(`/get-agents`, {
        params: params
    });
};

export const getCategoryPropertyList = () => {
    return ApiService.get(`/get-category-property`);
};