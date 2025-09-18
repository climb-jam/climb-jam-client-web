import Pages from "../../components/layout/Pages";
import {LinearProgress} from "@mui/material";

const Error = () => {
    return (
        <>
            <Pages title={"error"}>
                <LinearProgress/>
            </Pages>
        </>
    );
};

export default Error;
