import Pages from "../../components/layout/Pages";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Avatar, Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import {useThemeContext} from "../../context/ThemeContext";
import avatar from "../../assets/climberPic.webp"
import {deleteMyAccount} from "../../api/userApi.ts";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const Settings = () => {
    const {toggleTheme, mode} = useThemeContext();
    const { user, logout } = AuthContext();
    const navigate = useNavigate();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteMyAccount();
            logout();
            localStorage.removeItem("token");
            navigate("/home");
        } catch (error) {
            console.error("Erreur suppression compte", error);
        }
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
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => setOpenDeleteModal(true)}
                        >
                            Supprimer mon compte
                        </Button>
                    </Stack>
                </Paper>
            </Container>
            <Dialog
                open={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
            >
                <DialogTitle>
                    Supprimer le compte
                </DialogTitle>

                <DialogContent>
                    <Typography>
                        Es-tu sûr de vouloir supprimer ton compte ?
                        Cette action est irréversible.
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpenDeleteModal(false)}>
                        Annuler
                    </Button>

                    <Button
                        onClick={handleConfirmDelete}
                        color="error"
                        variant="contained"
                    >
                        Supprimer
                    </Button>
                </DialogActions>
            </Dialog>
        </Pages>

    );
};

export default Settings;
