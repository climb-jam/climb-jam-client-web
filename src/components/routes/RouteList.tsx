import {useParams} from "react-router";

import React, {useEffect, useState} from "react";
import type {Route} from "../../@types/route.type.ts";
import {fetchRoutesByCragId} from "../../api/route-api.ts";
import RouteCard from "./RouteCard.tsx";

import Stack from "@mui/material/Stack";
import {Box} from '@mui/joy';

const RouteList = () => {
    const {id} = useParams();
    const [routes, setRoutes] = useState<Route[]>([])

    useEffect(() => {
        if (id) {
            fetchRoutesByCragId(id)
                .then((routes: Route[]) => {
                    setRoutes(routes);
                })
        }
    }, [id]);

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Box sx={{width: '100%'}}>
            <Stack spacing={2}>
                {routes.map((routes: Route) => {
                    return (
                        <RouteCard routes={routes} key={routes.id} expanded={expanded}
                                   handleChange={handleChange}/>
                    )
                })}
            </Stack>
        </Box>
    );
};

export default RouteList;
