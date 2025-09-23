import Pages from "../../components/layout/Pages";
import {CircularProgress, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import type {User} from "../../@types/user.type.ts";
import {fetchAllUsersRoleUser} from "../../api/userApi.ts";
import ClimberList from "../../components/social/ClimberList.tsx";

const Social = () => {

    const [climbers, setClimbers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllUsersRoleUser()
            .then(setClimbers)
            .catch((error) => {
                console.error("Erreur lors de la récupération des utilisateurs", error);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <CircularProgress />;

    return (
        <Pages title={"Social"}>

            <Container maxWidth="lg" sx={{mt: 4, mb: 6}}>
                <Typography variant="h4" gutterBottom>
                    Les grimpeurs
                </Typography>

                <ClimberList climbers={climbers}/>
            </Container>
        </Pages>
    );
};

export default Social;