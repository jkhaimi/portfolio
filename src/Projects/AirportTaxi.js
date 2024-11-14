import React from 'react';
import '../Components/Projects.css';
import AirportTaxiImage from '../Images/AirportTaxi3.png'; 
import { useTranslation } from 'react-i18next';

function AirportTaxi() {

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

export default AirportTaxi;
