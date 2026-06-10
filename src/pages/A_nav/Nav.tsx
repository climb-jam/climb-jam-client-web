import * as React from "react";
import {useNavigate, useLocation} from "react-router";

import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
    Box,
    Typography
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";

import logo from "../../assets/logo.webp";

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [value, setValue] = React.useState(location.pathname);

    React.useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    const menu = [
        {label: "Accueil", value: "/home", icon: <HomeIcon/>},
        {label: "Carte", value: "/search", icon: <MapIcon/>},
        {label: "Paramètres", value: "/settings", icon: <SettingsIcon/>},
    ];

    return (
        <Paper
            elevation={3}
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1,
            }}
        >
            {/* LOGO */}
            <Box
                onClick={() => navigate("/home")}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: 1,
                    mr: 2,
                }}
            >
                <img
                    src={logo}
                    alt="ClimbJAM"
                    style={{width: 32, height: 32}}
                />
                <Typography variant="subtitle1" fontWeight={600}>
                    ClimbJAM
                </Typography>
            </Box>

            {/* NAV */}
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(newValue);
                }}
                sx={{
                    flex: 1,
                    background: "transparent",
                }}
            >
                {menu.map((page) => (
                    <BottomNavigationAction
                        key={page.value}
                        label={page.label}
                        value={page.value}
                        icon={page.icon}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
};

export default Nav;