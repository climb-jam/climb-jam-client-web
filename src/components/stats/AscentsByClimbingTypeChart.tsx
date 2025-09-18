import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Typography} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
    ascentsByClimbingType: Record<string, number>;
}

const climbingTypeList = [
    "VOIE",
    "BLOC",
    "GRANDE_VOIE",
    "TRADITIONNELLE",
    "DEEP_WATER",
    "VIA_FERRATA",
];

const climbingTypeLabels: Record<string, string> = {
    VOIE: "Voie",
    BLOC: "Bloc",
    GRANDE_VOIE: "Grande Voie",
    TRADITIONNELLE: "Traditionnelle",
    DEEP_WATER: "Deep Water",
    VIA_FERRATA: "Via Ferrata",
};

const climbingTypeColors: Record<string, string> = {
    VOIE: "#36A2EBFF",
    BLOC: "#FFCD56FF",
    GRANDE_VOIE: "#FF6384FF",
    TRADITIONNELLE: "#FF9F40FF",
    DEEP_WATER: "#4BC0C0FF",
    VIA_FERRATA: "#9966FFFF",
};


const AscentsByClimbingTypeChart: React.FC<Props> = ({ ascentsByClimbingType }) => {

    const chartData = {
        labels: climbingTypeList.map((type) => climbingTypeLabels[type]),
        datasets: [
            {
                label: "nombre ",
                data: climbingTypeList.map((type) => ascentsByClimbingType[type]),
                backgroundColor: climbingTypeList.map((type) => climbingTypeColors[type] || "#ffffff"),
                hoverOffset: 4
            },
        ],
    };

    return (
        <>
            <Typography variant="h6">Type d'escalade</Typography>
            <Doughnut data={chartData} />
        </>
    );
};

export default AscentsByClimbingTypeChart;