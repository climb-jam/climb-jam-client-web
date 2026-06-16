import type {Crag} from "../../@types/crag.type.ts";

import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

import montainCardThumbnail from "../../assets/mountain_card.webp";

import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

import {
    addFavoriteCrag,
    deleteFavoriteCrag,
    getMyFavoriteCrags,
} from "../../api/favorite-crag-api.ts";

type CragCardProps = {
    crag: Crag;
};

const CragCard: React.FC<CragCardProps> = ({crag}) => {
    const navigate = useNavigate();

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const loadFavoriteStatus = async () => {
            try {
                const favorites = await getMyFavoriteCrags();

                const favorite = favorites.some(
                    (fav) => fav.id === crag.id
                );

                setIsFav(favorite);
            } catch (error) {
                console.error("Erreur chargement favoris :", error);
            }
        };

        loadFavoriteStatus();
    }, [crag.id]);

    const handleFavoriteClick = async () => {
        try {
            if (isFav) {
                await deleteFavoriteCrag(crag.id);
                setIsFav(false);
            } else {
                await addFavoriteCrag(crag.id);
                setIsFav(true);
            }
        } catch (error) {
            console.error("Erreur favoris :", error);
        }
    };

    return (
        <Card sx={{maxWidth: 345, margin: "5px"}}>
            <CardActionArea onClick={() => navigate(`/crags/${crag.id}`)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={montainCardThumbnail}
                    alt="La montagne"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {crag.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {crag.city}, {crag.postalCode}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {crag.minGrade} à {crag.maxGrade}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{display: "flex", flexDirection: "row-reverse"}}>
                <IconButton
                    aria-label="favori"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick();
                    }}
                    sx={{color: isFav ? "red" : "gray"}}
                >
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CragCard;