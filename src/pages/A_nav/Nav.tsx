import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import {useNavigate} from "react-router";
import {Paper} from "@mui/material";

const Nav = () => {
    const [value, setValue] = React.useState('recents');
    const navigate = useNavigate();

    const menu = [
        {label: "Mon profile", value: "/", icon: <HomeIcon/>, path: '/'},
        {label: "Carte", value: "/search", icon: <MapIcon/>, path: '/search'},
        {label: "Social", value: "/social", icon: <GroupIcon/>, path: '/social'},
        {label: "Paramètres", value: "/settings", icon: <SettingsIcon/>, path: '/settings'},
    ]
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Paper
            sx={{position: "fixed", bottom: 0, left: 0, right: 0}}
            elevation={3}
        >
        <BottomNavigation  sx={{width: "100%", margin: "auto",padding:0}} value={value} onChange={handleChange} >
            {
                menu.map((page, index) => (
                    <BottomNavigationAction
                        key={index}
                        label={page.label}
                        value={page.value}
                        icon={page.icon}
                        onClick={() => navigate(page.path)}
                    />
                ))
            }
        </BottomNavigation>
        </Paper>
    );
};

export default Nav;