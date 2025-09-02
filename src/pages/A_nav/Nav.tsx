import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import {useNavigate} from "react-router";

const Nav = () => {
    const [value, setValue] = React.useState('recents');
    const navigate = useNavigate();

    const menu = [
        {label: "Mon profile", value: "/", icon: <HomeIcon/>, navigation : navigate('/')},
        {label: "Carte", value: "/search", icon: <MapIcon/>, navigation : navigate('/search')},
        {label: "Social", value: "/social", icon: <GroupIcon/>, navigation: navigate('/social')},
        {label: "Paramètres", value: "/settings", icon: <SettingsIcon/>,navigation: navigate('/settings')},
    ]
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{width: 500}} value={value} onChange={handleChange}>
            {
                menu.map((page,index) => (

                    <BottomNavigationAction
                        key={index}
                        label={page.label}
                        value={page.value}
                        icon={page.icon}
                        onClick={() => page.navigation}
                        //onClick={page.navigation}
                    />
                ))
            }
        </BottomNavigation>
    );
};

export default Nav;
