import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./i18n";

import Options from "./Components/Options";
import OptionsMobile from "./Components/OptionsMobile";
import InfoMobile from "./Components/InfoMobile";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import ChessGame from "./Components/ChessGame";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="content-wrapper">
          {/* Desktop only */}
          {!isMobile && <Options />}

          <div className="main-container">
            <div className="main-content">
              {isMobile && <InfoMobile />}

              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                      <Projects />
                    </>
                  }
                />

                <Route path="/resume" element={<Resume />} />
                <Route path="/chess" element={<ChessGame />} />
              </Routes>
            </div>
          </div>

          {/* Mobile only */}
          {isMobile && <OptionsMobile />}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
