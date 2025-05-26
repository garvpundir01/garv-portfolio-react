import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // ✅ Add this line

function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      className="page"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.6 }}
    >
      <h1>👋 Hi, I'm Garv Pundir</h1>
      <p>
        I’m a junior at UW–Madison studying Computer Science, Data Science, and Economics — passionate about building modern software, solving real-world problems, and designing user-focused systems.
      </p>
      <p>
        Explore my journey, projects, and experience — or <Link to="/contact">get in touch</Link>!
      </p>
    </motion.div>
  );
}

export default Home;
