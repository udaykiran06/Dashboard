import React from 'react';
import './Placements.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Placements = () => {
  // Data for DonutChart
  const rawDonutData = [
    { name: 'IT', value: 400 },
    { name: 'Finance', value: 200 },
    { name: 'Education', value: 150 },
    { name: 'Other', value: 100 },
  ];

  const totalValue = rawDonutData.reduce((sum, entry) => sum + entry.value, 0);
  const donutData = rawDonutData.map(entry => ({
    name: entry.name,
    value: (entry.value / totalValue) * 100,
  }));

  const COLORS = ['#3A5DFF', '#44C3C4', '#9275E6', '#49BFC6'];

  // Data for BarGraph1
  const barData1 = [
    { name: 'Eligible', value: 1200 },
    { name: 'Applied', value: 1000 },
    { name: 'Placed', value: 850 },
  ];

  // Data for BarGraph2
  const barData2 = [
    { name: '2024', Eligible: 1200, Placed: 850, Rate: '70.8%', Package: '₹ 6.5L' },
    { name: '2023', Eligible: 1288, Placed: 910, Rate: '70.6%', Package: '₹ 7.0L' },
    { name: '2022', Eligible: 1340, Placed: 940, Rate: '70.1%', Package: '₹ 6.8L' },
    { name: '2021', Eligible: 1380, Placed: 970, Rate: '70.3%', Package: '₹ 6.9L' },
    { name: '2020', Eligible: 1580, Placed: 1120, Rate: '70.9%', Package: '₹ 6.5L' },
    { name: '2019', Eligible: 1450, Placed: 1020, Rate: '70.3%', Package: '₹ 6.2L' },
    { name: '2018', Eligible: 1390, Placed: 980, Rate: '70.5%', Package: '₹ 6.0L' },
    { name: '2017', Eligible: 1300, Placed: 900, Rate: '69.2%', Package: '₹ 5.8L' },
    { name: '2016', Eligible: 1250, Placed: 850, Rate: '68.0%', Package: '₹ 5.5L' },
    { name: '2015', Eligible: 1200, Placed: 800, Rate: '66.7%', Package: '₹ 5.0L' },
  ];
  

  const fontwa = {
    fontSize: '20px', // You can adjust the size as needed
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Placements Overview</h1>
      </header>

      <div className="metrics1">
        <div className="metric1">
          <h3>Total Students</h3>
          <p style={fontwa}>1,200</p>
        </div>
        <div className="metric1">
          <h3>Placed Students</h3>
          <p style={fontwa}>850</p>
        </div>
        <div className="metric1">
          <h3>Placement Rate</h3>
          <p style={fontwa}>70.8%</p>
        </div>
        <div className="metric1">
          <h3>Average Package</h3>
          <p style={fontwa}>₹ 6.5L</p>
        </div>
      </div>

      <div className="charts1">
        <div className="chart1">
          <h3 style={{ marginBottom: '20px' }}>Placement Statistics</h3>
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

        <div className="chart1">
          <h3>Students Placed by Sector</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table-recruiters-container">
        <div className="recruiters-container">
          <h3 style={{ marginTop: '0' }}>Top Recruiters</h3>
          <ul>
            <li>• Infosys</li>
            <li>• TCS</li>
            <li>• Wipro</li>
          </ul>
        </div>

        <div className="table-container">
          <h3 style={{ marginTop: '0' }}>Placement History</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Eligible Studs</th>
                  <th>Placed Students</th>
                  <th>Placement Rate</th>
                  <th>Average Package</th>
                </tr>
              </thead>
              <tbody>
                {barData2.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.Eligible}</td>
                    <td>{row.Placed}</td>
                    <td>{row.Rate}</td>
                    <td>{row.Package}</td>
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

export default Placements;
