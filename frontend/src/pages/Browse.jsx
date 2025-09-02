import React from 'react';
import './Browse.css';

function Browse() {
  const skills = [
    { id: 1, name: 'Web Development', offeredBy: 'Alice' },
    { id: 2, name: 'Graphic Design', offeredBy: 'Bob' },
    { id: 3, name: 'Cooking', offeredBy: 'Charlie' },
  ];

  return (
    <div className="browse">
      <h1>Browse Skills</h1>
      <p>Explore skills offered by our community members.</p>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <h2>{skill.name}</h2>
            <p>Offered by: {skill.offeredBy}</p>
            <button>Request Skill</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
