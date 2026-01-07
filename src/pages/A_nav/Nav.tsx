import * as React from "react";
import {useNavigate} from "react-router";
import "./Nav.css";

import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTheme} from "@mui/material/styles";
import logo from "../../assets/logo.webp";

const Nav = () => {
    const [value, setValue] = React.useState("/home");
    const navigate = useNavigate();
    const theme = useTheme();

    const menu = [
        {label: "Mon profil", value: "/home", icon: <HomeIcon/>, path: "/home"},
        {label: "Carte", value: "/search", icon: <MapIcon/>, path: "/search"},
        {label: "Paramètres", value: "/settings", icon: <SettingsIcon/>, path: "/settings"},
    ];

    return (
        <nav className="nav" style={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
        }}>
            <div className="nav-logo nav-item">
                <img src={logo} alt="ClimbJAM" className="nav-logo-icon" />
                <span>ClimbJAM</span>
            </div>
            {menu.map((page) => (
                <button
                    key={page.value}
                    className={`nav-item ${value === page.value ? "active" : ""}`}
                    onClick={() => {
                        setValue(page.value);
                        navigate(page.path);
                    }}
                >
                    {page.icon}
                    <span>{page.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default Nav;
