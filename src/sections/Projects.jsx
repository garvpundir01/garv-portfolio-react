import React, { useState } from 'react';
import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';

import { Reveal, Section } from '../components/Section';
import { projects, publications } from '../content/site';

function ProjectCard({ project }) {
  return (
    <article className={`card project ${project.featured ? 'project--featured' : ''}`}>
      <header className="project__head">
        <h3 className="project__title">{project.title}</h3>
        <span className="project__period">{project.period}</span>
      </header>

      {project.context && <p className="project__context">{project.context}</p>}

      <p className="project__summary">{project.summary}</p>

      <ul className="bullets bullets--tight">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <footer className="project__foot">
        <ul className="tags">
          {project.stack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        {project.link && (
          <a className="link-arrow" href={project.link} target="_blank" rel="noreferrer">
            {project.linkLabel || 'View project'}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </footer>
    </article>
  );
}

function Projects() {
  const [expanded, setExpanded] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = expanded ? projects : featured;

  return (
    <Section
      id="projects"
      index={3}
      title="Projects"
      kicker="Things I built, and what actually came out of them."
    >
      <div className="projects">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i, 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <Reveal className="projects__more">
          <button type="button" className="btn" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Show less' : `Show ${rest.length} more project${rest.length > 1 ? 's' : ''}`}
          </button>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <article className="card publications">
          <h3 className="publications__title">
            <FiBookOpen aria-hidden="true" />
            Publications
          </h3>
          <p className="publications__venue">{publications.venue}</p>
          <ul className="publications__list">
            {publications.items.map((item) => (
              <li key={item.url}>
                <a href={item.url} target="_blank" rel="noreferrer" className="link-arrow">
                  {item.title}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}

export default Projects;
