import React from 'react';
import './Reports.css'; // create this file for styling

const reportsData = [
  { name: 'Placement Summary', type: 'Placement', date: '04/13/2025', createdBy: 'Admin' },
  { name: 'Course Enrollment Trends', type: 'Admissions', date: '04/11/2025', createdBy: 'Admin' },
  { name: 'Recruiter Engagement Analysis', type: 'Placement', date: '04/10/2025', createdBy: 'admns' },
  { name: 'Assessment Performance', type: 'Examination', date: '04/08/2025', createdBy: 'Admin' },
  { name: 'Assets Inventory', type: 'Assets', date: '04/07/2025', createdBy: 's.patel' },
  { name: 'Industry Event Participation', type: 'Industry Connects', date: '04/05/2025', createdBy: 'Admin' },
  { name: 'Industry Event Participation', type: 'Industry Connects', date: '04/05/2025', createdBy: 'Admin' },
  { name: 'Industry Event Participation', type: 'Industry Connects', date: '04/05/2025', createdBy: 'Admin' },
  { name: 'Industry Event Participation', type: 'Industry Connects', date: '04/05/2025', createdBy: 'Admin' },
  { name: 'Industry Event Participation', type: 'Industry Connects', date: '04/05/2025', createdBy: 'Admin' },
  { name: 'Industry Event Participation', type: 'Industry Connects', date: '04/05/2025', createdBy: 'Admin' },
];

const Reports = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="reports-container">
      <h4 className="subheading">Reports Dashboard</h4>

      <div className="header-row">
        <h1 className="main-heading">
          VidyaDrishti (<span className="hindi-text">विद्यादृष्टि</span>)
        </h1>
        <span className="date-text">{today}</span>
      </div>

      <p className="subtitle">See the future of the institution through the lens of data.</p>

      <h2 className="section-title">Reports</h2>

      <div className="filters">
        <select>
          <option>All Categories</option>
          <option>Placement</option>
          <option>Admissions</option>
          <option>Examination</option>
          <option>Assets</option>
          <option>Industry Connects</option>
        </select>

        <select>
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>This Year</option>
        </select>

        <button className="export-btn">Export</button>
      </div>

      <div className="reports-table-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((report, i) => (
              <tr key={i}>
                <td>{report.name}</td>
                <td>{report.type}</td>
                <td>{report.date}</td>
                <td>{report.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
