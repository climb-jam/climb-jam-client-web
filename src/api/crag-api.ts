import axios from "axios";
import type {Crag} from "../@types/crag.type.ts";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const ENDPOINT = "crags"

export const fetchCrags = async (): Promise<Crag[]> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}/all`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
export const fetchCragsPaginated = async (page: number, size: number) => {
    const response = await axios.get(`${BASE_API_URL}/crags`, {params: {page, size}});
    return response.data; // data.content + data.totalPages
};

export const fetchCragsByNamePaginated = async (name: string, page: number, size: number) => {
    const response = await axios.get(`${BASE_API_URL}/crags/search`, {
        params: {name, page, size}
    });
    return response.data; // data.content + data.totalPages
};

export const fetchCragsByName = async (name: string): Promise<Crag[]> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/crags/search`, {
            params: {name}
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};


export const fetchCragById = async (id: string): Promise<Crag> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as Crag;
    }
}