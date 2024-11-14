import React, { useContext } from 'react';
import '../Components/Projects.css';
import AirportTaxiImage from '../Images/AirportTaxi3.png'; 
import { useTranslation } from 'react-i18next';
import { NavigationContext } from '../App';

function AirportTaxi() {

  const { handleNavigationClick } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <div className="tinkerit">

      <h1 className='tinkerit-title'>{t("AIRPORTTAXI_TITLE")}</h1>

      <div className="tinkerit-image-container">
        <img src={AirportTaxiImage} alt="TinkerIT Overview" className="airporttaxi-image" />
      </div>

        <p className="tinkerit-description">{t("AIRPORTTAXI_TEXT")}</p>

      <div className='project-buttons'>
        <div className='button-container'>
        <h2 style={{textAlign: "center"}}>{t("VISIT_WEBSITE")}</h2>
        <a 
          href="https://www.airporttaxi.fi/"
          target="_blank" 
          rel="noopener noreferrer" 
          className="tinkerit-button"
        >
          airporttaxi.fi
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

export default AirportTaxi;
