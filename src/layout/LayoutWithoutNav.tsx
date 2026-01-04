import {Outlet} from "react-router";
import GuestFooter from "../pages/A_nav/GuestFooter.tsx";
import GuestHeader from "../pages/A_nav/GuestHeader.tsx";

const LayoutWithoutNav = () => {
    return (
        <>
            <GuestHeader/>
            <Outlet/>
            <GuestFooter/>
        </>
    );
};

export default LayoutWithoutNav;
