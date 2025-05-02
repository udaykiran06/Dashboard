import React from 'react';
import './Assessments.css';
import MultilineChart from './MultilineChart';
import BarGraph from './BarGraph';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Multiline Chart Data (No changes here)
const barData1 = [
  { name: 'Scheduled', value: 40 },
  { name: 'Conducted', value: 50 },
  { name: 'Evaluated', value: 45 },
];

const multiLineData = {
  labels: ["Period 1", "Period 2", "Period 3", "Period 4"],
  datasets: [
    {
      label: "Computer Science",
      data: [75, 178, 82, 85],
      borderColor: "#2563eb",
      tension: 0.4,
      fill: false
    },
    {
      label: "Mathematics",
      data: [70, 114, 76, 80],
      borderColor: "#3b82f6",
      tension: 0.4,
      fill: false
    },
    {
      label: "Physics",
      data: [65, 157, 70, 72],
      borderColor: "#60a5fa",
      tension: 0.4,
      fill: false
    },
    {
      label: "Chemistry",
      data: [68, 369, 71, 73],
      borderColor: "#93c5fd",
      tension: 0.4,
      fill: false
    },
    {
      label: "History",
      data: [62, 563, 64, 66],
      borderColor: "#bfdbfe",
      tension: 0.4,
      fill: false
    }
  ]
};

const multiLineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        color: '#000'
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#eee"
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  elements: {
    point: {
      radius: 0
    }
  }
};

// Dynamic color generation based on value
const values = [300, 200, 160, 90];
const maxValue = Math.max(...values);

const getColorFromValue = (value, maxValue) => {
  const alpha = (value / maxValue).toFixed(2); // range 0 to 1
  return `rgba(59, 130, 246, ${alpha})`; // blue with dynamic transparency
};

const dynamicColors = values.map(value => getColorFromValue(value, maxValue));

// Bar Graph Data
const assessmentPerformanceData = {
  labels: ['Exceeds Expectations', 'Meets Expectations', 'Needs Improvement', 'Unsatisfactory'],
  datasets: [
    {
      label: 'Assessment Performance',
      data: values,
      backgroundColor: dynamicColors,
      borderRadius: 5,
      barThickness: 27,
    },
  ],
};

const assessmentPerformanceOptions = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      ticks: {
        font: {
          size: 14,
        },
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};

// Pie Chart Data
const failRateData = [
  { name: 'Computer Science', value: 400 },
  { name: 'Mathematics', value: 300 },
  { name: 'Physics', value: 200 },
  { name: 'Chemistry', value: 250 },
 
];

// Blue color palette for the pie chart
const BLUE_COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#e0e7ff'];

const renderCustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: BLUE_COLORS[index % BLUE_COLORS.length], marginRight: '10px' }}></span>
          <span style={{ color: '#000', fontSize: '14px' }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const Assessments = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Examinations & Assessments</h1>
      </header>

      {/* Metrics Section */}
      <div className="metrics">
        <div className="metricassess"><h3>Exams Conducted</h3><p>125</p></div>
        <div className="metricassess"><h3>Students Assessed</h3><p>3840</p></div>
        <div className="metricassess"><h3>Avg Exam Score</h3><p>72</p></div>
        <div className="metricassess"><h3>Pass Rate</h3><p>88.9%</p></div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart">
          <h3>Examinations Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4A90E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Average Scores By Department</h3>
          <MultilineChart data={multiLineData} options={multiLineOptions} />
        </div>
      </div>

      <div className="charts1">
        <div className="chart">
          <h3>Fail Rate By Course</h3>
          <ResponsiveContainer width="100%" height={260} >
            <PieChart>
              <Pie
                data={failRateData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {failRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend content={renderCustomizedLegend} verticalAlign="bottom" height={100} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart1">
          <h3>Assessment Performance</h3>
          <BarGraph data={assessmentPerformanceData} options={assessmentPerformanceOptions} />
        </div>
      </div>
    </div>
  );
};

export default Assessments;
