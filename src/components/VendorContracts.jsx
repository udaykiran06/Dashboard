import React from 'react';
import './VendorContracts.css';

const VendorContracts = () => {
  const fontwa = {
    fontSize: '20px',
  };

  const contractsData = [
    {
      name: 'Support Agreement',
      type: 'Software',
      vendor: 'Tech Solutions',
      startDate: '02/15/2023',
      endDate: '01/14/2024',
      status: 'Active',
    },
    {
      name: 'Service Agreement',
      type: 'Maintenance',
      vendor: 'Office Supplies Inc.',
      startDate: '02/01/2023',
      endDate: '01/31/2024',
      status: 'Active',
    },
    {
      name: 'Consulting Services',
      type: 'Consulting',
      vendor: 'Business Partners',
      startDate: '03/10/2023',
      endDate: 'Active',
      status: 'Active',
    },
    {
      name: 'Support Agreement',
      type: 'Software',
      vendor: 'Globel Tech',
      startDate: '04/05/2023',
      endDate: 'Expiring Soon',
      status: 'Expiring Soon',
    },
    {
      name: 'Software License',
      type: 'Hardware',
      vendor: 'Hardware World',
      startDate: '03/20/2023',
      endDate: 'Expired',
      status: 'Expired',
    },
    {
      name: 'Service Agreement',
      type: 'Maintenance',
      vendor: 'Facility Services',
      startDate: '06/02/2023',
      endDate: 'Expired',
      status: 'Expired',
    },
    {
      name: 'Service Agreement',
      type: 'Maintenance',
      vendor: 'Facility Services',
      startDate: '05/01/2024',
      endDate: 'Expired',
      status: 'Expired',
    },
  ];

  const getStatusClass = (status) => {
    if (status === 'Active') return 'status-badge active';
    if (status === 'Expiring Soon') return 'status-badge expiring';
    if (status === 'Expired') return 'status-badge expired';
    return '';
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Vendor Contracts Overview</h1>
        <button className="add-contract-button">Add Contract</button>
      </header>
      <div className="filter-barvendor">
        <div className="filter-itemvendor">
          <label>Contract Type</label>
          <select>
            <option>All</option>
            <option>Acv</option>
            <option>TCV</option>
            <option>Monthly</option>
          </select>
        </div>

        <div className="filter-itemvendor">
          <label>Status</label>
          <select>
            <option>All</option>
            <option>Active</option>
            <option>Expired</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="filter-itemvendor">
          <label>Vendor</label>
          <input type="text" placeholder="Search contracts" />
        </div>
      </div>
      <div className="metrics5">
        <div className="metric5">
          <h3>Total Contracts</h3>
          <p style={fontwa}>72</p>
        </div>
        <div className="metric5">
          <h3>Active Contracts</h3>
          <p style={fontwa}>5</p>
        </div>
        <div className="metric5">
          <h3>Expiring Soon</h3>
          <p style={fontwa}>8</p>
        </div>
        <div className="metric5">
          <h3>Expired</h3>
          <p style={fontwa}>3</p>
        </div>
      </div>

      
      <div className="contracts-table-container">
      <h2>Contracts</h2>
      <table className="contracts-table">
        <thead>
          <tr>
            <th>Contract Name</th>
            <th>Type</th>
            <th>Vendor</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contractsData.map((contract, index) => (
            <tr key={index}>
              <td>{contract.name}</td>
              <td>{contract.type}</td>
              <td>{contract.vendor}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td><span className={getStatusClass(contract.status)}>{contract.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default VendorContracts;