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
// import { RiSkipLeftLine } from "react-icons/ri";

// const projects = [
//   { id: 1, title: t('TINKERIT'), filter: 'TinkerIT', description: t('TINKERIT_DESCRIPTION'), technologies: "Kissa", image: Lamppu },
//   { id: 2, title: t('MUSIC_TITLE'), filter: 'Freetime', description: t('MUSIC_DESCRIPTION'), image: Soundcloud },
//   { id: 7, title: t('AIRPORTTAXI_TITLE'), filter: 'TinkerIT', description: t('AIRPORTTAXI_DESCRIPTION'), image: AirportTaxi },
//   { id: 8, title: t('SAVOLAINEN_TITLE'), filter: 'TinkerIT', description: t('SAVOLAINEN_DESCRIPTION'), image: SavolainenOsakunta },
//   { id: 10, title: t('KAASALAINEN_TITLE'), filter: 'TinkerIT', description: t('KAASALAINEN_DESCRIPTION'), image: Kaasalainen },
//   { id: 9, title: t('HEIDI_TITLE'), filter: 'TinkerIT', description: t('HEIDI_DESCRIPTION'), image: Lamppu },
//   { id: 3, title: t('STUDYTRACKER_TITLE'), filter: 'Open Source', description: t('STUDYTRACKER_DESCRIPTION'), image: StudyTracker },
//   { id: 6, title: t('THAIMARKETOLARI_TITLE'), filter: 'TinkerIT', description: t('THAIMARKETOLARI_DESCRIPTION'), image: ThaiMarketOlari },
//   { id: 5, title: t('ONLINESTORE_TITLE'), filter: 'Open Source', description: t('ONLINESTORE_DESCRIPTION'), image: OnlineStore },
//   { id: 4, title: t('SONGLIBRARY_TITLE'), filter: 'Open Source', description: t('SONGLIBRARY_DESCRIPTION'), image: SongLibrary },
//   { id: 11, title: t('PLATFORMER_TITLE'), filter: 'Open Source', description: t('PLATFORMER_DESCRIPTION'), image: Game },
// ];




function Projects() {

  const { t } = useTranslation();

  // const filteredProjects = projects.filter((project) => filter === 'All' || project.filter === filter);

  const projectData = [
    { 
      id: 1,
      title: "TinkerIT", 
      image: TinkerIT,
      description: t('TINKERIT_TEXT'), 
      technologies: ["React", "JavaScript", "CSS", "Node.js", "SquareSpace"],
      link: t('VISIT_OURWEBSITE'),
      url: "https://tinkerit.fi/"
    },
    { 
      id: 12,
      title: t('JYU_RUOKAILUAPP_TITLE'), 
      image: JYU,
      description: t('JYU_RUOKAILUAPP_TEXT'), 
      technologies: ["PostreSQL", "React", "JavaScript", "Node.js", "AWS"],
      link: t('VISIT_APP'),
      url: "https://jyu-ruokailu-app-kappa.vercel.app/",
      open: "Open source"
    },
    { 
      id: 2,
      title: t('MUSIC_TITLE'), 
      image: Music,
      description: t('MUSIC_TEXT'), 
      technologies: ["FL Studio 20", "Logic Pro"],
      link: t("CHECKOUT_MUSIC"),
      url: "https://soundcloud.com/jkhaimi"
    },
    { 
      id: 11,
      title: t('NHL_TITLE'), 
      image: NHL,
      description: t('NHL_TEXT'), 
      technologies: ["React", "JavaScript", "Node.js", "AWS"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/NHL-scoreDB",
      open: "Open source"
    },
    { 
      id: 3,
      title: t('AIRPORTTAXI_TITLE'), 
      image: AirportTaxi,
      description: t('AIRPORTTAXI_TEXT'), 
      technologies: ["Node.js", "AWS"], 
      link: t("VISIT_WEBSITE"),
      url: "https://www.airporttaxi.fi/"
    },
    { 
      id: 4,
      title: t('SAVOLAINEN_TITLE'), 
      image: Savolainen,
      description: t('SAVOLAINEN_TEXT'), 
      technologies: ["SquareSpace"],
      link: t("VISIT_WEBSITE"),
      url: "https://savolainenosakunta.fi/"
    },
    { 
      id: 5,
      title: t('KAASALAINEN_TITLE'), 
      image: Kaasalainen,
      description: t('KAASALAINEN_TEXT'), 
      technologies: ["React", "CSS"],
      link: t("VISIT_WEBSITE"),
      url: "https://eristys.fi/"
    },
    { 
      id: 6,
      title: t('STUDYTRACKER_TITLE'), 
      image: StudyTracker,
      description: t('STUDYTRACKER_TEXT'), 
      technologies: ["Docker", "MySQL", "React", "CSS"], 
      link: t("VIEW_CODE"),
      url: "https://github.com/tuupsuu/StudyTracker",
      open: "Open source"
    },
    { 
      id: 7,
      title: t('THAIMARKETOLARI_TITLE'), 
      image: ThaiMarketOlari,
      description: t('THAIMARKETOLARI_TEXT'), 
      technologies: ["Docker", "MySQL", "React", "CSS"],
      link: t("VISIT_WEBSITE"),
      url: "https://thaimarketolari.fi/"
    },
    { 
      id: 8,
      title: t('ONLINESTORE_TITLE'), 
      image: OnlineStore,
      description: t('ONLINESTORE_TEXT'), 
      technologies: ["JavaScript", "HTML", "CSS"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/nettikauppa",
      open: "Open source"
    },
    { 
      id: 9,
      title: t('SONGLIBRARY_TITLE'), 
      image: SongLibrary,
      description: t('SONGLIBRARY_TEXT'), 
      technologies: ["Java", "SceneBuilder"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/ohjelmointi-2-harjoitustyo",
      open: "Open source"
    },
    { 
      id: 10,
      title: t('PLATFORMER_TITLE'), 
      image: Game,
      description: t('PLATFORMER_TEXT'), 
      technologies: ["C#"],
      link: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/ohjelmointi-1-harjoitustyo",
      open: "Open source"
    }
  ];


   return (
    <div className="projects">
      <h1>{t("MYWORK")}</h1>
      <div className="project-list">
        {projectData.map((project) => (
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
};

export default Projects;
