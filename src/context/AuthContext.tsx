import React, {createContext, useEffect, useState} from 'react';
import type {User} from "../@types/user.type.ts";
import {useNavigate} from "react-router";
import {getProfileAPI, loginAPI, registerAPI} from "../api/auth-api.ts";
import {toast} from "react-toastify";
import axios from "axios";

type UserContextType = {
    user: User | null;
    token: string | null;
    registerUser: (email: string, password: string, username: string, termsAccepted: boolean) => void;
    loginUser: (email: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
    isReady: boolean;
}

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {

    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isReady, setIsReady] = useState(false); // using isReady because we have many async patters, will make sure our component renders correctly

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (email: string, password: string, username: string, termsAccepted: boolean) => {
        try {
            const res = await registerAPI(email, password, username, termsAccepted);

            if (res) {
                toast.success("Inscription réussie ! Connecte-toi maintenant.");
                navigate("/login");
            }
        } catch (e) {
            toast.warning("Erreur lors de l'inscription.");
        }
    };

    const loginUser = async (email: string, password: string) => {
        try {
            const res = await loginAPI(email, password);

            const token = res?.data.token;
            if (!token) throw new Error("Token manquant");

            // Stockage + configuration axios
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            // Récupération du profil utilisateur
            const profileRes = await getProfileAPI();
            const userObject = profileRes.data;

            localStorage.setItem("user", JSON.stringify(userObject));
            setToken(token);
            setUser(userObject);

            toast.success("Connexion réussie !");
            navigate("/home");
        } catch (error) {
            console.error(error);
            toast.error("Erreur lors de la connexion");
        }
    };

    const isLoggedIn = () => {
        return !!user;
    };
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    }
    return (
        <UserContext.Provider value={{ registerUser, loginUser, user, token, logout, isLoggedIn, isReady }}>
            {children}
        </UserContext.Provider>
    );
};

export const AuthContext = () => React.useContext(UserContext);