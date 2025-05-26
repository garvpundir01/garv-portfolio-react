import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import './Navbar.css';

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
  <h1>Garv Pundir</h1>

  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/education">Education</Link></li>
    <li><Link to="/experience">Experience</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/skills">Skills</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>

  <div className="nav-actions">
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>

    <a href="/Garv_Pundir_Resume.pdf" download className="resume-btn">
  📄 Download Resume
   </a>
  </div>
</nav>

  );
}

export default Navbar;
