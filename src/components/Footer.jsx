import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Garv Pundir</p>
      <div className="footer-icons">
        <a href="https://github.com/garvpundir01" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/garvpundir" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:your.email@domain.com">
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
