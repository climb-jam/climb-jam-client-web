import React from "react";
import {Line} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Typography } from "@mui/material";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

type Props = {
    ascentsByMonth: Record<string, number>;
};

const monthList = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const monthLabels: Record<string, string> = {
    JANUARY: "Janvier",
    FEBRUARY: "Février",
    MARCH: "Mars",
    APRIL: "Avril",
    MAY: "Mai",
    JUNE: "Juin",
    JULY: "Juillet",
    AUGUST: "Août",
    SEPTEMBER: "Septembre",
    OCTOBER: "Octobre",
    NOVEMBER: "Novembre",
    DECEMBER: "Décembre",
};

const AscentsByMonthChart: React.FC<Props> = ({ascentsByMonth}) => {

    const chartData = {
        labels: monthList.map((month) => monthLabels[month]),
        datasets: [
            {
                label: "nombre ",
                data: monthList.map((month) => ascentsByMonth[month]),
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgb(75, 192, 192)",
                tension: 0.3,
                fill: false,
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
            <Typography variant="h6">Croix par mois</Typography>
            <Line data={chartData} options={options} />
        </>
    );
};

export default AscentsByMonthChart;