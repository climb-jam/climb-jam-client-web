import Pages from "../../components/layout/Pages";
import {useContext} from "react";

import {LogInContext} from "../../LogInContext.tsx";



const Home = () => {
    const {setIsLogged} = useContext(LogInContext)
    return (
        <>
            <Pages title={"home"}>

                <button onClick={() => setIsLogged(true)}>Log in</button>
            </Pages>
        </>
    );
};

export default Home;
