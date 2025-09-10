import axios from "axios";
import {handleError} from "../helpers/ErrorHandler.tsx"
import type {UserProfileToken} from "../@types/user.type.ts";

const api = "http://localhost:8080";

export const registerAPI = async (email: string, password: string, username: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api+ "/auth/register", {
            email: email,
            password: password,
            username: username,
        });
        return data
    } catch (error) {
        handleError(error);
    }
};

export const loginAPI = async (email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api+ "/auth/login", {
            email: email,
            password: password,
        });
        return data
    } catch (error) {
        handleError(error);
    }
};