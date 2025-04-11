import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import CSS for the calendar
import './Projects.css';

const localizer = momentLocalizer(moment); // Set up the localizer

const Projects = () => {
  const navigate = useNavigate();

  // Sample events for the calendar
  const events = [
    {
      title: 'Team Meeting',
      start: new Date(2023, 9, 21, 9, 0), // October is month 9 in JS
      end: new Date(2023, 9, 21, 10, 0),
    },
    {
      title: 'Design Review',
      start: new Date(2023, 9, 22, 11, 0),
      end: new Date(2023, 9, 22, 12, 0),
    },
    // More events can be added here
  ];

  return (
    <div className="projects-container">
      {/* Top Navbar */}
      <div className="top-navbar">
      <div className="navbar-left">
            <img className='bar-icon' src={require('./menu.png')}  alt="logo" />
                <img src={require('./logo1.png')}  alt="logo" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <a href="./SignInPage.js" className='view-link'>Your work </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <a href="./Projects.js" className='view-link'>Projects </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                <a href="./SignInPage.js" className='view-link'>Dashboards </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="create-button">Create</button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                <img className='bar-icon' src={require('./notification.png')}  alt="logo" />
                <img className='bar-icon' src={require('./star.png')}  alt="logo" />
            </div>
      </div>

      <div className="sidebar">
        <span className="icon"></span>
        <div className="recent-projects">
          <h4><span className='icon'>⬇</span> Recent</h4>
          <div className="project-item">
            <span className='icon'>📁</span> Project 1
          </div>
        </div>  <br />
        <a href="./SignInPage.js" className='view-link'>View All Projects</a>
      </div>

      <div className="main-content">
        <h3>📁 Project 1</h3>
        <div className="tabs">
          <button onClick={() => navigate('/summary')}><span className='icon'>📄</span> Summary</button>
          <button onClick={() => navigate('/boards')}><span className='icon'>📋</span> Board</button>
          <button onClick={() => navigate('/Projects')}><span className='icon'>📊</span> Reports</button>
          <button onClick={() => navigate('/calendar')}><span className='icon'>📅</span> Calendar</button>
          <button onClick={() => navigate('/timeline')}><span className='icon'>🕒</span> Timeline</button>
          <button onClick={() => navigate('/communications')}><span className='icon'>💬</span> Communications</button>
          <button onClick={() => navigate('/attachments')}><span className='icon'>📎</span> Attachments</button>
        </div>
        <hr />
        <div className="search-bar">
          <input type="text" className='icon' placeholder="Search..." /> 🔍
        </div>

        <div className="timeline-calender">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 250, margin: '20px' }}
            views={['month', 'week', 'day']}
            defaultView="month"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;