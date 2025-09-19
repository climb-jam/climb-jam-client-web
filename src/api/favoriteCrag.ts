import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";
import type {FavoriteCrag} from "../@types/favoriteCrag.type.ts";

const BASE_API_URL = "http://localhost:8080";
const ENDPOINT = "favorites";

export const getFavoriteCragsByUserId = async (userId: number): Promise<FavoriteCrag[]> => {
    try {
        const response = await axios.get<FavoriteCrag[]>(`${BASE_API_URL}/${ENDPOINT}/user/${userId}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const deleteFavoriteCrag = async (id: number) => {
    try {
        const response = await axios.delete<FavoriteCrag[]>(`${BASE_API_URL}/${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};