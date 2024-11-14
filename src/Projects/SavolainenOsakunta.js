import React, { useContext } from 'react';
import '../Components/Projects.css';
import SavoImage from '../Images/savo.png'; 
import SavoText from '../Images/savolainenText.png'; 
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';


function SavolainenOsakunta() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("SAVOLAINEN_TITLE")}</h1>

      <div className="savolainen-image-container">
        <img src={SavoImage} alt="TinkerIT Overview" className="savo-image1" />
        <img src={SavoText} alt="TinkerIT Overview" className="savo-image2" />
      </div>

      <p className="tinkerit-description">{t("SAVOLAINEN_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("VISIT_WEBSITE")}</h2>
        <a 
          href="https://savolainenosakunta.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="savo-button"
        >
          savolainenosakunta.fi
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

export default SavolainenOsakunta;
