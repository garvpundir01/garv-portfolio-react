import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function Projects() {
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
      <h1>Projects</h1>

      {[
        {
          title: '📝 LLM Grading Quality (2024)',
          description: `Worked under Professor Karumbaiah to explore how large language models assess student writing. Trained and evaluated an LLM to generate feedback and improvement suggestions tailored to students' prior submissions. Investigated how grading patterns vary with student writing quality using qualitative and quantitative methods. Contributed to prompt engineering, model fine-tuning, and comparative analysis to enhance grading reliability and fairness across diverse writing samples.`,
          tools: 'Python, LLMs, Prompt Engineering'
        },
        {
          title: '📈 Stock Prediction with LSTM (2025)',
          description: `Currently developing a predictive model using LSTM (Long Short-Term Memory networks) to forecast stock prices. The project involves extensive data preprocessing, time-series analysis, and neural network modeling. So far, I have acquired historical financial data, performed cleaning and visualization, and built correlation matrices to identify trends. The next phase focuses on training and evaluating the LSTM model to make informed predictions based on temporal patterns.`,
          tools: 'Python, Pandas, NumPy, Keras'
        },
        {
          title: '🔬 ChatGPT for Materials Science (2024)',
          description: `Conducted a study on ChatGPT’s ability to predict Li-ion battery cathode voltages by prompting the OpenAI API with scientific queries. Collected and structured outputs to compare them against a verified materials database, analyzing the accuracy, consistency, and reasoning in ChatGPT's responses. Evaluated model reliability for STEM applications and identified key limitations in reasoning over domain-specific data. The project emphasized prompt design, output parsing, and critical comparison with ground truth.`,
          tools: 'OpenAI API, Python, Data Validation'
        }
      ].map((proj, index) => (
        <motion.div
          key={index}
          className="project"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h2>{proj.title}</h2>
          <p>{proj.description}</p>
          <p><strong>Tools:</strong> {proj.tools}</p>
        </motion.div>
      ))}

      <motion.div
        className="project"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <h2>📚 Publications on IoT and LiDAR</h2>
        <ul>
          <li><a href="https://www.wjert.org/home/article_abstract/1014" target="_blank" rel="noreferrer">Internet of Things</a></li>
          <li><a href="https://www.wjert.org/home/article_abstract/1068" target="_blank" rel="noreferrer">LiDAR Technology</a></li>
        </ul>
        <p><strong>Tools:</strong> Research Writing, Engineering Concepts</p>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
