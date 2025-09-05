import {useState} from 'react'
import './App.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import Router from "./routers/Router.tsx";
import {createTheme} from '@mui/material/styles';
import {LogInContext} from "./LogInContext.tsx";

const App = () => {

    const [isLogged, setIsLogged] = useState(false);
    const theme = createTheme({
        palette: {
            primary: {
                light: '#FDFFEB',
                main: '#12C905',
                dark: '#000000',
                contrastText: '#000000',
            },
            secondary: {
                light: '#ff7961',
                main: '#000000',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LogInContext value={{isLogged, setIsLogged}}>
                    <Router isLogged={isLogged}/>
                </LogInContext>
            </ThemeProvider>
        </>
    )
}

export default App

