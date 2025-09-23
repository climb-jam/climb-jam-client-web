import type {User} from "../@types/user.type.ts";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const ENDPOINT = "users"

export const fetchAllUsersRoleUser = async (): Promise<User[]> => {
    try {
        const response = await axios.get(`${BASE_API_URL}/${ENDPOINT}/role-user`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};