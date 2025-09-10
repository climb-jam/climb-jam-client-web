import axios from "axios";
import type {Crag} from "../@types/crag.type.ts";

export const fetchCrags = async (): Promise<Crag[]> => {
    try {
        const response = await axios.get("http://localhost:8080/crags");
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}