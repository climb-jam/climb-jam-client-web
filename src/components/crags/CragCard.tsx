import type {Crag} from "../../@types/crag.type.ts";
import {useEffect} from "react";
import montainCardThumbnail from "../../assets/mountain_card.png"
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
    const [favoriteId, setFavoriteId] = useState<number | undefined>(crag.favoriteId);
    useEffect(() => {
        setIsFav(crag.isFav);
        setFavoriteId(crag.favoriteId);
    }, [crag.isFav, crag.favoriteId]);


    const handleFavoriteClick = async () => {
        if (!isFav) {
            try {
                const favorite = await fetchPostFavoriteCrag({
                    crag: {id: crag.id}
                });

                setIsFav(true);
                setFavoriteId(favorite.id);
            } catch (error) {
                console.error("Erreur ajout favoris :", error);
            }
        } else {
            if (!favoriteId) return;

            try {
                await deleteFavoriteCrag(favoriteId);
                setIsFav(false);
                setFavoriteId(undefined);
            } catch (error) {
                console.error("Erreur suppression favoris :", error);
            }
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
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick();
                    } }
                    sx={{color: isFav ? "red" : "gray"}}
                >
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CragCard;