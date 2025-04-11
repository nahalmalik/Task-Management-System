import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {

  return (
    <div className="projects-container">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="navbar-left">
          <img className='bar-icon' src={require('./menu.png')} alt="logo" />
          <img src={require('./logo1.png')} alt="logo" />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/your-work" className='view-link'>Your work</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/projects" className='view-link'>Projects</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <Link to="/dashboards" className='view-link'>Dashboards</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          <button className="create-button">Create</button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <img className='bar-icon' src={require('./notification.png')} alt="logo" />
          <img className='bar-icon' src={require('./star.png')} alt="logo" />
        </div>
      </div>

      <div className="sidebar2">
        <div className="recent-projects">
          <h4><span className='icon'>⬇</span> Manager</h4>
          <Link to="/dashboard2" className="project-item">
            <span className='icon'>📊</span> Generate Reports
          </Link><br /><br />
          <Link to="/subTask" className="project-item">
            <span className='icon'>📋</span> Create Sub Tasks
          </Link><br /><br />
          <Link to="/access" className="project-item">
            <span className='icon'>📎</span> Access
          </Link><br /><br />
          <Link to="/fileSharing" className="project-item">
            <span className='icon'>📁</span> File Sharing
          </Link>
        </div>
        <br />
        <Link to="/all-projects" className='view-link'>View All Projects</Link>
      </div>

      <div className="main-content">
            <div className="search-bar">
            <button className="search-button">Search</button>
            <hr />
            </div>

            <div className="project-list">
                    <button className="create-button"> 📝  Create Task </button>
                </div>
     <h4>Last Task created</h4>
        <div className="attachment-list">
          <div className="attachment-file">
            <div className="upload-box">
              <h4>Project 1</h4>
            </div><hr />
            <div className="upload-box">
              <h4>Project 2</h4>
            </div> <hr />
            <div className="upload-box">
              <h4>Project 3</h4>
            </div>
          </div>
        </div>
            </div>
    </div>
  );
};

export default Dashboard;