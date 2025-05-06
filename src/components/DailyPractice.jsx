import React from 'react';
import './DailyPractice.css';

const jobData = [
  {
    title: 'Assistant Professor',
    type: 'Full-Time',
    department: 'Computer Science',
    posted: '04/10/2024',
    status: 'Open',
  },
  {
    title: 'Adjunct Lecturer',
    type: 'Part-Time',
    department: 'Mathematics',
    posted: '03/25/2024',
    status: 'Open',
  },
  {
    title: 'Research Associate',
    type: 'Temporary',
    department: 'Physics',
    posted: '03/15/2024',
    status: 'Offer',
  },
];

const DailyPractice = () => {
  return (
    <div className="dp-container">
      <header className="dp-header">
        <h1 className="dp-title">
          VidyaDrishti <span className="dp-hindi">(विद्यादृष्टि)</span>
        </h1>
        <span className="dp-date">April 14, 2025</span>
      </header>
      <p className="dp-subtitle">
        See the future of the institution through the lens of data.
      </p>

      <h2 className="dp-section-title">Executive Summary</h2>
      <div className="dp-cards">
        <div className="dp-card">
          <div className="dp-card-icon">📝</div>
          <h3>Admissions</h3>
          <p>Analytics on student application trends and acceptance rates.</p>
        </div>
        <div className="dp-card">
          <div className="dp-card-icon">📊</div>
          <h3>Examination</h3>
          <p>Tracking of assessment performance and examination results</p>
        </div>
        <div className="dp-card">
          <div className="dp-card-icon">🤝</div>
          <h3>Placements</h3>
          <p>Monitoring of campus placements and recruiter engagement</p>
        </div>
      </div>

      <h2 className="dp-section-title">Job Openings</h2>
      <div className="filters-bardaily">
      <div className="filter-itemdaily">
    <select defaultValue="">
      <option value="">Job Type</option>
      <option>Acv</option>
      <option>TCV</option>
      <option>Monthly</option>
    </select>
  </div>
  <div className="filter-itemdaily search-department">
  <input type="text" placeholder="Department" />
  <span className="search-icon">🔍</span>
</div>
</div>

      <table className="dp-table">
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
          {jobData.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.type}</td>
              <td>{job.department}</td>
              <td>{job.posted}</td>
              <td>
                <span
                  className={`dp-status ${
                    job.status === 'Open' ? 'open' : 'offer'
                  }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyPractice;