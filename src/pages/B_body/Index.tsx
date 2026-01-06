import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stats from "./Stats.tsx";
import FavoriteCrags from "./FavoriteCrags.tsx";
import Ascents from "./Ascents.tsx";

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
// Stats, Croix, FavoriteCrags

const Index = ({}) => {
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
        <Box sx={{width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            pl: { md: '90px' } // Décalage pour Nav à gauche - md: 900px
        }}>

            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs of the profile"
                role="navigation"
            >
                <LinkTab label="Stats" href="/stats"/>
                <LinkTab label="Croix" href="/croix"/>
                <LinkTab label="Spots" href="/spots"/>
            </Tabs>
            {/* Contenu des onglets */}
            {value === 0 && <Stats/>}
            {value === 1 && <Ascents/>}
            {value === 2 && <FavoriteCrags/>}
        </Box>
    );
};

export default Index;
