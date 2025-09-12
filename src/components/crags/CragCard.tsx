import type {Crag} from "../../@types/crag.type.ts";
import montainCardThumbnail from "../../assets/mountain_card.png"
import {useNavigate} from "react-router";
import {useState} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

type CragCardProps = {
    crag: Crag
}

const CragCard: React.FC<CragCardProps> = ({crag}) => {

    const navigate = useNavigate();

    const [isFav, setIsFav] = useState(false);
    const changeState = () => {
        setIsFav(!isFav);
    }

    return (
        <Card sx={{maxWidth: 345, margin: "5px"}}>
            <CardActionArea onClick={() => navigate(`/crags/${crag.id}`)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={montainCardThumbnail}
                    alt="La montagne"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {crag.name}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {crag.city}, {crag.postalCode}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {crag.minGrade} à {crag.maxGrade}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: "flex", flexDirection: "row-reverse"}}>
                <IconButton aria-label="add to favorites" onClick={changeState} sx={{color: isFav ? "red" : "gray"}}>
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );

};

export default CragCard;
