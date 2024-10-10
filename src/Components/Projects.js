import React, { useState } from 'react';
import './Projects.css';
import Lamppu from '../Images/lamppu.webp';
import Soundcloud from '../Images/SC.webp';
import StudyTracker from '../Images/studytracker.webp';

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'TinkerIT', filter: 'TinkerIT', description: 'TinkerIT is a customer oriented software company with a mission to enable modern websites and stores for all businesses', image: Lamppu, link: 'https://tinkerit.fi'},
    { id: 2, title: 'My music', filter: 'Freetime', description: 'Music I have produced', image: Soundcloud, link: 'https://soundcloud.com/user-833201349' },
    { id: 3, title: 'StudyTracker', filter: 'Open Source', description: 'A database application for primary schools to create and conduct exams', image: StudyTracker, link: 'https://github.com/tuupsuu/StudyTracker' },
    { id: 4, title: 'Social Media Dashboard', filter: 'TinkerIT', description: 'Built a social media analytics tool.', image: Lamppu, link: 'https://tinkerit.fi' },
    { id: 5, title: 'Game Development Project', filter: 'Freetime', description: 'Created a simple 2D platformer game.', image: Lamppu },
    { id: 6, title: 'Data Analysis Project', filter: 'Open Source', description: 'Analyzed data for academic research.', image: Lamppu },
  ];

  const filteredProjects = projects.filter((project) => filter === 'All' || project.filter === filter);

  return (
    <div className="projects">
      <h3 className='Projects-title'>My Work</h3>

      <div className="filter-buttons">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Open Source')} className={filter === 'Open Source' ? 'active' : ''}>Open Source</button>
        <button onClick={() => setFilter('TinkerIT')} className={filter === 'TinkerIT' ? 'active' : ''}>TinkerIT</button>
        <button onClick={() => setFilter('Freetime')} className={filter === 'Freetime' ? 'active' : ''}>Freetime</button>
      </div>

      <div className="project-timeline">
        {filteredProjects.map((project, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="project-content">
                  <img src={project.image} alt={project.title} className={`project-image project-image-${project.id}`} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
