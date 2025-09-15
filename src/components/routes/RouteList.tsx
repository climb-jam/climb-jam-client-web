import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Route} from "../../@types/route.type.ts";
import {fetchRoutesById} from "../../api/route-api.ts";
import RouteCard from "./RouteCard.tsx";
import {Box} from "@mui/material";
import Stack from "@mui/material/Stack";

const RouteList = () => {
    const {id} = useParams();
    const [routes, setRoutes] = useState<Route[]>([])

    useEffect(() => {
        if (id) {
            fetchRoutesById(id)
                .then((routes: Route[]) => {
                    setRoutes(routes);
                })
        }
    }, [id]);

    return (
        <Box sx={{width: '100%'}}>
            <Stack spacing={2}>
            {routes.map((routes: Route) => {
                return (
                    <RouteCard routes={routes} key={routes.id}/>
                )
            })}
            </Stack>
        </Box>
    );
};

export default RouteList;
