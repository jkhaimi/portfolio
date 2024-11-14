import React, { useContext } from 'react';
import '../Components/Projects.css';
import ThaiMarketOlariImage from '../Images/ThaiMarket2.png'; 
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';

function ThaiMarketOlari() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("THAIMARKETOLARI_TITLE")}</h1>

      <div className="tinkerit-image-container">
        <img src={ThaiMarketOlariImage} alt="TinkerIT Overview" className="ThaiMarketOlari-image" />
      </div>

      <p className="tinkerit-description">{t("THAIMARKETOLARI_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("VISIT_WEBSITE")}</h2>
        <a 
          href="https://thaimarketolari.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="savo-button"
        >
          thaimarketolari.fi
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

export default ThaiMarketOlari;
