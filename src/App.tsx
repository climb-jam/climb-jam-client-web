import './App.css'
import Router from "./routers/Router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {UserProvider} from "./context/AuthContext";

const App = () => {
    return (
        <UserProvider>
            <Router/>
            <ToastContainer/>
        </UserProvider>
    );
};

export default App;
