import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiDownload, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// 520x520 re-encode of assets/garv.jpg — 2x the largest display size, ~30 kB vs 125 kB.
import profilePic from '../assets/portrait.jpg';
import { highlights, profile } from '../content/site';

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__body">
          <motion.p className="hero__eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
            <span className="hero__status" aria-hidden="true" />
            {profile.availability}
          </motion.p>

          <motion.h1 className="hero__name" variants={rise} initial="hidden" animate="show" custom={1}>
            {profile.name}
          </motion.h1>

          <motion.p className="hero__role" variants={rise} initial="hidden" animate="show" custom={2}>
            {profile.role}
          </motion.p>

          <motion.p className="hero__tagline" variants={rise} initial="hidden" animate="show" custom={3}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero__meta" variants={rise} initial="hidden" animate="show" custom={4}>
            <span className="hero__meta-item">
              <FiMapPin aria-hidden="true" />
              {profile.location}
            </span>
            <a className="hero__meta-item hero__meta-link" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              {profile.githubHandle}
            </a>
            <a className="hero__meta-item hero__meta-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" />
              {profile.linkedinHandle}
            </a>
          </motion.div>

          <motion.div className="hero__cta" variants={rise} initial="hidden" animate="show" custom={5}>
            <a className="btn btn--primary" href="#projects">
              View my work
              <FiArrowDown aria-hidden="true" />
            </a>
            <a className="btn" href={profile.resume} download>
              <FiDownload aria-hidden="true" />
              Download résumé
            </a>
            <Link className="btn btn--ghost" to="/my-story">
              My story
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* LCP image: eager + high priority, never lazy. */}
          <img
            src={profilePic}
            alt={profile.name}
            width="520"
            height="520"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </div>

      <motion.ul
        className="hero__stats"
        variants={rise}
        initial="hidden"
        animate="show"
        custom={6}
        aria-label="Highlights"
      >
        {highlights.map(({ value, label, detail }) => (
          <li key={label}>
            <span className="hero__stat-value">{value}</span>
            <span className="hero__stat-label">{label}</span>
            <span className="hero__stat-detail">{detail}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Hero;
