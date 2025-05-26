import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
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
      <h1>Let’s Connect</h1>
      <p>You can reach me via email or follow me on GitHub & LinkedIn:</p>
      <ul>
        <li><strong>Email:</strong> garvpundir2004@gmail.com</li>
        <li><strong>Phone:</strong> +1 (608) 895-1235</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/garvpundir01" target="_blank">github.com/garvpundir01</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/garv-pundir" target="_blank">linkedin.com/in/garv-pundir</a></li>
      </ul>
    </motion.div>
  );
}

export default Contact;
