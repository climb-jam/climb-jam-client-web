import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import type {Crag} from "../../@types/crag.type.ts";
import montainCardThumbnail from "../../assets/mountain_card.png";

type LocationProps = {
    location: Crag;
}

const LocationCard: React.FC<LocationProps> = ({ location }) => {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Avatar
                variant="rounded"
                src={montainCardThumbnail}
                sx={{ width: 48, height: 48 }}
                alt={location.name}
            />
            <Box>
                <Typography variant="body2" fontWeight={600}>
                    {location.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {location.postalCode}, {location.city}
                </Typography>
            </Box>
        </Box>
    );
};

export default LocationCard;