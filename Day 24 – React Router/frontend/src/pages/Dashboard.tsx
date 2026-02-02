import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="portfolio">
      {/* Header */}
      <div className="portfolio-header">
        <h1>Portfolio Dashboard</h1>
        <div className="portfolio-summary">
          <div className="summary-item">
            <span className="label">Total Projects</span>
            <span className="value positive">5</span>
          </div>
          <div className="summary-item">
            <span className="label">Completed Tasks</span>
            <span className="value positive">20</span>
          </div>
          <div className="summary-item">
            <span className="label">Pending Tasks</span>
            <span className="value">3</span>
          </div>
        </div>
      </div>

      {/* User Info */}
      <section className="holdings-section">
        <h2>User Information</h2>
        <div className="holdings-grid">
          <div className="holding-card">
            <div className="holding-header">
              <h3>Personal Details</h3>
              <span className="sector">Profile</span>
            </div>
            <div className="holding-details">
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value">Akshit</span>
              </div>
              <div className="detail-item">
                <span className="label">Email:</span>
                <span className="value">akshit@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="performance-section">
        <h2>Statistics</h2>
        <div className="performance-chart">
          <p>Performance metrics and charts will be displayed here.</p>
        </div>
      </section>

      {/* Actions */}
      <section className="holdings-section">
        <h2>Quick Actions</h2>
        <div className="holdings-grid">
          <div className="holding-card">
            <div className="holding-header">
              <h3>Actions</h3>
            </div>
            <div className="holding-details">
              <button className="action-btn">Create Project</button>
              <button className="action-btn">View Profile</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
