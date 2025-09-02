import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome back! Here you can manage your skills and requests.</p>

      <div className="dashboard-cards">
        <div className="dash-card">
          <h2>Your Skills</h2>
          <p>List, edit, or remove skills you are offering.</p>
        </div>
        <div className="dash-card">
          <h2>Requests</h2>
          <p>Track skills you have requested from others.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
