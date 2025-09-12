import axios from "axios";
import type {Crag} from "../@types/crag.type.ts";

const BASE_API_URL = "http://localhost:8080";
const ENDPOINT = "crags"

export const fetchCrags = async (): Promise<Crag[]> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const fetchCragById = async (id: string): Promise<Crag> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as Crag;
    }
}