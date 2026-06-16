import Pages from "../../components/layout/Pages";
import {Avatar, Box, CircularProgress, Container, IconButton, Paper, Typography} from "@mui/material";

import Stack from "@mui/material/Stack";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {deleteFavoriteCrag, getMyFavoriteCrags} from "../../api/favorite-crag-api.ts";

import montainCardThumbnail from "../../assets/mountain_card.webp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type {Crag} from "../../@types/crag.type.ts";

const FavoriteCrags = () => {

    const {user} = AuthContext();
    const navigate = useNavigate();

    const [favorites, setFavorites] = useState<Crag[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        getMyFavoriteCrags()
            .then(setFavorites)
            .catch((error) => {
                console.error("Erreur lors de la récupération des spots favoris", error);
            })
            .finally(() => setLoading(false));

    }, [user, navigate]);

    const handleRemoveFavorite = async (cragId: number) => {
        try {
            await deleteFavoriteCrag(cragId);

            setFavorites(prev =>
                prev.filter(favorite => favorite.id !== cragId)
            );
        } catch (error) {
            console.error("Erreur lors de la suppression du favori", error);
        }
    };

    if (loading) return <CircularProgress/>;

    return (
        <Pages title={"Mes Spots Favoris - ClimbJAM"}>

            <Container maxWidth="lg" sx={{mt: 4, mb: 6}}>

                <Typography variant="h4" gutterBottom>
                    Mes spots favoris
                </Typography>

                {favorites.length === 0 ? (
                    <Typography>
                        Aucun spot d'escalade en favori.
                    </Typography>
                ) : (
                    <Stack spacing={2}>

                        {favorites.map((favorite) => (
                            <Paper
                                key={favorite.id}
                                elevation={2}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    p: 2,
                                    gap: 2,
                                    "&:hover": {
                                        boxShadow: 5,
                                        cursor: "pointer",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    flex={1}
                                    onClick={() => navigate(`/crags/${favorite.id}`)}
                                >
                                    <Avatar
                                        variant="rounded"
                                        src={montainCardThumbnail}
                                        sx={{width: 60, height: 60}}
                                    />

                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        textAlign="left"
                                        ml={2}
                                    >
                                        <Typography variant="body2" fontWeight={600}>
                                            {favorite.name}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {favorite.city}
                                        </Typography>

                                        <Typography variant="caption" color="text.secondary">
                                            Altitude : {favorite.altitude} m
                                        </Typography>
                                    </Box>
                                </Box>

                                <IconButton
                                    onClick={() => handleRemoveFavorite(favorite.id)}
                                    aria-label="Retirer des favoris"
                                    sx={{color: "red"}}
                                >
                                    <FavoriteIcon/>
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