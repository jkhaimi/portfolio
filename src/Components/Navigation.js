import React from 'react';
import './Navigation.css'; 

function Navigation({ onNavigate, activeComponent }) {
  return (
    <div className='Navigation'>
        <h3>Jesse Haimi</h3>
        <nav className="site-links">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('projects'); }} 
            className={activeComponent === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
          <a 
            href="#about-me" 
            onClick={(e) => { e.preventDefault(); onNavigate('about-me'); }} 
            className={activeComponent === 'about-me' ? 'active' : ''}
          >
            About Me
          </a>
          <a 
            href="#resume" 
            onClick={(e) => { e.preventDefault(); onNavigate('resume'); }} 
            className={activeComponent === 'resume' ? 'active' : ''}
          >
            Resume
          </a>
        </nav>
    </div>
  );
}

export default Navigation;
