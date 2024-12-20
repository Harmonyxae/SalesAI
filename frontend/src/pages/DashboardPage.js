import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h2>Calls Per Day</h2>
          <div className="placeholder">Graph Placeholder</div>
        </div>
        <div className="metric-card">
          <h2>Success Rate</h2>
          <div className="placeholder">Graph Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
