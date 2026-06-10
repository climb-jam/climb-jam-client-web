import api from "./axios.ts";
import type {Crag} from "../@types/crag.type.ts";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const ENDPOINT = "crags"

export const fetchCrags = async (): Promise<Crag[]> => {
    try {
        const response = await api.get(`${BASE_API_URL}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const fetchCragById = async (id: string): Promise<Crag> => {
    try {
        const response = await api.get(`${BASE_API_URL}/${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as Crag;
    }
}