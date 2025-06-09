import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import profilePic from '../assets/garv.jpg';

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
            I'm <strong>Garv Pundir</strong>, a junior at the University of Wisconsin–Madison majoring in <strong>Computer Science</strong>, <strong>Data Science</strong>, and <strong>Economics</strong>. I’m passionate about solving real-world problems by building intelligent systems, designing scalable software, and delivering clean user experiences.
          </p>

          <p>
            My academic journey is driven by curiosity and a strong foundation in programming, systems, and data modeling. I’ve applied machine learning to stock price forecasting, built LSTM models for time-series prediction, and explored AI alignment by training LLMs to assess student writing. I’ve also developed interactive frontends for IoT systems and contributed to a research-backed project comparing ChatGPT to domain-specific scientific datasets.
          </p>

          <p>
            Outside the classroom, I’m a <strong>CS354 Peer Mentor</strong>, helping students understand memory management, assembly language, and C programming. I enjoy mentoring, collaborating on open-source projects, and working at the intersection of backend development and data analysis.
          </p>

          <p>
            I'm always looking for opportunities to contribute to impactful projects, learn from sharp people, and make tech more thoughtful and human-centered.
          </p>

          <Link to="/about" className="learn-more-btn">Learn more →</Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
