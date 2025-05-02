"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "./PlacementChart.css"; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PlacementChart = ({ data, options }) => {
  return (
    <section className="chart-container">
      <div className="chart-content">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default PlacementChart;
