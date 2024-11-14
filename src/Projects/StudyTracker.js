import React from 'react';
import '../Components/Projects.css';
import StudyTrackerImage1 from '../Images/studytracker1.png'; 
import StudyTrackerImage2 from '../Images/studytracker2.png'; 
import { useTranslation } from 'react-i18next';

function StudyTracker() {

  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("STUDYTRACKER_TITLE")}</h1>

      <div className="savolainen-image-container">
        <img src={StudyTrackerImage1} alt="TinkerIT Overview" className="studytracker-image1" />
        <img src={StudyTrackerImage2} alt="TinkerIT Overview" className="studytracker-image2" />
      </div>

      <p className="tinkerit-description">{t("STUDYTRACKER_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("CHECK_THE_CODE")}</h2>
        <a 
          href="https://github.com/tuupsuu/StudyTracker"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          github.com
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("BACKTO_PROJECTS")}</h2>
        <a 
          href="/"
          className="tinkerit-button"
        >
          {t("BACK")}
        </a>
      </div>
    </div>

  </div>
  );
}

export default StudyTracker;
