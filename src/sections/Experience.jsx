import React from 'react';

import { Reveal, Section } from '../components/Section';
import { experience } from '../content/site';

function Experience() {
  return (
    <Section
      id="experience"
      index={2}
      title="Experience"
      kicker="Research, teaching, and shipping production code."
    >
      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.org}-${job.role}`} className="timeline__item" delay={i * 0.06}>
            <span className={`timeline__dot ${job.current ? 'is-current' : ''}`} aria-hidden="true" />

            <article className="card timeline__card">
              <header className="timeline__head">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__org">{job.org}</p>
                  {job.subtitle && <p className="timeline__subtitle">{job.subtitle}</p>}
                </div>
                <p className="timeline__period">
                  {job.current && <span className="badge badge--live">Current</span>}
                  <span>{job.period}</span>
                </p>
              </header>

              <ul className="bullets">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="tags">
                {job.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
