import Pages from "../../components/layout/Pages";
import {Container, Paper, Typography} from "@mui/material";
import TermsCard from "../../components/terms/TermsCard.tsx"
import {sections} from "../../data/terms-data.ts"

const Terms = () => {



    return (
        <Pages title="Conditions d'utilisation - ClimbJAM">
            <Container maxWidth="md" sx={{mt: 4, mb: 8}}>
                <TermsCard sections={sections}/>
                <Paper>
                    <Typography>
                        Dernière mise à jour : Juin 2026
                    </Typography>
                </Paper>
            </Container>
        </Pages>
    );
};

export default Terms;