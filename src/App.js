import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignInRolePage from './SignInRolePage';
import Projects from './Projects';
import Attachments from './attachments'; 
import Board from './boards';  
import Calendar from './calendar';
import Communication from './communications';
import Dashboard from './managerdashboard';
import Head from './head-calandar';
import HeadNotifications from './headNotifications';
import Task from './headTask';
import Dashboard2 from './dashboard2';
import Task2 from './subTask';
import File from './fileSharing';
import Access from './access';
// Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/role" element={<SignInRolePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/attachments" element={<Attachments />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/communications" element={<Communication />} />
        <Route path="/managerdashboard" element={<Dashboard />} />
        <Route path="/head-calandar" element={<Head />} />
        <Route path="/headNotifications" element={<HeadNotifications />} />
        <Route path="/headTask" element={<Task />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/subTask" element={<Task2 />} />
        <Route path="/fileSharing" element={<File />} />
        <Route path="/access" element={<Access />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;