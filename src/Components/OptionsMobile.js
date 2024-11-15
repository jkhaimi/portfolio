import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './OptionsMobile.css';

function OptionsMobile() {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`options-mobile ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="language-toggle-mobile">
        <button
          className="lang-button-mobile"
          onClick={toggleLanguage}
        >
          {i18n.language === 'en' ? 'FI' : 'EN'}
        </button>
      </div>
    </nav>
  );
}

export default OptionsMobile;
