import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function MyStory() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>My Story</h1>

      <p>
        In April 2023, I experienced a life-changing car accident that left me severely injured. The recovery process was long and difficult, both physically and mentally — but it also became one of the most defining periods of my life.
      </p>

      <p>
        While I was healing, I made a choice: to use this moment as a foundation to rebuild stronger, more focused, and more determined than ever. It wasn’t easy, but every step forward became a reminder of what I was capable of.
      </p>

      <blockquote className="resilience-quote">
        “Scars are proof that we survived — and I choose to wear mine with pride.”
      </blockquote>

      <p>
        Since then, I’ve returned to my academic and personal pursuits with more clarity and resilience. Whether it’s mentoring students, building intelligent systems, or pushing through complex problems in backend development — I now approach every challenge with a mindset forged by recovery.
      </p>

      <p>
        This chapter of my life fuels everything I do. It taught me patience, persistence, and perspective — and I carry that with me in every project I build, every problem I solve, and every opportunity I earn.
      </p>
    </motion.div>
  );
}

export default MyStory;
