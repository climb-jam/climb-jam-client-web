import * as React from "react";
import {useNavigate, useLocation} from "react-router";

import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    BottomNavigation,
    BottomNavigationAction,
    Paper,
    useMediaQuery
} from "@mui/material";

import {useTheme} from "@mui/material/styles";

import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";

import logo from "../../assets/logo.webp";

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const [value, setValue] = React.useState(location.pathname);

    React.useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    const menu = [
        {
            label: "Accueil",
            value: "/home",
            icon: <HomeIcon/>
        },
        {
            label: "Carte",
            value: "/search",
            icon: <MapIcon/>
        },
        {
            label: "Paramètres",
            value: "/settings",
            icon: <SettingsIcon/>
        }
    ];

    if (isDesktop) {
        return (
            <AppBar
                position="fixed"
                color="inherit"
                elevation={2}
            >
                <Toolbar sx={{px: 4}}>

                    {/* Logo */}
                    <Box
                        onClick={() => navigate("/home")}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            cursor: "pointer",
                            mr: 4
                        }}
                    >
                        <img
                            src={logo}
                            alt="ClimbJAM"
                            style={{
                                width: 40,
                                height: 40
                            }}
                        />

                        <Typography
                            variant="h6"
                            fontWeight={700}
                        >
                            ClimbJAM
                        </Typography>
                    </Box>

                    {/* Navigation */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1
                        }}
                    >
                        {menu.map((page) => (
                            <Button
                                key={page.value}
                                startIcon={page.icon}
                                variant={
                                    value === page.value
                                        ? "contained"
                                        : "text"
                                }
                                onClick={() => {
                                    setValue(page.value);
                                    navigate(page.value);
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Push à droite pour futur avatar */}
                    <Box sx={{flexGrow: 1}}/>

                </Toolbar>
            </AppBar>
        );
    }

    // Mobile
    return (
        <Paper
            elevation={3}
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}
        >
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(newValue);
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