import React, { useContext } from 'react';
import '../Components/Projects.css';
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';

function Heidi() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("HEIDI_TITLE")}</h1>
      <h2 className='heidi-title'>{t("HEIDI_TITLE2")}</h2>

      <p className="tinkerit-description">{t("HEIDI_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("VISIT_WEBSITE")}</h2>
        <a 
          href="https://www.tietoturva-asiantuntija.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="savo-button"
        >
          tietoturva-asiantuntija.fi
        </a>
      </div>

      <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("BACKTO_PROJECTS")}</h2>
        <button
        className="savo-button"
        onClick={() => handleNavigationClick('projects')}
      >
        {t("BACK")}
      </button>
      </div>
    </div>

  </div>
  );
}

export default Heidi;
