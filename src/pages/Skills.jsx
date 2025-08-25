import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


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
      <p>Java, Python, JavaScript, C, C++, R, SQL, HTML/CSS</p>

      <h3>Frameworks</h3>
      <p>ReactJS, NodeJS, SQLite, Scikit Learn, Flask, JUnit, MySQL, NoSQL, FastAPI, TypeScript, Vite</p>

      <h3>Data Modelling</h3>
      <p>R, Python (matplotlib, pandas, NumPy), LSTM, Regression, Classification</p>

      <h3>Developer Tools</h3>
      <p>Git, Agile Development, Visual Studio, Linux, Bash, Vim, Nano, IntelliJ</p>

      <h3>Other Skills</h3>
      <p>Data Structures, Algorithms, Front-end, Back-end, Full-stack, Artificial Intelligence, Database Management Systems</p>

    </motion.div>
  );
}

export default Skills;
