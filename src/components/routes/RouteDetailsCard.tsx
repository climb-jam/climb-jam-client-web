import type {Route} from "../../@types/route.type.ts";
import {useEffect, useState} from "react";
import {handleBorder} from "./handleBorder.ts";
import {Box} from "@mui/joy";
import {Typography} from "@mui/material";

type routeProps = {
    routes: Route;
}

const RouteDetailsCard = ({routes}: routeProps) => {
    const [border, setBorder] = useState<string>("2px solid red");

    useEffect(() => {
        return handleBorder(routes.grade, setBorder)
    }, [routes.grade]);

    const boxStyle = {
        display: "flex",
        flexDirection: "column",
        border: `2px solid ` + border,
        textAlign: "left",
        padding: "5px",
        lineHeight: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: "100%",
        marginBottom: "5px"
    }

    return (
        <Box sx={boxStyle}>
            <Typography>{routes.name}</Typography>
            <Typography>Type: {routes.climbingTypes}</Typography>
            <Typography>Cotation: {routes.grade}</Typography>
            <Typography>Hauteur: {routes.height} mètres</Typography>
            <Typography>Inclinaison: {routes.inclineType}</Typography>
            <Typography>Secteur: {routes.sector}</Typography>
        </Box>
    );
};

export default RouteDetailsCard;
