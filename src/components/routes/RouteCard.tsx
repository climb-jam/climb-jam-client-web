import * as React from 'react';
import {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {type AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
    type AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import type {Route} from "../../@types/route.type.ts";
import {useNavigate} from "react-router";
import {handleBorder} from "./handleBorder.ts";
import RouteItem from "./RouteItem.tsx";
import {AccordionActions} from "@mui/material";
import RouteDetailsCard from "./RouteDetailsCard.tsx";
import Stack from "@mui/material/Stack";

type routeProps = {
    routes: Route,
    expanded: string | false,
    handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
            transform: 'rotate(90deg)',
        },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },

    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const RouteCard = ({routes, expanded, handleChange}: routeProps) => {

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

            <Accordion expanded={expanded === "panel"+routes.id} onChange={handleChange("panel"+routes.id)}>
                <AccordionSummary sx={boxStyle} aria-controls={"panel"+routes.id +"d-content"} id={"panel"+ routes.id+"d-header"}>
                    <Stack flexDirection={"row"} >
                        <RouteItem routes={routes.grade} border={border}/>
                        <Typography sx={typoStyle}>{routes.name} {routes.climbingTypes}</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>

                        <RouteDetailsCard routes={routes}/>

                </AccordionDetails>
                <AccordionActions sx={{paddingTop: 0}}>
                    <button style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} onClick={() => (navigate(`/crags/${routes.crag.id}/routes/${routes.id}`))}>Ajouter aux croix</button>
                </AccordionActions>
            </Accordion>


    );
}

export default RouteCard;

