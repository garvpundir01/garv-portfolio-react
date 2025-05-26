import React from 'react';

function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="project">
        <h2>📝 LLM Grading Quality (2024)</h2>
        <p>
          Worked under Professor Karumbaiah to explore how large language models assess student writing. Trained and evaluated an LLM to generate feedback and improvement suggestions tailored to students' prior submissions. Investigated how grading patterns vary with student writing quality using qualitative and quantitative methods. Contributed to prompt engineering, model fine-tuning, and comparative analysis to enhance grading reliability and fairness across diverse writing samples.
        </p>
        <p><strong>Tools:</strong> Python, LLMs, Prompt Engineering</p>
      </div>

      <div className="project">
        <h2>📈 Stock Prediction with LSTM (2025)</h2>
        <p>
          Currently developing a predictive model using LSTM (Long Short-Term Memory networks) to forecast stock prices. The project involves extensive data preprocessing, time-series analysis, and neural network modeling. So far, I have acquired historical financial data, performed cleaning and visualization, and built correlation matrices to identify trends. The next phase focuses on training and evaluating the LSTM model to make informed predictions based on temporal patterns.
        </p>
        <p><strong>Tools:</strong> Python, Pandas, NumPy, Keras</p>
      </div>

      <div className="project">
        <h2>🔬 ChatGPT for Materials Science (2024)</h2>
        <p>
          Conducted a study on ChatGPT’s ability to predict Li-ion battery cathode voltages by prompting the OpenAI API with scientific queries. Collected and structured outputs to compare them against a verified materials database, analyzing the accuracy, consistency, and reasoning in ChatGPT's responses. Evaluated model reliability for STEM applications and identified key limitations in reasoning over domain-specific data. The project emphasized prompt design, output parsing, and critical comparison with ground truth.
        </p>
        <p><strong>Tools:</strong> OpenAI API, Python, Data Validation</p>
      </div>

      <div className="project">
        <h2>📚 Publications on IoT and LiDAR</h2>
        <ul>
          <li><a href="https://www.wjert.org/home/article_abstract/1014" target="_blank">Internet of Things</a></li>
          <li><a href="https://www.wjert.org/home/article_abstract/1068" target="_blank">LiDAR Technology</a></li>
        </ul>
        <p><strong>Tools:</strong> Research Writing, Engineering Concepts</p>
      </div>
    </div>
  );
}

export default Projects;
