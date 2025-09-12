import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RouteList from "../routes/RouteList.tsx";
import CragDetails from "./CragDetails.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCragById} from "../../api/crag-api.ts";

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

interface LinkTabProps {
    label?: string;
    href?: string;
    selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                // Routing libraries handle this, you can remove the onClick handle when using them.
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}

// Stats, Croix, Spots

const CragTab = () => {
    const {id} = useParams();
    const [crag, setCrag] = useState<Crag>({} as Crag)

    useEffect(() => {
        if (id) {
            fetchCragById(id)
                .then((crag: Crag) => {
                    setCrag(crag);
                })
        }
    }, [id]);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ))
        ) {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs of crags and routes"
                role="navigation"
            >
                <LinkTab label={crag.name} href={`/crags/${crag.id}`}/>
                <LinkTab label="Les lignes" href={`/crags/${crag.id}/route-list`}/>
            </Tabs>
            {/* Contenu des onglets */}
            {value === 0 && <CragDetails cragProps={crag} />}
            {value === 1 && <RouteList/>}
        </Box>
    );
};

export default CragTab;
