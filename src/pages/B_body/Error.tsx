import Pages from "../../components/layout/Pages";
import {LinearProgress} from "@mui/material";
import BackNav from "../A_nav/BackNav.tsx";

const Error = () => {
    return (
        <>
            <Pages title={"error"}>
                <BackNav/>
                <LinearProgress/>
            </Pages>
        </>
    );
};

export default Error;
