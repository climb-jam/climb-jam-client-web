import {Outlet} from "react-router";
import GuestFooter from "../pages/A_nav/GuestFooter.tsx";
import GuestHeader from "../pages/A_nav/GuestHeader.tsx";
import {Box} from "@mui/joy";

const LayoutWithoutNav = () => {
    return (
        <>
            <GuestHeader/>
            <Box sx={{pb: 7}}>
                <Outlet/>
            </Box>
            <GuestFooter/>
        </>
    );
};

export default LayoutWithoutNav;
