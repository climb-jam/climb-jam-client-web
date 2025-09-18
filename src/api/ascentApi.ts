import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";
import type {Ascent} from "../@types/ascent.type.ts";

const BASE_API_URL = "http://localhost:8080";
const ENDPOINT = "ascents";

export const getAscentsByUserId = async (userId: number): Promise<Ascent[]> => {
    try {
        const response = await axios.get<Ascent[]>(`${BASE_API_URL}/${ENDPOINT}/user/${userId}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const getAllAscents = async (): Promise<Ascent[]> => {
    try {
        const response = await axios.get<Ascent[]>(`${BASE_API_URL}/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};