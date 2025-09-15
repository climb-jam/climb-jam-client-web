import Pages from "../../components/layout/Pages";
import {useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.tsx";
import type {UserStats} from "../../@types/userStats.type.ts";
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement} from "chart.js";
import axios from "axios";
import AscentsByClimbingTypeChart from "../../components/stats/AscentsByClimbingTypeChart.tsx";
import AscentsByGradeChart from "../../components/stats/AscentsByGradeChart.tsx";
import AscentsByMonthChart from "../../components/stats/AscentsByMonthChart.tsx";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Stats = () => {

    const {user} = AuthContext();
    const [stats, setStats] = useState<UserStats | null>(null);

    useEffect(() => {
        if (user) {
            axios
                .get<UserStats>(`http://localhost:8080/users/${user.id}/stats`)
                .then((response) => setStats(response.data))
                .catch((error) => console.error(error));
        }
    }, [user]);

    if (!user) {
        return <Typography>Connecte-toi pour voir tes statistiques.</Typography>;
    }

    if (!stats) return <p>Chargement...</p>;

    return (
        <Pages title={"Statistiques"}>

            <Container maxWidth="lg" sx={{mt: 4}}>
                <Typography variant="h4" gutterBottom>
                    Mes Statistiques
                </Typography>




                {/* GENERAL STATS */}
                <Grid container spacing={3} sx={{mb: 3}}>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Total Sessions</Typography>
                                <Typography variant="h4">{stats.totalSessions}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Total Ascensions</Typography>
                                <Typography variant="h4">{stats.totalAscents}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Mètres Grimpés</Typography>
                                <Typography variant="h4">{stats.totalMetersClimbed} m</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* GRAPHS */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <AscentsByClimbingTypeChart ascentsByClimbingType={stats.ascentsByClimbingType}/>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <AscentsByGradeChart ascentsByGrade={stats.ascentsByGrade}/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardContent>
                                        <AscentsByMonthChart ascentsByMonth={stats.ascentsByMonth}/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Pages>
    );
};

export default Stats;
