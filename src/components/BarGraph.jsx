import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, );

const BarGraph = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default BarGraph;
