import React from 'react';
import './Staff.css';

const Staff = () => {
  const fontwa = {
    fontSize: '20px',
  };

  const StaffData = [
    {
        positionTitle: 'Assistant Professor',
        jobType: 'Full-Time',
        department: 'Computer Science',
        posted: '04/10/2024',
        status: 'Open',
      },
      {
        positionTitle: 'Adjunct Lecturer',
        jobType: 'Part-Time',
        department: 'Mathematics',
        posted: '03/25/2024',
        status: 'Open',
      },
      {
        positionTitle: 'Consulting Services',
        jobType: 'Temporary',
        department: 'Physics',
        posted: '03/15/2024',
        status: 'Interview',
      },
      {
        positionTitle: 'Assistant Professor',
        jobType: 'Full-Time',
        department: 'History',
        posted: '02/28/2024',
        status: 'Offer',
      },
      {
        positionTitle: 'Administrative Assistant',
        jobType: 'Full-Time',
        department: 'Administration',
        posted: '02/10/2024',
        status: 'Open',
      },
      {
        positionTitle: 'Administrative Assistant',
        jobType: 'Full-Time',
        department: 'Administration',
        posted: '02/10/2024',
        status: 'Open',
      },
    ];

    const getStatusClass = (status) => {
        if (status === 'Open') return 'status-badge open';
        if (status === 'Interview') return 'status-badge interview';
        if (status === 'Offer') return 'status-badge offer';
        return '';
      };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Staff Recruitment</h1>
        <button className="add-contract-button">Post Job</button>
      </header>

      <div className="metrics5">
        <div className="metric5">
          <h3>Open Positions</h3>
          <p style={fontwa}>12</p>
        </div>
        <div className="metric5">
          <h3>Applicants</h3>
          <p style={fontwa}>45</p>
        </div>
        <div className="metric5">
          <h3>Interviews Soon</h3>
          <p style={fontwa}>8</p>
        </div>
        <div className="metric5">
          <h3>Offers Made</h3>
          <p style={fontwa}>6</p>
        </div>
      </div>
      <h2 style={{ marginTop: '0' }}>Job Openings</h2>

      <div className="filter-bar">
      <div className="filter-item">
  <label>Job Type</label>
  <select>
    <option>All</option>
    <option>Full-Time</option>
    <option>Part-Time</option>
    <option>Temporary</option>
  </select>
</div>

<div className="filter-item">
  <label>Department</label>
  <select>
    <option>All</option>
    <option>Computer Science</option>
    <option>Mathematics</option>
    <option>Physics</option>
    <option>History</option>
    <option>Administration</option>
  </select>
</div>

        <div className="filter-item">
          <label>Job</label>
          <input type="text" placeholder="Search Job Openings" />
        </div>
      </div>
      <div className="contracts-table-container">
  <table className="contracts-table">
    <thead>
      <tr>
        <th>Position Title</th>
        <th>Job Type</th>
        <th>Department</th>
        <th>Posted</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {StaffData.map((job, index) => (
        <tr key={index}>
          <td>{job.positionTitle}</td>
          <td>{job.jobType}</td>
          <td>{job.department}</td>
          <td>{job.posted}</td>
          <td>
            <span className={getStatusClass(job.status)}>{job.status}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Staff;
