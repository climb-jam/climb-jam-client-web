import React, {useState} from 'react';
import {Box, Typography, Paper, Stack, Collapse} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocationPinIcon from '@mui/icons-material/LocationPin';
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
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} >
                <Typography variant="h6">
                    Session du {new Date(session.date).toLocaleDateString("fr-FR")}
                </Typography>
            </Box>

            <Typography variant="subtitle2" gutterBottom>
                Mes croix
            </Typography>

            {/* Ascents */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Stack spacing={2} mb={3}>
                {ascents.map((ascent) => (
                    <Box display="flex" alignItems="center" gap={2} key={ascent.id}>
                        <GradeBadge grade={ascent.route.grade} />
                        <Box>
                            <Typography>{ascent.route.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {ascent.tries} essai{ascent.tries > 1 ? "s" : ""} • {ascent.style}
                            </Typography>

                            {/* Comment for each Ascent */}
                            {ascent.comment && (
                                <Box mt={2} display="flex" alignItems="center" gap={1} p={1} bgcolor="#F3F6F3FF" borderRadius={1}>
                                    <ChatBubbleOutlineIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                                    <Typography variant="body2" color="textSecondary">
                                        {ascent.comment}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Stack>
            </Collapse>

            {/* Location (crag) */}
            <Typography variant="subtitle2" mb={1}>
                <LocationPinIcon fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                Lieu grimpé
            </Typography>

            <LocationCard location={session.crag} />
        </Paper>
    );
};

export default SessionCard;