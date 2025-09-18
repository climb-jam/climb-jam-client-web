import type {Route} from "../../@types/route.type.ts";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import RouteItem from "./RouteItem.tsx";
import { handleBorder} from "./handleBorder.ts";
import {useNavigate} from "react-router";

type routeProps = {
    routes: Route,
}

const RouteCard = ({routes}: routeProps) => {
     const [border, setBorder] = useState<string>("2px solid red");
    const navigate = useNavigate();
    useEffect(() => {
        return handleBorder(routes.grade, setBorder)
    }, [routes.grade]);

    const boxStyle = {
        display: "flex",
        border: `2px solid ` + border,
        padding: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }

    const typoStyle = {
        display: "flex",
        alignItems: "center",
        padding: "10px"
    }

    return (
        <Box sx={boxStyle} onClick={() => (navigate(`/crags/${routes.crag.id}/routes/${routes.id}`))}>
            <RouteItem routes={routes.grade} border={border}/>
            <Typography sx={typoStyle}>{routes.name} {routes.climbingTypes}</Typography>
        </Box>
    );
};

export default RouteCard;

