import Pages from "../../components/layout/Pages";
import {Avatar, Box, CircularProgress, Container, IconButton, Paper, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import type {FavoriteCrag} from "../../@types/favoriteCrag.type.ts";
import {deleteFavoriteCrag, getFavoriteCragsByUserId} from "../../api/favoriteCrag.ts";
import montainCardThumbnail from "../../assets/mountain_card.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

type FavoritesProps = {
    fav: FavoriteCrag
}

const FavoriteCrags: React.FC<FavoritesProps> = () => {

    const { user } = AuthContext();
    const navigate = useNavigate();

    const [favorites, setFavorites] = useState<FavoriteCrag[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        getFavoriteCragsByUserId(user.id)
            .then(setFavorites)
            .catch((error) => {
                console.error("Erreur lors de la récupération des spots favoris", error);
            })
            .finally(() => setLoading(false));
    }, [user, navigate]);

    const handleRemoveFavorite = async (id: number) => {
        try {
            await deleteFavoriteCrag(id);
            setFavorites(prev => prev.filter(fav => fav.id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression du favori", error);
        }
    };

    if (loading) return <CircularProgress />;

    return (
        <Pages title={"FavoriteCrags"}>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Mes spots favoris
                </Typography>

                {favorites.length === 0 ? (
                    <Typography>Aucun spot d'escalade en favori.</Typography>
                ) : (
                    <Stack spacing={2}>
                        {favorites.map((fav) => (
                            <Paper
                                key={fav.id}
                                elevation={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 2,
                                    gap: 2,
                                    '&:hover': {
                                        boxShadow: 5,
                                        cursor: 'pointer',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                <Box display="flex" alignItems="center" onClick={() => navigate(`/crags/${fav.crag.id}`)}>
                                <Avatar
                                    variant="rounded"
                                    src={montainCardThumbnail}
                                    sx={{ width: 60, height: 60 }}
                                />
                                    <Box display="flex" flexDirection="column" justifyContent="flex-start" textAlign="left" ml={2}>
                                    <Typography variant="body2" fontWeight={600}>{fav.crag.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {fav.crag.city}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Altitude : {fav.crag.altitude} m
                                    </Typography>
                                </Box>
                                </Box>
                                <IconButton
                                    onClick={() => handleRemoveFavorite(fav.id)}
                                    aria-label="Retirer des favoris"
                                    sx={{color:"red"}}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                            </Paper>
                        ))}
                    </Stack>
                )}
            </Container>
        </Pages>
    );
};

export default FavoriteCrags;
