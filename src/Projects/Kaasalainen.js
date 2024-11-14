import React, { useContext } from 'react';
import '../Components/Projects.css';
import KaasalainenImage from '../Images/kaasalainen.png'; 
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';


function Kaasalainen() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("KAASALAINEN_TITLE")}</h1>

      <div className="tinkerit-image-container">
        <img src={KaasalainenImage} alt="TinkerIT Overview" className="kaasalainen-image" />
      </div>

      <p className="tinkerit-description">{t("KAASALAINEN_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("VISIT_WEBSITE")}</h2>
        <a 
          href="https://eristys.fi"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          eristys.fi
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

export default Kaasalainen;
