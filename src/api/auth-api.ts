import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx"
import type {UserProfileToken} from "../@types/user.type.ts";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
console.log("base url", BASE_API_URL);

export const registerAPI = async (email: string, password: string, username: string, termsAccepted: boolean) => {
    try {
        const data = await axios.post<UserProfileToken>(BASE_API_URL+ "/auth/register", {
            email: email,
            password: password,
            username: username,
            termsAccepted: termsAccepted
        });
        return data
    } catch (error) {
        handleError(error);
    }
};

export const loginAPI = async (email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(BASE_API_URL+ "/auth/login", {
            email: email,
            password: password,
        });
        return data
    } catch (error) {
        handleError(error);
    }
};

export const getProfileAPI = async () => {
    return await axios.get("/api/profiles/me");
};
