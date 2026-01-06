import type {Crag} from "../../@types/crag.type.ts";
import montainCardThumbnail from "../../assets/mountain_card.webp"
import {useNavigate} from "react-router";
import {useState} from "react";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {deleteFavoriteCrag, fetchPostFavoriteCrag} from "../../api/favoriteCrag.ts";
import type {FavoriteCrag} from "../../@types/favoriteCrag.type.ts";

type CragCardProps = {
    crag: Crag,
    fav: FavoriteCrag
}

const CragCard: React.FC<CragCardProps> = ({crag}) => {
    const navigate = useNavigate();
    const [isFav, setIsFav] = useState(crag.isFav);
    const [favorites, setFavorites] = useState<FavoriteCrag[]>([]);


    const handleFavoriteClick = async () => {
        console.log(isFav)
        if (!isFav) {
            try {
                const favorite: Partial<FavoriteCrag> = await fetchPostFavoriteCrag({
                    crag: {id: crag.id}
                });
                console.log("Ajouté aux favoris :", favorite);
                setIsFav(!isFav); // On met à jour l'état local
            } catch (error) {
                console.error("Erreur ajout favoris :", error);
            }
        }
        else{
        /*    //>TODO faire la suppression d'un favorisCrag
            try {
                const favorite: Partial<FavoriteCrag[]> = await deleteFavoriteCrag({fav.id});

                console.log("Retirer aux favoris :", favorite);
                console.log(isFav)
                setIsFav(!isFav);
            } catch (error) {
                console.error("Erreur lors de la suppression du favori", error);
            }*/
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
                <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavoriteClick}
                    sx={{color: isFav ? "red" : "gray"}}
                >
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CragCard;