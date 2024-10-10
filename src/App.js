import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Options from './Components/Options';
import Info from './Components/Info';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe'; 
import Resume from './Components/Resume';
import './Components/i18n';

function App() {
  const [activeComponent, setActiveComponent] = useState('projects');

  const handleNavigationClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app">
      <Options />
      <div className="main-content">
        <Navigation onNavigate={handleNavigationClick} activeComponent={activeComponent} />
        {activeComponent === 'about-me' && <AboutMe />}
        {activeComponent === 'resume' && <Resume />} 
        {activeComponent === 'projects' && <Projects />}
      </div>
      <Info />
    </div>
  );
}

export default App;
