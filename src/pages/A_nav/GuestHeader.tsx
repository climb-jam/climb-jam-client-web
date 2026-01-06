import {Box, Button, Typography} from "@mui/material";
import {useThemeContext} from "../../context/ThemeContext.tsx";
import {useNavigate} from "react-router";

const GuestHeader = () => {
    const theme = useThemeContext();
    const navigate = useNavigate();

    return (
        <Box
            component="header"
            sx={{
                width: "100%",
                py: 2,
                px: 2,
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "center",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderBottom: `1px solid ${theme.palette.divider}`,
            }}
        >
            {/* Left column empty to center title */}
            <Box />

            {/* Title */}
            <Box
                sx={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => navigate("/")}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "600",
                        fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    }}
                >
                    ClimbJAM
                </Typography>
                {/* Small line */}
                <Box
                    sx={{
                        height: "4px",
                        width: "80px",
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "2px",
                        mt: 0.5,
                        mx: "auto",
                    }}
                />
            </Box>

            {/* Theme button */}
            <Box sx={{ textAlign: "right" }}>
            <Button
                variant="outlined"
                color="primary"
                sx={{
                    minWidth: { xs: 32, sm: 64 }, // ajuste la largeur minimale sur mobile
                    fontSize: { xs: "0.7rem", sm: "0.875rem" }, // texte plus petit sur mobile
                }}
                onClick={theme.toggleTheme}
            >
                {theme.mode === "light" ? "🌙" : "🌞"}
            </Button>
            </Box>
        </Box>
    );
};

export default GuestHeader;