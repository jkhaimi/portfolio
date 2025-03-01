import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Options from './Components/Options';
import OptionsMobile from './Components/OptionsMobile';
import Info from './Components/Info';
import Home from './Components/Home';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe'; 
import Resume from './Components/Resume';
import InfoMobile from './Components/InfoMobile';
import Footer from './Components/Footer';
import './i18n';
import ChessGame from './Components/ChessGame';

export const NavigationContext = React.createContext();

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
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
  }

  return (
    <NavigationContext.Provider value={{ handleNavigationClick }}>
      <div className="app">
        <div className="content-wrapper">
          <Options />
          <div className="main-container">
            <div className="main-content">
              <Navigation onNavigate={handleNavigationClick} activeComponent={activeComponent} />
              {isMobile && <InfoMobile />}
              {activeComponent === 'home' && <Home/>}
              {activeComponent === 'projects' && <Projects/>}
              {activeComponent === 'about-me' && <AboutMe />}
              {activeComponent === 'resume' && <Resume />}
              {activeComponent === 'chess' && <ChessGame/>}
            </div>
            {/* {!isMobile && <Info />} */}
          </div>
          {isMobile && <OptionsMobile />}
        </div>
        <Footer />
      </div>
    </NavigationContext.Provider>
  );
}

export default App;
