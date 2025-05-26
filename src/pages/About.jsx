import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
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
      <h1>About Me</h1>
  <p>
    Hello! I'm <strong>Garv Pundir</strong>, a junior at the University of Wisconsin–Madison pursuing a triple focus in Computer Science, Data Science, and Economics. I’m passionate about designing scalable systems and solving real-world problems through software.
  </p>
  <p>
    I’ve contributed to research in AI and machine learning, built predictive models, and created frontend interfaces for IoT applications. While I’ve gained experience in various areas—from LLM training to object detection—I’m currently expanding my expertise in backend development and system design.
  </p>
  <p>
    Outside the classroom, I serve as a peer mentor for CS354 (Machine Organization), helping students master topics like C programming, memory management, and assembly language. I enjoy working on collaborative projects, especially those that blend data, code, and impact.
  </p>
  <p>
    I believe in continuous learning, whether it's through contributing to open-source projects or mentoring others. My goal is to create solutions that are both technically robust and user-centric.
  </p>
    </motion.div>
  );
}

export default About;
