import React from 'react';
import { useTranslation } from 'react-i18next';
import './Options.css';

function Options() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="options">
      <div className="language-toggle">
        <button 
          className="lang-button" 
          onClick={toggleLanguage}
        >
          {i18n.language === 'en' ? 'FI' : 'EN'}
        </button>
      </div>
    </nav>
  );
}

export default Options;
