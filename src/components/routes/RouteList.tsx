import {useEffect, useState} from "react";
import type {Route} from "../../@types/route.type.ts";
import {fetchRoutes} from "../../api/route-api.ts";
import {useParams} from "react-router";

const RouteList = () => {
    const {id} = useParams();
    const [routes, setRoutes] = useState<Route[]>([])
    useEffect(() => {
        if(id) {
            fetchRoutes(id)
                .then((routes: Route[]) => {
                    setRoutes(routes);
                })
        }
    }, [id])
    return (
        <>
            {routes.map((route: Route) => (
                <p key={route.id}>{route.crag}</p>
            ))}
        </>
    );
};

export default RouteList;
