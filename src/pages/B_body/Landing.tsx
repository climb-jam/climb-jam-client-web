import Pages from "../../components/layout/Pages";
import {useNavigate} from "react-router";
import logo from "../../assets/logo.webp";
import map from "../../assets/map.webp";
import stats from "../../assets/stats-mobile.webp";
import {useThemeContext} from "../../context/ThemeContext.tsx";
import {Box, Typography, Button} from "@mui/material";



const Landing = () => {
    const navigate = useNavigate();
    const { mode } = useThemeContext();
    const isDark = mode === "dark";

    return (
            <Pages title={"Accueil - ClimbJAM"}>
                <Box
                    sx={{
                        width: "100%",
                        mx: "auto",
                        textAlign: "center",
                        px: 2,
                        py: 10,
                        color: isDark ? "#f3f4f6" : "#111827",
                        backgroundColor: isDark ? "#1a1a1a" : "#f9fafb",
                    }}
                >
                    <Box sx={{ mb: 4 }}>
                        <img
                            src={logo}
                            alt="Logo ClimbJAM"
                            style={{ height: 100, width: "auto", cursor: "pointer" }}
                            onClick={() => navigate("/")}
                        />
                    </Box>

                    <Typography variant="h3" gutterBottom>
                        ClimbJAM
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ mb: 5, color: isDark ? "#cbd5e1" : "#555" }}
                    >
                        Découvre les plus beaux sites d’escalade naturels en France et suis tes performances.
                    </Typography>

                    <Typography variant="h3" gutterBottom>
                        Rejoins-nous !
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mb: 2, color: isDark ? "#cbd5e1" : "#555" }}
                    >
                        Connecte-toi à une <b>communauté de grimpeurs</b> passionnés de plein air.
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 5, flexWrap: "wrap" }}>
                        <Button
                            variant="outlined"
                            sx={{
                                border: `2px solid ${isDark ? "#6ee7b7" : "#47824e"}`,
                                color: isDark ? "#6ee7b7" : "#47824e",
                                px: 3,
                                py: 1,
                                "&:hover": {
                                    backgroundColor: isDark ? "#6ee7b7" : "#47824e",
                                    color: "#fff",
                                },
                            }}
                            onClick={() => navigate("/register")}
                        >
                            S'inscrire
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: isDark ? "#34d399" : "#47824e",
                                color: isDark ? "#1f2937" : "#fff",
                                px: 3,
                                py: 1,
                                "&:hover": {
                                    backgroundColor: isDark ? "#059669" : "#2e522f",
                                },
                            }}
                            onClick={() => navigate("/login")}
                        >
                            Se connecter
                        </Button>
                    </Box>

                    <Box sx={{ mb: 5 }}>
                        <Typography variant="h5" gutterBottom>
                            Trouve les infos des spots d'escalade
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ mb: 2, color: isDark ? "#cbd5e1" : "#555" }}
                        >
                            ClimbJAM recense les <b>sites d’escalade</b> en France. Découvre de nouvelles falaises
                            en utilisant la recherche ou en consultant notre <b>carte des spots</b> français.
                        </Typography>
                        <img
                            src={map}
                            alt="carte des spots"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </Box>

                    <Box sx={{ mb: 5 }}>
                        <Typography variant="h5" gutterBottom>
                            Visualise ta progression
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ mb: 2, color: isDark ? "#cbd5e1" : "#555" }}
                        >
                            ClimbJAM te permet d'<b>enregistrer tes sessions et les croix</b> que tu as effectuées,
                            et de <b>suivre ta progression</b> notamment grâce à des <b>graphiques</b>.
                        </Typography>
                        <img
                            src={stats}
                            alt="statistiques"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </Box>
                </Box>
            </Pages>
    );
};

export default Landing;
