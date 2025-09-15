import type {Route} from "../@types/route.type.ts";
import axios from "axios";

const BASE_API_URL = "http://localhost:8080";
const ENDPOINT = "/routes";

export const fetchRoutesById = async (id: string): Promise<Route[]> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}