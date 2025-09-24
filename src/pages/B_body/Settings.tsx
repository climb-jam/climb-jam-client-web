import Pages from "../../components/layout/Pages";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Avatar, Box, Button, Container, Paper, Stack, TextField, Typography} from "@mui/material";

const Settings = () => {

    const { user, logout } = AuthContext();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else {
            setUsername(user.username);
        }
    }, [user, navigate]);

    const handleUsernameChange = async () => {
        if (!user) return;
        setLoading(true);
        try {
           // await updateUsername(user.id, username);

            setEditing(false);
        } catch (e) {
            console.error("Erreur lors de la mise à jour du username", e);
        } finally {
            setLoading(false);
        }
    };

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
                    <Stack spacing={2}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Avatar sx={{ width: 56, height: 56 }}>
                                {/*{user.username.charAt(0).toUpperCase()}*/}
                            </Avatar>
                            <Box>
                                <Typography variant="h6">{user.username}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/*Membre depuis le {dayjs(user.createdAt).format("DD/MM/YYYY")}*/}
                                </Typography>
                            </Box>
                        </Box>

                        <TextField
                            label="Email"
                            value={user.email}
                            InputProps={{ readOnly: true }}
                            fullWidth
                        />

                        <TextField
                            label="Nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={!editing}
                            fullWidth
                        />

                        {!editing ? (
                            <Button variant="outlined" onClick={() => setEditing(true)}>
                                Modifier le nom d'utilisateur
                            </Button>
                        ) : (
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    onClick={handleUsernameChange}
                                    disabled={loading}
                                >
                                    Sauvegarder
                                </Button>
                                <Button
                                    variant="text"
                                    onClick={() => {
                                        setUsername(user.username);
                                        setEditing(false);
                                    }}
                                >
                                    Annuler
                                </Button>
                            </Stack>
                        )}

                        <Button
                            variant="text"
                            color="primary"
                            onClick={() => navigate("/change-password")}
                        >
                            Changer le mot de passe
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
