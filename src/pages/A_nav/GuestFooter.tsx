import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GuestFooter = () => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                textAlign: "center",
                p: 2,

                borderTop: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
            }}
        >
            <Typography variant="body2">
                ©  {new Date().getFullYear()} ClimbJAM. Tous droits réservés.
            </Typography>
        </Box>
    );
};

export default GuestFooter;