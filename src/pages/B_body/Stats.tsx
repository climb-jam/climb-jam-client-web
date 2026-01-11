import Pages from "../../components/layout/Pages";
import {useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.tsx";
import type {UserStats} from "../../@types/userStats.type.ts";
import {Card, CardContent, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import AscentsByClimbingTypeChart from "../../components/stats/AscentsByClimbingTypeChart.tsx";
import AscentsByGradeChart from "../../components/stats/AscentsByGradeChart.tsx";
import AscentsByMonthChart from "../../components/stats/AscentsByMonthChart.tsx";
import {fetchMyStats} from "../../api/userStats.ts";
import {useNavigate} from "react-router";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Stats = () => {
    const {user} = AuthContext();
    const navigate = useNavigate();
    const [stats, setStats] = useState<UserStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate("/login")
            return;
        }
        fetchMyStats()
            .then((data) => setStats(data))
            .catch((error) => {
                console.error("Erreur lors de la récupération des ascensions", error);
                navigate("/login");
            })
            .finally(() => setLoading(false));
    }, [user, navigate]);

    if (loading) return <CircularProgress/>;

    const hasData =
        stats!.totalSessions > 0 ||
        stats!.totalAscents > 0 ||
        stats!.totalMetersClimbed > 0;

    return (
        <Pages title={"Statistiques - ClimbJAM"}>
            <Container maxWidth="lg" sx={{mt: 4, mb: 6}}>
                <Typography variant="h4" gutterBottom>
                    Mes statistiques
                </Typography>

                <Grid container spacing={3} sx={{mt: 3, mb: 3}} justifyContent={"center"} alignItems={"center"}>
                    {/* TOTAL STATS */}
                    <Grid size={{xs:12, md:3}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Total Sessions</Typography>
                                <Typography variant="h4">{stats!.totalSessions || 0}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{xs: 12, md: 3}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Total Croix</Typography>
                                <Typography variant="h4">{stats!.totalAscents || 0}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{xs: 12, md: 3}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Mètres Grimpés</Typography>
                                <Typography variant="h4">{stats!.totalMetersClimbed || 0} m</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* GRAPHIQUES */}
                    <Grid container spacing={3} sx={{mt: 2}} justifyContent={"center"} alignItems={"center"}>
                        {!hasData ? (
                                <Typography variant="h6" align="center" mt="30px">
                                    Pas encore de statistiques
                                </Typography>
                        ) : (
                            <>
                                <Grid size={{xs: 12, md: 6}}>
                                    <Card>
                                        <CardContent>
                                            <AscentsByClimbingTypeChart
                                                ascentsByClimbingType={stats!.ascentsByClimbingType}/>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid size={{xs: 12, md: 6}}>
                                    <Card>
                                        <CardContent>
                                            <AscentsByGradeChart ascentsByGrade={stats!.ascentsByGrade}/>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid size={{xs: 12, md: 6}}>
                                    <Card>
                                        <CardContent>
                                            <AscentsByMonthChart ascentsByMonth={stats!.ascentsByMonth}/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Pages>
    );
};

export default Stats;