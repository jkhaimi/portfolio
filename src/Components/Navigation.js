import React from 'react';
import './Navigation.css'; 
import { useTranslation } from 'react-i18next';

function Navigation({ onNavigate, activeComponent }) {

  const { t } = useTranslation();

  return (
    <div className='Navigation'>
        <h3>Jesse Haimi</h3>
        <nav className="site-links">
        <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
            className={activeComponent === 'home' ? 'active' : ''}
          >
            {t('Koti')}
          </a>
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('projects'); }} 
            className={activeComponent === 'projects' ? 'active' : ''}
          >
            {t('NAV_PROJECTS')}
          </a>
          <a 
            href="#about-me" 
            onClick={(e) => { e.preventDefault(); onNavigate('about-me'); }} 
            className={activeComponent === 'about-me' ? 'active' : ''}
          >
            {t('NAV_ABOUT')}
          </a>
          <a 
            href="#resume" 
            onClick={(e) => { e.preventDefault(); onNavigate('resume'); }} 
            className={activeComponent === 'resume' ? 'active' : ''}
          >
            {t('NAV_RESUME')}
          </a>
          <a 
            href="#chess" 
            onClick={(e) => { e.preventDefault(); onNavigate('chess'); }} 
            className={activeComponent === 'chess' ? 'active' : ''}
          >
            Shakkipeli
          </a>
        </nav>
    </div>
  );
}

export default Navigation;
