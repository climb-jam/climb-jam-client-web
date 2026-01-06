import {createContext, useContext, useMemo, useState, type ReactNode, useEffect} from "react";
import {createTheme, ThemeProvider, CssBaseline, type Theme} from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextType extends Theme{
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

    // Synchronisation du thème avec le <body> pour le CSS custom
    useEffect(() => {
        document.body.classList.remove("Mui-light", "Mui-dark");
        document.body.classList.add(`Mui-${mode}`);
    }, [mode]);

    const theme = useMemo(() => {
            const muiTheme = createTheme({
                    palette: {
                        mode,
                        primary: {
                            main: "#12C905", // ton vert ClimbJAM
                        },
                    },
            });
            return {
                ...muiTheme,
                mode,
                toggleTheme,
            };
    }, [mode]);

    return (
        <ThemeContext.Provider value={theme}>
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
