import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const fetchUserStats = async (userId: number) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/users/${userId}/stats`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};