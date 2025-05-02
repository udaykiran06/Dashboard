import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Assets.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const assetsData = [
  { name: 'Laptop Pro X', category: 'IT Equipment', status: 'Allocated', department: 'Computer Scnc' },
  { name: '3D Printer Model A', category: 'IT Equipment', status: 'Under Maintenance', department: 'Physics' },
  { name: 'Network Switch', category: 'Lab Equipment', status: 'In Stock', department: 'Biology' },
  { name: 'Microscope', category: 'Allocated', status: 'Allocated', department: 'Computer Administration' },
  { name: 'Workstation Y', category: 'Allocated', status: 'In Stock', department: 'Engineering' },
  { name: 'Router 2', category: 'Allocated', status: 'Allocated', department: 'Engineering' },
  { name: 'Projector Q', category: 'Allocated', status: 'In Stock', department: 'Chemistry' },
  { name: 'VR Headset', category: 'Allocated', status: 'Allocated', department: 'Chemistry' },
  { name: 'Chemistry Lab\'able', category: 'In Stock', status: 'In Stock', department: 'Chemistry' },
  { name: 'Server Rack', category: 'In Stock', status: 'In Stock', department: 'Chemistry' },
];

const purchaseData = [
  { purchaseDate: '02/10/2021', purchase: '02/10/2023' },
  { purchaseDate: '07/03/2021', purchase: '01/05/2023' },
  { purchaseDate: '01/05/2023', purchase: '03/04/2023' },
  { purchaseDate: '09/01/2023', purchase: '01/05/2023' },
  { purchaseDate: '01/05/2023', purchase: '01/05/2023' },
];

const Assets = () => {
  const donutChartData = {
    labels: ['Allocated', 'Under Maintenance', 'Warranty Expiring'],
    datasets: [
      {
        data: [8, 12, 5],
        backgroundColor: ['#0073E6', '#4A5666', '#4CAF50'],
        hoverOffset: 20,
      },
    ],
  };

  const donutChartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 10 },
        },
      },
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false, // Ensure the chart adjusts to the container size
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Assets</h1>
        <div className="dropdowns">
          <select className="dropdown">
            <option>Category</option>
            {/* Add options for categories */}
          </select>
          <select className="dropdown">
            <option>Status</option>
            {/* Add options for status */}
          </select>
        </div>
      </header>

      <div className="metrics3">
        <div className="metric3" style={{ backgroundColor: '#0073E6' }}>
          <h3>Total Assets</h3>
          <p>1,250</p>
        </div>
        <div className="metric3" style={{ backgroundColor: '#1F262F' }}>
          <h3>Allocated Assets</h3>
          <p>900</p>
        </div>
        <div className="metric3" style={{ backgroundColor: '#4CAF50' }}>
          <h3>Under Maintenance</h3>
          <p>75</p>
        </div>
        <div className="metric3" style={{ backgroundColor: '#FF5733' }}>
          <h3>Warranty Expiring</h3>
          <p>120</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="button-container">
          <button className="add-button">✚ Add Asset</button>
        </div>

        <div className="main-content-wrapper">
          <div className="table-container1">
            <div className="table-wrapper1">
              <h3>Assets Overview</h3>
              <table>
                <thead>
                  <tr>
                    <th>Asset Name</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {assetsData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td>{row.category}</td>
                      <td>{row.status}</td>
                      <td>{row.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="right-panel">
            <div className="chart-container">
              <h3>Maintenance Status</h3>
              <div className="chart-wrapper">
                <Doughnut data={donutChartData} options={donutChartOptions} />
              </div>
            </div>

            <div className="additional-container">
              <h3>Additional Information</h3>
              <div className="table-wrapper2">
                <table>
                  <thead>
                    <tr>
                      <th>Purchase Date</th>
                      <th>Purchase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.purchaseDate}</td>
                        <td>{row.purchase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
