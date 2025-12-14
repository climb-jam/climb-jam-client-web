import {createContext, useContext, useMemo, useState, type ReactNode} from "react";
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({children}: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>(
        (localStorage.getItem("theme") as ThemeMode) || "light"
    );

    const toggleTheme = () => {
        setMode((prev) => {
            const next = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", next);
            return next;
        });
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#12C905", // ton vert ClimbJAM
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{mode, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Hook custom (meilleure pratique)
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within ThemeContextProvider");
    }
    return context;
};
