import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";
import type {Session} from "../@types/session.type.ts";

//const BASE_API_URL = "http://localhost:8080";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL
const ENDPOINT = "sessions";

export const getSessionsByUserId = async (userId: number): Promise<Session[]> => {
    try {
        const response = await axios.get<Session[]>(`${BASE_API_URL}/${ENDPOINT}/user/${userId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getAllSessions = async (): Promise<Session[]> => {
    try {
        const response = await axios.get<Session[]>(`${BASE_API_URL}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};