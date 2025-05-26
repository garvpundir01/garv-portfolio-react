import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
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
      <h1>Skills</h1>

      <h3>Programming Languages</h3>
      <p>JavaScript, Python, Java, C, C++, R</p>

      <h3>Frontend & UI</h3>
      <p>HTML, CSS, React, Responsive Design, Git</p>

      <h3>Data Science & ML</h3>
      <p>NumPy, Pandas, Scikit-learn, LSTM, Matplotlib</p>

      <h3>Tools & Platforms</h3>
      <p>GitHub, VS Code, Jupyter, Linux, Web APIs</p>

    </motion.div>
  );
}

export default Skills;
