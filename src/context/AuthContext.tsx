import React, {createContext, useEffect, useState} from 'react';
import type {UserProfile} from "../@types/user.type.ts";
import {useNavigate} from "react-router";
import {loginAPI, registerAPI} from "../api/authService.ts";
import {toast} from "react-toastify";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, password: string, username: string) => void;
    loginUser: (email: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {

    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
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

    const registerUser = async (email: string, password: string, username: string) => {
        await registerAPI(email, password, username)
            .then((res) => {
            if (res) {
                localStorage.setItem("token", res?.data.token);
                const userObject = {
                    email: res?.data.email,
                    username: res?.data.username
                }
                localStorage.setItem("user", JSON.stringify(userObject));
                setToken(res?.data.token!);
                setUser(userObject!);
                toast.success("Connexion réussie !");
                navigate("/home");
            }
        })
            .catch((e) => toast.warning("Erreur serveur."));
    };

    const loginUser = async (email: string, password: string) => {
        await loginAPI(email, password)
            .then((res) => {
                if (res) {
                    localStorage.setItem("token", res?.data.token);
                    const userObject = {
                        email: res?.data.email,
                        username: res?.data.username
                    }
                    localStorage.setItem("user", JSON.stringify(userObject));
                    setToken(res?.data.token!);
                    setUser(userObject!);
                    toast.success("Connexion réussie !");
                    navigate("/home");
                }
            })
            .catch((e) => toast.warning("Erreur serveur."));
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
        <UserContext.Provider value={{ registerUser, loginUser, user, token, logout, isLoggedIn}}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const AuthContext = () => React.useContext(UserContext);