import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Reveal, Section } from '../components/Section';
import { profile } from '../content/site';

function About() {
  return (
    <Section id="about" index={1} title="About" kicker="Who I am and what I'm chasing.">
      <div className="about">
        <Reveal className="about__prose" delay={0.05}>
          <p className="about__lede">{profile.intro}</p>
          <p>{profile.intro2}</p>
          <p>{profile.intro3}</p>

          <Link to="/my-story" className="link-arrow">
            There is a longer version of this
            <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="about__aside" delay={0.15}>
          <dl>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Graduating</dt>
              <dd>December 2026</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Applied AI/ML, backend systems</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Generative models for synthetic tabular data</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export default About;
