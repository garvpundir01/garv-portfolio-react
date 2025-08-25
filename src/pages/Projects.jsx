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
          title: '📝 Budgetly (2025)',
          description: `Developed a full-stack personal finance dashboard that allows users to track income, expenses, and budgets with interactive charts and summaries.

          Implemented secure authentication and session management with JWT tokens, enabling personalized dashboards. Designed a responsive UI with reusable React components (charts, progress bars, category management, transaction lists, budget tracking). Integrated a Django + PostgreSQL backend, exposing RESTful APIs for categories, transactions, budgets, and monthly summaries.

          Built data visualizations (category pie charts, monthly bar charts, income/expense summaries) using Chart.js/Recharts to improve financial insights. Added raw summary analysis view for debugging and transparency of backend data. Collaborated with Git/GitHub for version control, handling merges, rebases, and deployments.`,
          tools: 'Full Stack Development, REST API Development, Database Management (Postgre SQL), Data Visualization, Autentication and Security'
        },
        {
          title: '📝 LLM Grading Quality (2024)',
          description: `Conducted research under Professor Karumbaiah on improving the reliability and fairness of large language model (LLM)-based grading systems for student writing. The project focused on understanding how LLM evaluations vary with measurable aspects of writing quality (e.g., structure, coherence, grammar, and argument depth) and whether such evaluations align with traditional academic standards.

          Built an end-to-end evaluation pipeline in Python leveraging natural language processing (NLP) techniques to analyze student essays, clean and preprocess datasets, and systematically compare LLM-assigned grades with expert rubrics. Applied prompt engineering to optimize the way LLMs generated grades and feedback, experimenting with different instructions and constraints to improve output reliability.

          Trained models to go beyond grading by generating personalized, formative feedback, helping students improve based on their writing history rather than static criteria. This required designing adaptive prompts and evaluation loops that tailored suggestions to each student’s demonstrated progress.

          Through this project, I gained hands-on experience with LLM training, evaluation metrics, and AI alignment challenges, while contributing to the broader goal of making AI-assisted education tools more transparent, consistent, and student-centered.`,
          tools: 'Natural Language Processing, Prompt Engineering, Python, LLMs, Data Analysis and Evaluation Metrics'
        },
        {
          title: '📈 Stock Prediction with LSTM (2025)',
          description: `Currently developing a predictive model using LSTM (Long Short-Term Memory networks) to forecast stock prices. The project involves extensive data preprocessing, time-series analysis, and neural network modeling. So far, I have acquired historical financial data, performed cleaning and visualization, and built correlation matrices to identify trends. The next phase focuses on training and evaluating the LSTM model to make informed predictions based on temporal patterns.`,
          tools: 'Long Short Term Memory (LSTM), Data Cleaning and Preprocessing, Data Analysis and Visualization (Numpy, Pandas, Matplotlib), Time Series Forecasting, Machine Learning Model Evaluation'
        },
        {
          title: '🔬 ChatGPT for Materials Science (2024)',
          description: `Explored the application of large language models (LLMs) in materials science research, focusing on the prediction of Li-ion cathode battery voltages. Designed and implemented prompting strategies in Python to query the ChatGPT API, collected outputs, and compared results against an established reference database to assess accuracy and reliability.

          This project provided insight into the capabilities and limitations of LLMs in scientific data analysis, highlighting how prompt engineering affects model performance and where human validation remains critical. Strengthened skills in data collection, validation, and experimental design, while bridging the gap between AI tools and engineering research workflows.`,
          tools: 'OpenAI API, Prompt Engineering, Python, Data Validation and Comparison, Experimetal Design, Applied AI in Scientific Research'
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
        <h2>📚 Publications on IoT and LiDAR in the World Journal of Engineering, Research and Technology</h2>
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
