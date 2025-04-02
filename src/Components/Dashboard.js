import React from 'react';
import "./Dashboard.css";


const Dashboard = () => {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Autovance</h1>
          <div className="user-info">P Harigaran</div>
        </header>
  
        <div className="dashboard-content">
          <div className="sidebar">
            <button className="menu-button active">REQUEST TRAIL DATE</button>
            <button className="menu-button">CONFIRMATION</button>
            <button className="menu-button">PAYMENT CHECKOUT</button>
            <button className="menu-button">VIEW RESULTS</button>
            <button className="menu-button">ABOUT US</button>
          </div>
  
          <div className="main-content">
            <div className="upcoming-event">
              <h3>Upcoming QBR</h3>
              <p>12th Aug, 2022</p>
            </div>
            
            {/* Additional content would go here */}
            <div className="content-placeholder">
              <p>Main content area</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;