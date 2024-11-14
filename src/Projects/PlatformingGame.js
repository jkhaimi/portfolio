import React, { useContext } from 'react';
import '../Components/Projects.css';
import { useTranslation } from 'react-i18next';
import PlatformerImage from '../Images/platformer.png'; 
import { NavigationContext } from '../App';

function PlatformingGame() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("PLATFORMER_TITLE")}</h1>

      <div className="tinkerit-image-container">
        <img src={PlatformerImage} alt="TinkerIT Overview" className="platformer-image" />
      </div>

      <p className="tinkerit-description">{t("PLATFORMER_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("CHECK_THE_CODE")}</h2>
        <a 
          href="https://gitlab.jyu.fi/jkhaimi/ohj1ht"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          gitlab.jyu.fi
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

export default PlatformingGame;
