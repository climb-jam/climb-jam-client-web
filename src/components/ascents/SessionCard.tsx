import React, {useState} from 'react';
import {Box, Typography, Paper, Stack, Collapse, Container} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CheckIcon from '@mui/icons-material/Check';
import GradeBadge from './GradeBadge.tsx';
import LocationCard from './LocationCard.tsx';
import type {Session} from "../../@types/session.type.ts";
import type {Ascent} from "../../@types/ascent.type.ts";

type Props = {
    session: Session;
    ascents: Ascent[];
}

const SessionCard: React.FC<Props> = ({ session, ascents }) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded); // Reverse expanded state each clic
    };

    return (
        <Paper
            elevation={2}
            onClick={handleClick}
            sx={{
                p: 2,
                cursor: "pointer",
                '&:hover': {
                    boxShadow: 5,
                    transform: 'translateY(-2px)',
                },
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} gap={2} >
                <Typography variant="h6">
                    Session du {new Date(session.date).toLocaleDateString("fr-FR")}
                </Typography>
            </Box>


            {/* Ascents */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} >
                <Typography variant="subtitle2" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                    <CheckIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                    Mes croix
                </Typography>
                </Box>

                <Stack spacing={2} mb={3}>
                {ascents.map((ascent) => (
                    <Box key={ascent.id}>
                        <GradeBadge grade={ascent.route.grade} />
                        <Box>
                            <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                            <Typography>{ascent.route.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {ascent.tries} essai{ascent.tries > 1 ? "s" : ""} • {ascent.style}
                            </Typography>
                            </Box>

                            {/* Comment for each Ascent */}
                            {ascent.comment && (
                                <Box mt={2} display="flex" textAlign="left"  p={1} bgcolor="background.paper" borderRadius={1}>
                                    <CommentIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {ascent.comment}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Stack>
                {/* Location (crag) */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} >
                <Typography variant="subtitle2" mb={1}>
                    <LocationPinIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                    Lieu grimpé
                </Typography>
                </Box>
            </Collapse>

            <LocationCard location={session.crag} />
        </Paper>
    );
};

export default SessionCard;