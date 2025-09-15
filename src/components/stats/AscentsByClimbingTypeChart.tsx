import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Typography} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
    ascentsByClimbingType: Record<string, number>;
}



const AscentsByClimbingTypeChart: React.FC<Props> = ({ ascentsByClimbingType }) => {

    const chartData = {
        labels: Object.keys(ascentsByClimbingType),
        datasets: [
            {
                label: "nombre ",
                data: Object.values(ascentsByClimbingType),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56",
                    "#4BC0C0", "#9966FF", "#FF9F40"],
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