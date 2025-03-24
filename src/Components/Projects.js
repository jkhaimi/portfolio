import React, { useState } from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';
import TinkerIT from '../Images/tinkerit2.png';
import Music from '../Images/music.png';
import AirportTaxi from '../Images/AirportTaxi.webp';
import Savolainen from '../Images/savolainen.png';
import Kaasalainen from '../Images/eristys.png';
import StudyTracker from '../Images/Studytracker2.png';
import ThaiMarketOlari from '../Images/thaimarketolari.png';
// import ThaiMarketOlari from '../Images/thaimarketolari2.png'; // Palatsi kuva
import OnlineStore from '../Images/nettikauppa.png';
import SongLibrary from '../Images/BiisiKirjasto.png';
import Game from '../Images/Game.png';
import NHL from '../Images/NHL.png';
import JYU from '../Images/JYU-RuokailuApp.png';
import Agecounter from '../Images/Agecounter.png';
// import { RiSkipLeftLine } from "react-icons/ri";

function Projects() {

  const { t } = useTranslation();

  const [filter, setFilter] = useState('All');

  const projectData = [
    { 
      id: 1,
      title: "TinkerIT", 
      image: TinkerIT,
      description: t('TINKERIT_TEXT'), 
      technologies: ["React", "JavaScript", "CSS", "Node.js", "SquareSpace"],
      link: t('VISIT_OURWEBSITE'),
      url: "https://tinkerit.fi/",
      category: "TinkerIT"
    },
    { 
      id: 12,
      title: t('JYU_RUOKAILUAPP_TITLE'), 
      image: JYU,
      description: t('JYU_RUOKAILUAPP_TEXT'), 
      technologies: ["PostreSQL", "React", "JavaScript", "Node.js", "AWS"],
      link: t('VISIT_APP'),
      url: "https://jyu-ruokailu-app-kappa.vercel.app/",
      open: "Open source",
      category: "Open source"
    },
    { 
      id: 11,
      title: t('NHL_TITLE'), 
      image: NHL,
      description: t('NHL_TEXT'), 
      technologies: ["React", "JavaScript", "Node.js", "AWS"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/NHL-scoreDB",
      open: "Open source",
      category: "Open source"
    },
    { 
      id: 2,
      title: t('MUSIC_TITLE'), 
      image: Music,
      description: t('MUSIC_TEXT'), 
      technologies: ["FL Studio 20", "Logic Pro"],
      link: t("CHECKOUT_MUSIC"),
      url: "https://soundcloud.com/jkhaimi",
      category: "Other"
    },
    { 
      id: 3,
      title: t('AIRPORTTAXI_TITLE'), 
      image: AirportTaxi,
      description: t('AIRPORTTAXI_TEXT'), 
      technologies: ["Node.js", "AWS"], 
      link: t("VISIT_WEBSITE"),
      url: "https://www.airporttaxi.fi/",
      category: "TinkerIT"
    },
    { 
      id: 13,
      title: t('AGECOUNTER_TITLE'), 
      image: Agecounter,
      description: t('AGECOUNTER_TEXT'), 
      technologies: ["JavaScript, CSS"],
      link: t('VIEW_CODE'),
      url: "https://github.com/jkhaimi/ikalaskuri",
      open: "Open source",
      category: "Open source"
    },
    { 
      id: 4,
      title: t('SAVOLAINEN_TITLE'), 
      image: Savolainen,
      description: t('SAVOLAINEN_TEXT'), 
      technologies: ["SquareSpace"],
      link: t("VISIT_WEBSITE"),
      url: "https://savolainenosakunta.fi/",
      category: "TinkerIT"
    },
    { 
      id: 5,
      title: t('KAASALAINEN_TITLE'), 
      image: Kaasalainen,
      description: t('KAASALAINEN_TEXT'), 
      technologies: ["React", "CSS"],
      link: t("VISIT_WEBSITE"),
      url: "https://eristys.fi/",
      category: "TinkerIT"
    },
    { 
      id: 6,
      title: t('STUDYTRACKER_TITLE'), 
      image: StudyTracker,
      description: t('STUDYTRACKER_TEXT'), 
      technologies: ["Docker", "MySQL", "React", "CSS"], 
      link: t("VIEW_CODE"),
      url: "https://github.com/tuupsuu/StudyTracker",
      open: "Open source",
      category: "Open source"
    },
    { 
      id: 7,
      title: t('THAIMARKETOLARI_TITLE'), 
      image: ThaiMarketOlari,
      description: t('THAIMARKETOLARI_TEXT'), 
      technologies: ["Docker", "MySQL", "React", "CSS"],
      link: t("VISIT_WEBSITE"),
      url: "https://thaimarketolari.fi/",
      category: "TinkerIT"
    },
    { 
      id: 8,
      title: t('ONLINESTORE_TITLE'), 
      image: OnlineStore,
      description: t('ONLINESTORE_TEXT'), 
      technologies: ["JavaScript", "HTML", "CSS"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/nettikauppa",
      open: "Open source",
      category: "Open source"
    },
    { 
      id: 9,
      title: t('SONGLIBRARY_TITLE'), 
      image: SongLibrary,
      description: t('SONGLIBRARY_TEXT'), 
      technologies: ["Java", "SceneBuilder"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/ohjelmointi-2-harjoitustyo",
      open: "Open source",
      category: "Open source"
    },
    { 
      id: 10,
      title: t('PLATFORMER_TITLE'), 
      image: Game,
      description: t('PLATFORMER_TEXT'), 
      technologies: ["C#"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/ohjelmointi-1-harjoitustyo",
      open: "Open source",
      category: "Open source"
    }
  ];

  const filteredProjects = projectData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'TinkerIT' && project.category === 'TinkerIT') return true;
    if (filter === 'Open source' && project.category === 'Open source') return true;
    return filter === 'Other' && project.category !== 'TinkerIT' && project.category !== 'Open source';
  });

  return (
    <div className="projects">
      <h1>{t("MYWORK")}</h1>
      <div className="filter-buttons">
        <button 
          onClick={() => setFilter('All')} 
          className={filter === 'All' ? 'active' : ''}
        >
          {t("ALL")}
        </button>
        <button 
          onClick={() => setFilter('TinkerIT')} 
          className={filter === 'TinkerIT' ? 'active' : ''}
        >
          {t("TINKERIT")}
        </button>
        <button 
          onClick={() => setFilter('Open source')} 
          className={filter === 'Open source' ? 'active' : ''}
        >
          {"Open source"}
        </button>
        <button 
          onClick={() => setFilter('Other')} 
          className={filter === 'Other' ? 'active' : ''}
        >
          {t("OTHER")}
        </button>
      </div>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className={`project-item project-${project.id}`}>
            <div className="project-content">
              <div className="project-title-container-mobile">
                <h3 className='projects-mobile-title'>{project.title}</h3>
                <span className="project-open">{project.open}</span>
              </div>
              <div className={`project-imagebox project-image-${project.id}`}>
                <img src={project.image} alt={project.title} className={`project-img project-img-${project.id}`} />
              </div>
              <div className={` project-info-container project-info-container-${project.id}`}>
                <div className={`project-info project-info-${project.id}`}>
                  <div className="project-title-container">
                    <h3>{project.title}</h3> 
                    <span className="project-open">{project.open}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-box">{tech}</span>
                    ))}
                  </div>
                </div>
                <div 
                  className="project-link" 
                  onClick={() => window.open(project.url, "_blank")} 
                >
                  <strong>{project.link}</strong>
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