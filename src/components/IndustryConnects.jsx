import React from 'react';
import './IndustryConnects.css';
import PlacementChart from './PlacementChart';
import FunnelChart from './FunnelChart';
import BarGraph from './BarGraph';
import {
  FaUserGraduate,
  FaFileAlt,
  FaBriefcase,
  FaIndustry,
  FaLaptop,
  FaUsers,
  FaChartBar,
  FaClipboardCheck,
  FaUserTie,
  FaPhone,
  FaClipboardList
} from 'react-icons/fa';

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Placement Rate",
      data: [140, 55, 60, 75, 90, 130, 140, 200, 230, 200, 123, 45],
      borderColor: "rgba(0, 123, 255, 1)",
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 0,
      fill: 'start',
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "rgba(0, 0, 0, 0.6)",
        font: {
          size: 12,
          family: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        },
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    x: {
      ticks: {
        color: "rgba(0, 0, 0, 0.6)",
        font: {
          size: 12,
          family: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        },
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
    },
  },
};

const participationData = {
  labels: ['Events', 'Joint Initiatives', 'Faculty Outreach'],
  datasets: [
    {
      label: 'Participations',
      data: [950, 400, 150],
      backgroundColor: '#3B82F6', // Tailwind's blue-500
      borderRadius: 10,
      barThickness: 27,
    },
  ],
};

const participationOptions = {
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

const fontwa = {
  fontSize: '20px', // You can adjust the size as needed
};

const recentTieUpsData = [
  { name: 'Company A', date: '04/20/2025', status: 'Active' },
  { name: 'Company B', date: '03/15/2025', status: 'Inactive' },
  { name: 'Company C', date: '02/28/2025', status: 'Active' },
  { name: 'Company D', date: '01/10/2025', status: 'Inactive' },
  { name: 'Company A', date: '04/20/2025', status: 'Active' },
  { name: 'Company B', date: '03/15/2025', status: 'Inactive' },
  { name: 'Company C', date: '02/28/2025', status: 'Active' },
  { name: 'Company D', date: '01/10/2025', status: 'Inactive' },
];

const upcomingEventsData = [
  { name: 'Joint Initiative 1', date: '05/01/2025', participation: 120 },
  { name: 'Joint Initiative 2', date: '05/15/2025', participation: 80 },
  { name: 'Joint Initiative 3', date: '06/10/2025', participation: 150 },
  { name: 'Joint Initiative 4', date: '06/25/2025', participation: 200 },
  { name: 'Joint Initiative 1', date: '05/01/2025', participation: 120 },
  { name: 'Joint Initiative 2', date: '05/15/2025', participation: 80 },
  { name: 'Joint Initiative 3', date: '06/10/2025', participation: 150 },
  { name: 'Joint Initiative 4', date: '06/25/2025', participation: 200 },
];

const IndustryConnects = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Industry Connects</h1>
      </header>

      {/* Metrics Section */}
      <div className="metrics">
        <div className="metric">
          <h3>Active Tie-ups</h3>
          <p style={fontwa}>25</p>
        </div>
        <div className="metric">
          <h3>Joint Initiatives</h3>
          <p style={fontwa}>10</p>
        </div>
        <div className="metric">
          <h3>Events Last Year</h3>
          <p style={fontwa}>15</p>
        </div>
        <div className="metric">
          <h3>Participations</h3>
          <p style={fontwa}>1200</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart">
          <h3>Active Tie-ups By Month</h3>
          <PlacementChart data={lineData} options={chartOptions} />
        </div>

        <div className="chart">
          <h3>Participations By Category</h3>
          <BarGraph data={participationData} options={participationOptions} />
        </div>
      </div>

      <div className="table-recruiters-container">
        <div className="table-container">
          <h3 style={{ marginTop: '0' }}>Recent Tie-ups</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTieUpsData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.date}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-container">
          <h3 style={{ marginTop: '0' }}>Upcoming Events</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Participation</th>
                </tr>
              </thead>
              <tbody>
                {upcomingEventsData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.date}</td>
                    <td>{row.participation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryConnects;
