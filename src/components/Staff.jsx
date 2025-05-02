import React from 'react';
import './Staff.css';

const Staff = () => {
  // Data for the table
  const tableData = [
    { name: '2024', Total: 1200, Active: 1000, Inactive: 200, Rate: '83.3%' },
    { name: '2023', Total: 1250, Active: 1050, Inactive: 200, Rate: '84.0%' },
    { name: '2022', Total: 1300, Active: 1100, Inactive: 200, Rate: '84.6%' },
    { name: '2021', Total: 1350, Active: 1150, Inactive: 200, Rate: '85.2%' },
    { name: '2020', Total: 1400, Active: 1200, Inactive: 200, Rate: '85.7%' },
    { name: '2019', Total: 1450, Active: 1250, Inactive: 200, Rate: '86.2%' },
    { name: '2018', Total: 1500, Active: 1300, Inactive: 200, Rate: '86.7%' },
    { name: '2017', Total: 1550, Active: 1350, Inactive: 200, Rate: '87.1%' },
    { name: '2016', Total: 1600, Active: 1400, Inactive: 200, Rate: '87.5%' },
    { name: '2015', Total: 1650, Active: 1450, Inactive: 200, Rate: '87.9%' },
  ];

  const fontwa = {
    fontSize: '20px', // You can adjust the size as needed
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Staff Recruitment</h1>
      </header>

      <div className="metrics1">
        <div className="metric1">
          <h3>Open Positions</h3>
          <p style={fontwa}>16</p>
        </div>
        <div className="metric1">
          <h3>Applicants</h3>
          <p style={fontwa}>45</p>
        </div>
        <div className="metric1">
          <h3>Interviews soon</h3>
          <p style={fontwa}>25</p>
        </div>
        <div className="metric1">
          <h3>Offers Made</h3>
          <p style={fontwa}>8</p>
        </div>
      </div>

      <div className="table-recruiters-container">
        <div className="table-container">
          <h3 style={{ marginTop: '0' }}>Staff History</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Total Staff</th>
                  <th>Active Staff</th>
                  <th>Inactive Staff</th>
                  <th>Active Rate</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.Total}</td>
                    <td>{row.Active}</td>
                    <td>{row.Inactive}</td>
                    <td>{row.Rate}</td>
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

export default Staff;
