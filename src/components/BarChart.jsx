import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const data = {
    labels: ["Kids Room", "Bedroom", "Living Room"],
    datasets: [
      {
        data: [100, 150, 200],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.height);
          gradient.addColorStop(0, "rgba(0, 255, 0, 0.9)"); // Green gradient
          gradient.addColorStop(1, "rgba(255, 255, 0, 0.9)"); // Yellow gradient
          return [gradient, gradient, gradient];
        },
        borderRadius: 20,
        barPercentage: 0.8, // Increased width of the bar
        categoryPercentage: 1.1, // Reduce space between bars
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        cornerRadius: 8,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove x-axis grid
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        grid: {
          display: false, // No grid lines for y-axis
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
  };

  return (
    <div className="h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
