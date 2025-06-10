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

      <h2>🔧 Harmonizer Scientific Research – SDE Intern</h2>
      <p><em>Aug 2024 – Oct 2024</em></p>
      <p>
        Designed and implemented interactive temperature and rain widgets for IoT devices using HTML, CSS, and JavaScript, enhancing the user experience and visualization capabilities. Collaborated with cross-functional teams to understand requirements and deliver responsive, user-friendly designs tailored to client specifications. Optimized widget performance, ensuring seamless functionality across multiple devices and platforms. Conducted testing and debugging to improve reliability and usability, addressing technical issues and incorporating feedback from stakeholders. Gained hands-on experience in front-end development while contributing to real-world IoT applications.
      </p>

      <h2>👨‍🏫 UW–Madison – CS354 Peer Mentor</h2>
      <p><em>Jan 2025 – Present</em></p>
      <p>
        As a peer mentor for the class <strong>Introduction to Computer Systems and C Programming</strong>, I support students in mastering foundational concepts such as virtual memory, dynamic memory management, caching, assembly language, and system-level communication. I provide guidance on C programming, debugging, and optimizing performance while fostering critical thinking and collaboration through study sessions. By creating an inclusive and supportive environment, I aim to encourage student engagement and understanding, serving as a bridge between students and the instructor to address challenges and enhance learning outcomes.
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
