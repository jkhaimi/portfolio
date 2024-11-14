import React, { useState } from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: t('TINKERIT'), filter: 'TinkerIT', description: t('TINKERIT_DESCRIPTION'), image: Lamppu },
    { id: 2, title: t('MUSIC_TITLE'), filter: 'Freetime', description: t('MUSIC_DESCRIPTION'), image: Soundcloud },
    { id: 7, title: t('AIRPORTTAXI_TITLE'), filter: 'TinkerIT', description: t('AIRPORTTAXI_DESCRIPTION'), image: AirportTaxi },
    { id: 8, title: t('SAVOLAINEN_TITLE'), filter: 'TinkerIT', description: t('SAVOLAINEN_DESCRIPTION'), image: SavolainenOsakunta },
    { id: 10, title: t('KAASALAINEN_TITLE'), filter: 'TinkerIT', description: t('KAASALAINEN_DESCRIPTION'), image: Kaasalainen },
    { id: 9, title: t('HEIDI_TITLE'), filter: 'TinkerIT', description: t('HEIDI_DESCRIPTION'), image: Lamppu },
    { id: 3, title: t('STUDYTRACKER_TITLE'), filter: 'Open Source', description: t('STUDYTRACKER_DESCRIPTION'), image: StudyTracker },
    { id: 6, title: t('THAIMARKETOLARI_TITLE'), filter: 'TinkerIT', description: t('THAIMARKETOLARI_DESCRIPTION'), image: ThaiMarketOlari },
    { id: 5, title: t('ONLINESTORE_TITLE'), filter: 'Open Source', description: t('ONLINESTORE_DESCRIPTION'), image: OnlineStore },
    { id: 4, title: t('SONGLIBRARY_TITLE'), filter: 'Open Source', description: t('SONGLIBRARY_DESCRIPTION'), image: SongLibrary },
    { id: 11, title: t('PLATFORMER_TITLE'), filter: 'Open Source', description: t('PLATFORMER_DESCRIPTION'), image: Game },
  ];

  const filteredProjects = projects.filter((project) => filter === 'All' || project.filter === filter);

  const handleProjectClick = (project) => {
    onNavigate('project', project);
  };

  return (
    <div className="projects">
      <h3 className='Projects-title'>{t('MYWORK')}</h3>

      <div className="filter-buttons">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>{t('ALL')}</button>
        <button onClick={() => setFilter('Open Source')} className={filter === 'Open Source' ? 'active' : ''}>{t('OPENSOURCE')}</button>
        <button onClick={() => setFilter('TinkerIT')} className={filter === 'TinkerIT' ? 'active' : ''}>{t('TINKERIT')}</button>
        <button onClick={() => setFilter('Freetime')} className={filter === 'Freetime' ? 'active' : ''}>{t('FREETIME')}</button>
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
