import React from 'react';
import { motion } from 'framer-motion';

import usePageMeta from '../hooks/usePageMeta';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

function Home() {
  usePageMeta(
    'Garv Pundir — Software & AI/ML Engineer',
    'Garv Pundir — CS, Data Science, and Economics at UW–Madison. Undergraduate researcher in generative models for synthetic tabular data, building AI systems and full-stack products.'
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </motion.div>
  );
}

export default Home;
