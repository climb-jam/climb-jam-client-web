import React from "react";
import { Box } from "@mui/material";

type GradeProps = {
    grade: string;
}

const getColor = (grade: string) => {
    const gradeColors: { [key: string]: string } = {
        "1a": "#FF00BB","1b": "#FF00BB","1c": "#FF00BB",
        "2a": "#FF00BB","2b": "#FF00BB","2c": "#FF00BB",
        "3a": "#FBFFAB","3b": "#F8FF6A","3c": "#FFCC00",
        "4a": "#FFB77D","4b": "#FF9641","4c": "#FF7300",
        "5a": "#ACFFA0","5b": "#4EFF51","5c": "#40AE00",
        "6a": "#91ADFC","6b": "#4E54FF","6c": "#0006AE",
        "7a": "#BF91FC","7b": "#CA4EFF","7c": "#9400AE",
        "8a": "#FC9192","8b": "#FF4E51","8c": "#AE0003",
        "9a": "#A3A3A3","9b": "#5F5F61","9c": "#393939",
    };
    return gradeColors[grade]
};

const GradeBadge: React.FC<GradeProps> = ({ grade }) => {
    const color = getColor(grade);

    return (
        <Box
            sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                bgcolor: color,
                color: "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 500,
            }}
        >
            {grade}
        </Box>
    );
};

export default GradeBadge;