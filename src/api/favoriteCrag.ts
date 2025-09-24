import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";
import type {FavoriteCrag} from "../@types/favoriteCrag.type.ts";
import type {Ascent} from "../@types/ascent.type.ts";
import type {Crag} from "../@types/crag.type.ts";

//const BASE_API_URL = "http://localhost:8080";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL
const ENDPOINT = "favorites";
const URL = `${BASE_API_URL}/${ENDPOINT}`;
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

export const fetchPostFavoriteCrag = async (data: { crag: Partial<Crag> }): Promise<FavoriteCrag> => {
    try {
        const response = await axios.post<FavoriteCrag>(URL, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as FavoriteCrag;
    }
}