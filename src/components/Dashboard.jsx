


import React from 'react';
import './Dashboard.css';
import PlacementChart from './PlacementChart';
import FunnelChart from './FunnelChart';
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
      data: [140, 55, 60, 75, 90, 130, 140, 200, 230, 500, 123, 45],
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

// Funnel data with visual gaps inserted
const funnelData = [
  { value: 300, name: 'Applied' },
  { value: 15, name: '', color: 'transparent' },  // Gaps
  { value: 200, name: 'Interviewed' },
  { value: 10, name: '', color: 'transparent' },
  { value: 100, name: 'Offered' },
  { value: 5, name: '', color: 'transparent' },
  { value: 50, name: 'Accepted' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      {/* Metrics Section */}
      <div className="metrics">
        <div className="metricdash">
          <h3>Admissions Today</h3>
          <p>135</p>
        </div>
        <div className="metricdash">
          <h3>Ongoing Interviews</h3>
          <p>8</p>
        </div>
        <div className="metricdash">
          <h3>Active Recruiters</h3>
          <p>12</p>
        </div>
        <div className="metricdash">
          <h3>Open Positions</h3>
          <p>5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart">
          <h3>Placement Rate Over Time</h3>
          <PlacementChart data={lineData} options={chartOptions} />
        </div>

        <div className="chart">
          <h3>Application Funnel</h3>
          <FunnelChart data={funnelData} />
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <a href="/" className="quick-link">
          <FaChartBar />
          <span>Dashboard</span>
        </a>
        <a href="/admissions" className="quick-link">
          <FaUserGraduate />
          <span>Admissions</span>
        </a>
        <a href="/Assessments" className="quick-link">
          <FaFileAlt />
          <span>Assessments</span>
        </a>
        <a href="/Placements" className="quick-link">
          <FaBriefcase />
          <span>Placements</span>
        </a>
        <a href="/DailyPractice" className="quick-link">
          <FaClipboardCheck />
          <span>Daily Practice & Assessments</span>
        </a>
        <a href="/Staff" className="quick-link">
          <FaUserTie />
          <span>Staff Recruitment</span>
        </a>
        <a href="/IndustryConnects" className="quick-link">
          <FaIndustry />
          <span>Industry</span>
          <span>Connects</span>
        </a>
        <a href="/assets" className="quick-link">
          <FaLaptop />
          <span>Assets</span>
        </a>
        <a href="/hrms" className="quick-link">
          <FaUsers />
          <span>HRMS</span>
        </a>
        <a href="/VendorContracts" className="quick-link">
          <FaPhone />
          <span>Vendor Contracts</span>
        </a>
        <a href="/reports" className="quick-link">
          <FaClipboardList />
          <span>Reports</span>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
