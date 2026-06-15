import type {User} from "../@types/user.type.ts";
import api from "./axios.ts";
import {handleError} from "../helpers/ErrorHandler.tsx";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const ENDPOINT = "users"

export const fetchAllUsersRoleUser = async (): Promise<User[]> => {
    try {
        const response = await api.get(`${BASE_API_URL}/${ENDPOINT}/role-user`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const deleteMyAccount = async (): Promise<void> => {
    try {
        await api.delete("/users/me");
    } catch (error) {
        handleError(error);
    }
};