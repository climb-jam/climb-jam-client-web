import api from "./axios.ts";
import type {Route} from "../@types/route.type.ts";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const ENDPOINT = "routes";

export const fetchRoutesByCragId = async (id: string): Promise<Route[]> => {
    try {
        const response = await api.get(`${BASE_API_URL}/${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const fetchRoutesById = async (id: string): Promise<Route> => {
    try {
        const response = await api.get(`${BASE_API_URL}/${ENDPOINT}/details/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as Route;
    }
}

