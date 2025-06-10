import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import profilePic from '../assets/garv.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      className="page home-section"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home-content">
        <motion.img
          src={profilePic}
          alt="Garv Pundir"
          className="profile-pic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <motion.div
          className="home-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h1>👋 Hi, I'm Garv Pundir</h1>
          <p>
            Computer Science, Data Science and Economics junior at UW–Madison passionate about backend software development, exploring AI, developing and utilizing LLMs.
          </p>
          <p>
            Learn more about my journey on the <Link to="/my-story">My Story</Link> page or see what I’ve been working on in <Link to="/projects">Projects</Link>.
          </p>

          <Link to="/about" className="learn-more-btn">Learn more →</Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
