import api from "./axios.ts";
import {handleError} from "../helpers/ErrorHandler.tsx";
import type {FavoriteCrag} from "../@types/favoriteCrag.type.ts";

const ENDPOINT = "favorites";

export const getMyFavoriteCrags = async (): Promise<FavoriteCrag[]> => {
    try {
        const response = await api.get(`/${ENDPOINT}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const addFavoriteCrag = async (
    cragId: number
): Promise<FavoriteCrag | null> => {
    try {
        const response = await api.post(`/${ENDPOINT}/${cragId}`);
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

export const deleteFavoriteCrag = async (
    cragId: number
): Promise<void> => {
    try {
        await api.delete(`/${ENDPOINT}/${cragId}`);
    } catch (error) {
        handleError(error);
    }
};

export const isFavoriteCrag = async (
    cragId: number
): Promise<boolean> => {
    try {
        const response = await api.get(
            `/${ENDPOINT}/${cragId}/status`
        );

        return response.data;
    } catch (error) {
        handleError(error);
        return false;
    }
};