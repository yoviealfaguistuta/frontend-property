import ApiService from "../../../services/ApiService";

export const getAgentDetail = (id: number) => {
    return ApiService.get(`/get-agents-detail/` + id);
};