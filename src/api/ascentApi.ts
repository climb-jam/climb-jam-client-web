import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx";
import type {Ascent} from "../@types/ascent.type.ts";
import api from "./axios.ts";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL
const ENDPOINT = "ascents";
const URL = `${BASE_API_URL}/${ENDPOINT}`;

export const getMyAscents = async (): Promise<Ascent[]> => {
    try {
        const response = await api.get(`/${ENDPOINT}/me`);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const fetchPostAscent = async (data: Partial<Ascent>): Promise<Ascent> => {
    try {
        const response = await axios.post(URL, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as Ascent;
    }
}