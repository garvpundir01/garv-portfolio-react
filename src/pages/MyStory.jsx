import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Reveal } from '../components/Section';
import usePageMeta from '../hooks/usePageMeta';
import { story } from '../content/site';

function MyStory() {
  usePageMeta(
    'My Story — Garv Pundir',
    'The 2023 accident, the recovery, and how it reshaped how I approach hard problems.'
  );

  return (
    <motion.article
      className="story"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="story__inner">
        <Link to="/" className="link-arrow link-arrow--back">
          <FiArrowLeft aria-hidden="true" />
          Back home
        </Link>

        <h1 className="story__title">{story.title}</h1>
        <p className="story__lede">{story.lede}</p>

        <div className="story__body">
          {story.paragraphs.slice(0, 2).map((text) => (
            <p key={text}>{text}</p>
          ))}

          <Reveal>
            <blockquote className="story__quote">{story.quote}</blockquote>
          </Reveal>

          {story.paragraphs.slice(2).map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <Reveal className="story__foot">
          <Link to="/#projects" className="btn btn--primary">
            See what I&rsquo;ve built since
          </Link>
        </Reveal>
      </div>
    </motion.article>
  );
}

export default MyStory;
