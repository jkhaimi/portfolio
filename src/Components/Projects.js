import React, { useState } from 'react';
import './Projects.css';
import Lamppu from '../Images/lamppu.webp';
import Soundcloud from '../Images/SC.webp';
import StudyTracker from '../Images/Studytracker.png';
import SongLibrary from '../Images/songlibrary.png';
import OnlineStore from '../Images/Onlinestore.png';
import ThaiMarketOlari from '../Images/ThaiMarket2.png';
import AirportTaxi from '../Images/AirportTaxi.webp';
import SavolainenOsakunta from '../Images/savo.png';
import Kaasalainen from '../Images/kaasalainen.png';
import Game from '../Images/Game.png';
// import { RiSkipLeftLine } from "react-icons/ri";


function Projects({ onNavigate }) {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'TinkerIT', filter: 'TinkerIT', description: 'A software company creating modern websites and online stores for businesses', image: Lamppu, link: '../Projects/TinkerIT'},
    { id: 2, title: 'My Music', filter: 'Freetime', description: 'Music I have produced', image: Soundcloud, link: 'https://soundcloud.com/user-833201349' },
    { id: 7, title: 'Airport Taxi', filter: 'TinkerIT', description: "Node middleware application using AWS EC2 instance", image: AirportTaxi },
    { id: 8, title: 'Savolainen osakunta', filter: 'TinkerIT', description: 'Website for a Savonian student organization', image: SavolainenOsakunta },
    { id: 10, title: 'Eristyspalvelu Kaasalainen', filter: 'TinkerIT', description: 'One-page website for a Finnish insulation company', image: Kaasalainen },
    { id: 9, title: 'Tietoturva-asiantuntija Heidi', filter: 'TinkerIT', description: 'Wordpress website for a course platform', image: Lamppu },
    { id: 3, title: 'StudyTracker', filter: 'Open Source', description: 'A database application for primary schools to create and conduct exams', image: StudyTracker, link: 'https://github.com/tuupsuu/StudyTracker' },
    { id: 6, title: 'Thai Market Olari', filter: 'TinkerIT', description: 'Website for an asian foodmarket in Espoo', image: ThaiMarketOlari },
    { id: 5, title: 'Online Store', filter: 'Open Source', description: 'An online store that uses an API to fetch product infomation from a Shopify store to display on the page', image: OnlineStore },
    { id: 4, title: 'Song Library', filter: 'Open Source', description: 'Database project where you create playlists and rate the songs you have listened to', image: SongLibrary, link: 'https://tinkerit.fi' },
    { id: 11, title: 'Väistelypeli', filter: 'Open Source', description: 'Simple platforming game that I made after my first programming course', image: Game },
  ];

  const filteredProjects = projects.filter((project) => filter === 'All' || project.filter === filter);

  const handleProjectClick = (project) => {
    onNavigate('project', project);
  };

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
            <div onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
              <div className="project-content">
                <img src={project.image} alt={project.title} className={`project-image project-image-${project.id}`} />
                <div className='project-description'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
