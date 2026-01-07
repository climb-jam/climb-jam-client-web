import Pages from "../../components/layout/Pages";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {Avatar, Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import {useThemeContext} from "../../context/ThemeContext";
import avatar from "../../assets/climberPic.webp"

const Settings = () => {
    const {toggleTheme, mode} = useThemeContext();
    const { user, logout } = AuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };


    if (!user) return null;

    return (
        <Pages title={"Paramètres - ClimbJAM"}>

            <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Paramètres du compte
                </Typography>

                <Paper elevation={2} sx={{ p: 3 }}>
                    <Stack spacing={4}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                            gap={2}
                        >
                            <Avatar
                                alt="default profile pic" src={avatar}
                                sx={{ width: 80, height: 80 }}
                            />
                        </Box>

                        <Button variant="outlined" color="primary" onClick={toggleTheme}>
                            {mode === "light" ? "Mode sombre 🌙" : "Mode clair 🌞"}
                        </Button>
                        <Button variant="outlined" color="error" onClick={handleLogout}>
                            Se déconnecter
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        </Pages>
    );
};

export default Settings;
