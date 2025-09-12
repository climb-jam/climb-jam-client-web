import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";

const BASE_API_URL = "http://localhost:8080";
const ENDPOINT = "users/${userId}/stats";

export const fetchUserStats = async (userId: number) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};