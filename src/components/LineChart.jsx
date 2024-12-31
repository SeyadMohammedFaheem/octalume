import React from "react";
import { Line } from "react-chartjs-2";
import UpArrowIcon from '../assets/up-arrow.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const LineChart = () => {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    datasets: [
      {
        label: "Electricity Consumption",
        data: [5, 6, 6.3, 8, 8, 8.5, 9, 7.5, 8.5, 7.5, 8, 7.8],
        borderColor: "rgba(223, 254, 82, 1)", // Gradient green
        backgroundColor: "transparent",
        borderWidth: 1,
        tension: 0.4 // Smooth curve
      },
      {
        label: "Predicted Consumption",
        data: [4.5, 6, 5, 6.5, 7, 9, 8, 7, 7.5, 8.5, 6.5, 7],
        borderColor: "#737373", // Gradient yellow
        backgroundColor: "transparent",
        borderWidth: 1,
        borderDash: [3, 3], // Dashed line
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows control over the height of the chart
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#111111",
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 10,
        },
        cornerRadius: 4,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No grid lines for x-axis
        },
        ticks: {
          color: "#737373", // White ticks
          font: {
            family: "Outfit, sans-serif",
            size: 12,
            weight: "500",
            
          },
        },
      },
      y: {
        grid: {
            display: false, // No grid lines for x-axis
        },
        ticks: {
            display: false, // No grid lines for x-axis
        },
      },
    },
  };

  return (
    <div className="w-full h-44 rounded-lg  flex justify-center items-center">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
