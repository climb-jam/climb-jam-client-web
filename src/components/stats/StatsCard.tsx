import React from 'react';
import {Box, Paper, Typography} from "@mui/material";

type Props = {
    title: string
    value: React.ReactNode
    subtitle?: string
}

const StatsCard = ({title, value, subtitle}: Props) => {
    return (
        <Paper sx={{ p: 2, minWidth: 160 }}>
            <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mt: 1 }}>
                <Typography variant="h5">{value}</Typography>
                {subtitle && <Typography variant="caption" color="text.secondary">{subtitle}</Typography>}
            </Box>
        </Paper>
    );
};

export default StatsCard;