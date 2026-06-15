import {Navigate, Route, Routes} from "react-router";
import {AuthContext} from "../context/AuthContext.tsx";

import Index from "../pages/B_body/Index.tsx";
import Search from "../pages/B_body/Search.tsx";
import Settings from "../pages/B_body/Settings.tsx";
import Social from "../pages/B_body/Social.tsx";
import FavoriteCrags from "../pages/B_body/FavoriteCrags.tsx";
import Stats from "../pages/B_body/Stats.tsx";
import CragList from "../components/crags/CragList.tsx";
import Error from "../pages/B_body/Error.tsx";
import LayoutWithNav from "../layout/LayoutWithNav.tsx";

import LayoutWithoutNav from "../layout/LayoutWithoutNav.tsx";
import Landing from "../pages/B_body/Landing.tsx";
import Register from "../pages/B_body/Register.tsx";
import Login from "../pages/B_body/Login.tsx";
import CragTab from "../components/crags/CragTab.tsx";
import ClimbingRouteList from "../components/climbing-routes/ClimbingRouteList.tsx";
import AscentForm from "../components/ascents/AscentForm.tsx";
import {useEffect, useState} from "react";
import Terms from "../pages/B_body/Terms.tsx";

const Router = () => {
    const { isLoggedIn } = AuthContext();
    //const isLogged = isLoggedIn();
    const [isLogged, setIsLogged] = useState<boolean>(isLoggedIn())

    useEffect(() => {
        setIsLogged(isLoggedIn())
    }, [isLogged, isLoggedIn]);

    return (
        <>
            <Routes>
                {isLogged ? (
                    <Route path="/" element={<LayoutWithNav/>}>
                        <Route path="/home" element={<Index/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/social" element={<Social/>}/>
                        <Route path="/spots" element={<FavoriteCrags/>}/>
                        <Route path="/stats" element={<Stats/>}/>
                        <Route path="/crags" element={<CragList/>}/>
                        <Route path="/crags/:id" element={<CragTab/>}/>
                        <Route path="/crags/:id/routes" element={<ClimbingRouteList/>}/>
                        <Route path="/crags/:id/routes/:idRoute" element={<AscentForm/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                ) : (
                    <Route path="/" element={<LayoutWithoutNav/>}>
                        <Route path="/" element={<Landing/>}/>
                        <Route path="/terms" element={<Terms/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Route>
                )}
            </Routes>
        </>
    );
};

export default Router;
