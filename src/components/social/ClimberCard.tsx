import type {User} from "../../@types/user.type.ts";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import climberPic from "../../assets/climberPic.webp";

type Props = {
    climber: User
}

const ClimberCard = ({climber} : Props) => {

    return (
            <Card sx={{maxWidth: 200, margin: "auto"}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={climberPic}
                    alt="image grimpeur"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {climber.username}
                    </Typography>
                </CardContent>
            </Card>
    );
};

export default ClimberCard;