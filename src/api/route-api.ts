import axios from "axios";
import type {Route} from "../@types/route.type.ts";

const BASE_API_URL = "http://localhost:8080";
const BASE_URL = "crags"
const ENDPOINT = "routes"


export const fetchRoutes = async (id: string): Promise<Route> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${BASE_URL}/${id}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as Route;
    }
}