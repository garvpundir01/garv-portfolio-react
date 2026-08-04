import React from 'react';
import { FiAward } from 'react-icons/fi';

import { Reveal, Section } from '../components/Section';
import { education } from '../content/site';

function Education() {
  return (
    <Section id="education" index={5} title="Education" kicker="Three majors, one transcript.">
      <Reveal className="card education">
        <header className="education__head">
          <div>
            <h3 className="education__school">{education.school}</h3>
            <p className="education__degree">{education.degree}</p>
          </div>
          <div className="education__when">
            <span>{education.period}</span>
            <span className="education__location">{education.location}</span>
          </div>
        </header>

        <div className="education__stats">
          <div>
            <span className="education__stat-value">{education.gpa}</span>
            <span className="education__stat-label">GPA</span>
          </div>
          <ul className="education__honors">
            {education.honors.map((honor) => (
              <li key={honor}>
                <FiAward aria-hidden="true" />
                {honor}
              </li>
            ))}
          </ul>
        </div>

        <div className="education__coursework">
          <h4>Relevant coursework</h4>
          <ul className="tags">
            {education.coursework.map((course) => (
              <li key={course} className="tag">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

export default Education;
