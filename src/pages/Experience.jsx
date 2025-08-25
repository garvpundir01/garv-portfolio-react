import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function Experience() {
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
      <h1>Work Experience</h1>

      <h2>🔧 Harmonizer Global – SDE Intern</h2>
      <p><em>Aug 2024 – Oct 2024</em></p>
      <p>
        Contributed to front-end development using JavaScript, HTML, and CSS, collaborating with the engineering team to deliver features aligned with SDLC best practices and coding standards.

        Optimized widget performance for IoT devices, enhancing cross-platform compatibility and improving UI responsiveness, resulting in a smoother user experience across multiple devices.

        Strengthened skills in UI optimization, performance tuning, and collaborative software development within an agile, fast-paced environment.
      </p>

      <h2>👨‍🏫 UW–Madison – CS354 Peer Mentor</h2>
      <p><em>Jan 2025 – Present</em></p>
      <p>
        Mentored students on complex systems topics including virtual memory management, C programming, dynamic memory allocation, caching, assembly language, and system-level communication, breaking down abstract concepts into approachable steps.

Led coding sessions on caching, memory allocation, and assembly, creating an interactive environment that encouraged collaboration and deeper technical understanding.

Reinforced structured problem-solving techniques and best practices, helping students build confidence in debugging, system-level programming, and applying theory to practical coding challenges.
      </p>

      <h2>🧠 Inspirit AI – AI Intern (Remote)</h2>
      <p><em>Jun 2021 – Jul 2021</em></p>
      <p>
        Developed and implemented an object detection system for self-driven cars using the YOLO (You Only Look Once) algorithm, leveraging Python and libraries such as scikit-learn and pandas. Applied machine learning techniques, including Linear and Logistic Regression, Neural Networks, and Classification, to optimize the model's accuracy and performance. Conducted data preprocessing, model training, and validation to ensure robustness under diverse conditions while collaborating with a team to integrate advanced computer vision techniques into autonomous systems.
      </p>

    </motion.div>
  );
}

export default Experience;
