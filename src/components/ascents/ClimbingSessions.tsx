import {useEffect, useState} from 'react';
import {Container, Typography, Stack, CircularProgress} from '@mui/material';
import SessionCard from './SessionCard.tsx';
import {AuthContext} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router";
import {getMyAscents} from "../../api/ascentApi.ts";
import type {Ascent} from "../../@types/ascent.type.ts";

const ClimbingSessions = () => {
    const { user } = AuthContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    // Sessions grouped by Ascents
    const [sessions, setSessions] = useState<Map<number, Ascent[]>>(new Map());

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }
        getMyAscents()
            .then((data) => {
                // Group Ascents by Session
                const groupedSessions = new Map<number, Ascent[]>();
                data.forEach((ascent) => {
                    if (!groupedSessions.has(ascent.session.id)) {
                        groupedSessions.set(ascent.session.id, []);
                    }
                    // Add Ascent to the correct Session
                    groupedSessions.get(ascent.session.id)?.push(ascent);
                });
                setSessions(groupedSessions);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des ascensions", error);
                navigate("/login");
            })
            .finally(() => setLoading(false));
    }, [user, navigate]);

    if (loading) return <CircularProgress />;

    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 6}}>
            <Typography variant="h4" gutterBottom>
                Mes sessions d'escalade
            </Typography>

            {sessions.size === 0 ? (
                <Typography>Aucune session trouvée.</Typography>
            ) : (
                <Stack spacing={2}>
                    {/* Sessions grouped by ascents */}
                    {Array.from(sessions.values()).map((ascentsForSession, index) => (
                        <SessionCard key={index} session={ascentsForSession[0].session} ascents={ascentsForSession}/>
                    ))}
                </Stack>
            )}
        </Container>
    );
};

export default ClimbingSessions;