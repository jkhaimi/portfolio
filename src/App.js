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
import TinkerIT from './Projects/TinkerIT';
import Music from './Projects/Music';
import AirportTaxi from './Projects/AirportTaxi';
import SavolainenOsakunta from './Projects/SavolainenOsakunta';
import Kaasalainen from './Projects/Kaasalainen';
import Heidi from './Projects/Heidi';
import StudyTracker from './Projects/StudyTracker';
import ThaiMarketOlari from './Projects/ThaiMarketOlari';
import './Components/i18n';

function App() {
  const [activeComponent, setActiveComponent] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
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

  const handleNavigationClick = (component, project = null) => {
    setActiveComponent(component);
    setSelectedProject(project);
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
            {activeComponent === 'projects' && <Projects onNavigate={handleNavigationClick} />} {/* Pass onNavigate to Projects */}
            {activeComponent === 'project' && selectedProject && (
              <>
                {selectedProject.title === 'TinkerIT' && <TinkerIT />}
                {selectedProject.title === 'My Music' && <Music />}
                {selectedProject.title === 'Airport Taxi' && <AirportTaxi />}
                {selectedProject.title === 'Savolainen osakunta' && <SavolainenOsakunta />}
                {selectedProject.title === 'Eristyspalvelu Kaasalainen' && <Kaasalainen />}
                {selectedProject.title === 'Tietoturva-asiantuntija Heidi' && <Heidi />}
                {selectedProject.title === 'StudyTracker' && <StudyTracker />}
                {selectedProject.title === 'Thai Market Olari' && <ThaiMarketOlari />}
              </>
            )}

          </div>
          {!isMobile && <Info />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
