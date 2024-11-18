import React from 'react';
import './Resume.css';
import { useTranslation } from 'react-i18next';

function Resume() {

  const { i18n } = useTranslation();
  const isMobile = window.innerWidth <= 750;
  const resumeFile = i18n.language === 'en' ? 'https://jkhaimi.github.io/portfolio/CV-English.pdf' : 'https://jkhaimi.github.io/portfolio/CV-Suomi.pdf';

  return (
    <div className="resume">
      <h2>{i18n.language === 'en' ? 'My Resume' : 'Ansioluetteloni'}</h2>
      {isMobile ? (
        // Avaa PDF uudessa välilehdessä mobiililaitteilla
        <a href={resumeFile} className="mobile-link" target="_blank" rel="noopener noreferrer">
          {i18n.language === 'en' ? 'Open My Resume' : 'Avaa ansioluetteloni'}
        </a>
      ) : (
        // Näytä iframe tietokoneella
        <iframe
          src={resumeFile}
          width="70%"
          height="1050em"
          title={i18n.language === 'en' ? 'Resume' : 'Ansioluettelo'}
          className="CV"
        />
      )}
    </div>
  );
}

export default Resume;
