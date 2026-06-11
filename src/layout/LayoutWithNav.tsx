import {Outlet} from "react-router";
import Nav from "../pages/A_nav/Nav.tsx";
import {Box} from "@mui/joy";

const LayoutWithNav = () => {
    return (
        <>
            <Box
                sx={{
                    pt: {md: 8},
                    pb: {xs: 7, md: 0}
                }}
            >
            <Outlet/>
            <Nav/>
            </Box>
        </>
    );
};

export default LayoutWithNav;
