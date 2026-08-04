import React from 'react';

import { Reveal, Section } from '../components/Section';
import { skills } from '../content/site';

function Skills() {
  return (
    <Section
      id="skills"
      index={4}
      title="Skills"
      kicker="Tools I reach for, roughly in order of how often I use them."
    >
      <div className="skills">
        {skills.map((group, i) => (
          <Reveal key={group.group} className="card skills__group" delay={Math.min(i, 3) * 0.06}>
            <h3 className="skills__label">{group.group}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
