import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/** Fades content up as it enters the viewport, once. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** A titled page section with a numbered eyebrow heading. */
export function Section({ id, index, title, kicker, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-heading`}>
      <div className="section__inner">
        <Reveal className="section__head">
          <p className="section__index">{String(index).padStart(2, '0')}</p>
          <h2 id={`${id}-heading`} className="section__title">
            {title}
          </h2>
          {kicker && <p className="section__kicker">{kicker}</p>}
        </Reveal>

        {children}
      </div>
    </section>
  );
}

export default Section;
