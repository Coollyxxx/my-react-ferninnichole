import React from 'react';
import './Project.css';

const projects = [
  {
    title: "Blogging Website about natures.",
    description: "This website project is for Sir Clyde in his PSIT 01 subject. I used Html and css only",
    link: "https://coollyxxx.github.io/fernin-website/"
  },
  {
    title: "Created a calculator.",
    description: "My first ever calculator using React.js for sir Palabrica in his PCIT 15 subject.",
    link: "https://coollyxxx.github.io/Node.React/"
  },
  
];

const Project = () => {
  return (
    <div className="project-container">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
