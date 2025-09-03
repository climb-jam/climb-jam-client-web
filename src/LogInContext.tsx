import {createContext} from "react";

export const LogInContext = createContext({
    isLogged: false,
    setIsLogged: (e: boolean) => {
    }
});