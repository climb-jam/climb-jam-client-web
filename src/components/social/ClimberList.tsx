import type {User} from "../../@types/user.type.ts";
import ClimberCard from "./ClimberCard.tsx";
import {Grid, Typography} from "@mui/material";

type Props = {
    climbers: User[];
}

const ClimberList = ({climbers}: Props) => {

    if (climbers.length === 0) {
        return <Typography>Aucun utilisateur trouvé.</Typography>;
    }

    return (
        <Grid  container spacing={3} justifyContent="center" alignItems="center">
            <Grid container spacing={3}>
                {climbers.map((climber) => (
                    <Grid size={{xs: 12, sm:6, md: 3}} key={climber.id}>
                        <ClimberCard climber={climber} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default ClimberList;