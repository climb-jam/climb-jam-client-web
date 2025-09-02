import {Outlet} from "react-router";
import Nav from "../pages/A_nav/Nav.tsx";

const LayoutWithNav = () => {
    return (
        <>
            <Outlet/>
            <Nav/>
        </>
    );
};

export default LayoutWithNav;
