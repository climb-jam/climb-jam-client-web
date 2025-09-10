import './App.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import Router from "./routers/Router.tsx";
import {createTheme} from '@mui/material/styles';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {UserProvider} from "./context/AuthContext.tsx";

const App = () => {

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
            <UserProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <Router/>
                <ToastContainer/>
            </ThemeProvider>
            </UserProvider>
        </>
    )
}

export default App

