import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

import { useTheme } from '../ThemeContext';
import { navSections, profile } from '../content/site';
import './Navbar.css';

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const onHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  // While the drawer is open: lock page scroll, trap Tab inside it, close on Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        burgerRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = menuRef.current?.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const trapped = [...focusable, burgerRef.current];

      if (!trapped.includes(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        burgerRef.current?.focus();
      } else if (!event.shiftKey && document.activeElement === burgerRef.current) {
        event.preventDefault();
        first.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        burgerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  // Scroll-spy: highlight whichever section owns the upper band of the viewport.
  useEffect(() => {
    if (!onHome) {
      setActiveId('');
      return undefined;
    }

    const targets = navSections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [onHome]);

  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav__inner" aria-label="Primary">
        <Link to="/" className="nav__brand" aria-label={`${profile.name} — home`}>
          <span className="nav__mark" aria-hidden="true">GP</span>
          <span className="nav__brand-text">{profile.name}</span>
        </Link>

        <ul className="nav__links">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={sectionHref(id)}
                className={`nav__link ${activeId === id ? 'is-active' : ''}`}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/my-story"
              className={`nav__link ${pathname === '/my-story' ? 'is-active' : ''}`}
            >
              My Story
            </Link>
          </li>
        </ul>

        <div className="nav__actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>

          <a className="btn btn--sm nav__resume" href={profile.resume} download>
            <FiDownload aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            ref={burgerRef}
            className="icon-btn nav__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        <ul>
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a href={sectionHref(id)} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/my-story" onClick={() => setMenuOpen(false)}>
              My Story
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
