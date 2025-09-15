import React from 'react';
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import {Typography} from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
    ascentsByGrade: Record<string, number>;
}

// Grade list in order
const gradeList = [
    "1a","1b","1c","2a","2b","2c","3a","3b","3c","4a","4b","4c",
    "5a","5b","5c","6a","6b","6c","7a","7b","7c","8a","8b","8c","9a","9b","9c"
];

// Colors for each grade
const gradeColors: Record<string, string> = {
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

const AscentsByGradeChart: React.FC<Props> = ({ ascentsByGrade }) => {

    const chartData = {
        labels: gradeList,
        datasets: [
            {
                label: "nombre ",
                data: gradeList.map((grade) => ascentsByGrade[grade] || 0),
                backgroundColor: gradeList.map((grade) => gradeColors[grade] || "#999999"),
                hoverOffset: 4,
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,


            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0
                }
            }
        }
    };

    return (
        <>
            <Typography variant="h6">Croix par cotation</Typography>
            <Bar data={chartData} options={options} />
        </>
    );
};

export default AscentsByGradeChart;