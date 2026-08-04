import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { navSections, profile } from '../content/site';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__note">{profile.role}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a href={`/#${id}`}>{label}</a>
              </li>
            ))}
            <li>
              <Link to="/my-story">My Story</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name} · Built with React
      </p>
    </footer>
  );
}

export default Footer;
