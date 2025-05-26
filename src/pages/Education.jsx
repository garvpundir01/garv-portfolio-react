import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Education() {
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
      <h1>Education</h1>
    <h2>University of Wisconsin–Madison</h2>
    <p><strong>BS in Computer Science, Data Science & Economics</strong></p>
    <p><em>Expected Graduation: May 2026 | Dean's List: Spring 2023, Spring 2025</em></p>

    <h3>Relevant Coursework</h3>
    <ul>
      <li>Java Programming III</li>
      <li>Machine Organization and Programming (CS354)</li>
      <li>Introduction to Algorithms</li>
      <li>Introduction Artificial Intelligence</li>
      <li>Database Management Systems: Design and Implementation</li>
      <li>Data Science Programming II</li>
      <li>Data Science Modelling II</li>
      <li>Intermediate Microeconomic Theory</li>
      <li>Intermediate Macroeconomic Theory</li>
      <li>Introduction to Computer Engineering </li>
    </ul>

    </motion.div>
  );
}

export default Education;
