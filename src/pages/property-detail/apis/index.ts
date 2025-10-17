import ApiService from "../../../services/ApiService";

export const getPropertyDetail = (id: number) => {
    return ApiService.get(`/get-property-detail/` + id);
};