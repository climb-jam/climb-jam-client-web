import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const ENDPOINT = "users/${userId}/stats";

export const fetchUserStats = async (userId: number) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};