import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>👋 Hi, I'm Garv Pundir</h1>
      <p>
        I’m a junior at UW–Madison studying Computer Science, Data Science, and Economics — passionate about building modern software, solving real-world problems, and designing user-focused systems.
      </p>
      <p>
        Explore my journey, projects, and experience — or <Link to="/contact">get in touch</Link>!
      </p>
    </div>
  );
}

export default Home;
