import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Options from './Components/Options';
import Info from './Components/Info';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe'; 
import Resume from './Components/Resume';
import InfoMobile from './Components/InfoMobile';
import Footer from './Components/Footer';
import './Components/i18n';

function App() {
  const [activeComponent, setActiveComponent] = useState('projects');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigationClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app">
      <div className="content-wrapper">
        <Options />
        <div className="main-container">
          <div className="main-content">
            <Navigation onNavigate={handleNavigationClick} activeComponent={activeComponent} />
            {isMobile && <InfoMobile />}
            {activeComponent === 'about-me' && <AboutMe />}
            {activeComponent === 'resume' && <Resume />} 
            {activeComponent === 'projects' && <Projects />}
          </div>
          {!isMobile && <Info />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
