import {Navigate, Route, Routes} from "react-router";


import Index from "../pages/B_body/Index.tsx";
import Search from "../pages/B_body/Search.tsx";
import Settings from "../pages/B_body/Settings.tsx";
import Social from "../pages/B_body/Social.tsx";
import Spots from "../pages/B_body/Spots.tsx";
import Stats from "../pages/B_body/Stats.tsx";
import Error from "../pages/B_body/Error.tsx";
import LayoutWithNav from "../layout/LayoutWithNav.tsx";
import LayoutWithoutNav from "../layout/LayoutWithoutNav.tsx";

import Home from "../pages/B_body/Home.tsx";
import CragList from "../components/crags/CragList.tsx";

const Router = ({isLogged}: { isLogged: boolean }) => {

    return (
        <>
            <Routes>
                {isLogged ?
                    <Route path="/" element={<LayoutWithNav/>}>
                        <Route path="/" element={<Index/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/social" element={<Social/>}/>
                        <Route path="/spots" element={<Spots/>}/>
                        <Route path="/stats" element={<Stats/>}/>
                        <Route path="/crag-list" element={<CragList/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                    :
                    <Route path="/" element={<LayoutWithoutNav/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Route>
                }
            </Routes>
        </>
    );
};

export default Router;
