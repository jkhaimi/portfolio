import React, { useContext } from 'react';
import '../Components/Projects.css';
import TinkerITImage from '../Images/TinkerIT.png'; 
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';

function TinkerIT() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("TINKERIT")}</h1>

      <div className="tinkerit-image-container">
        <img src={TinkerITImage} alt="TinkerIT Overview" className="tinkerit-image" />
      </div>

      <p className="tinkerit-description">{t("TINKERIT_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("VISIT_WEBSITE")}</h2>
        <a 
          href="https://tinkerit.fi"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          tinkerit.fi
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("BACKTO_PROJECTS")}</h2>
        <button
        className="tinkerit-button"
        onClick={() => handleNavigationClick('projects')}
      >
        {t("BACK")}
      </button>
      </div>
    </div>

  </div>
  );
}

export default TinkerIT;
