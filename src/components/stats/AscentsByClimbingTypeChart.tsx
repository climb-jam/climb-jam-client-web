import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type {UserStats} from "../../@types/userStats.type.ts";

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
    userStats: UserStats;
}

const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40"
];

const AscentsByClimbingTypeChart: React.FC<Props> = ({ userStats }) => {

    const  { ascentsByClimbingType } = userStats

    const labels = Object.keys(ascentsByClimbingType);
    const data = Object.values(ascentsByClimbingType);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Ascensions par type de grimpe",
                data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 1,
            },
        ],
    };

    return (
        <Doughnut data={chartData} />
    );
};

export default AscentsByClimbingTypeChart;