import {handleError} from "../helpers/ErrorHandler.tsx";
import api from "./axios.ts";

export const fetchMyStats = async () => {
    try {
        const response = await api.get(`/stats/me`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};