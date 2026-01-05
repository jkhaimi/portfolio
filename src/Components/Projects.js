import React, { useState, useEffect } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";

import TinkerIT from "../Images/tinkerit4.png";
import TinkerITSivu1 from "../Images/tinkerit-sivu1.webp";
import TinkerITSivu2 from "../Images/tinkerit-sivu2.webp";
import TinkerITSivu3 from "../Images/tinkerit-sivu3.webp";
import TinkerITSivu4 from "../Images/tinkerit-sivu4.webp";

import SafkaStock from "../Images/safkastock4.png";
import SafkaStockSivu1 from "../Images/safkastock1.webp"
import SafkaStockSivu2 from "../Images/safkastock2.webp"
import SafkaStockSivu4 from "../Images/safkastock4.webp"
import SafkaStockSivu5 from "../Images/safkastock5.webp"

import Music from "../Images/music1.png";

import AirportTaxi from "../Images/AirportTaxi.webp";
import Movit1 from "../Images/movit1.webp";
import Movit2 from "../Images/movit2.webp";
import Movit3 from "../Images/movit3.webp";

import Kajastus from "../Images/kajastus.webp";
import Kajastus1 from "../Images/kajastus1.webp";
import Kajastus2 from "../Images/kajastus2.webp";
import Kajastus3 from "../Images/kajastus3.webp";
import Kajastus4 from "../Images/kajastus4.webp";

import NHL from "../Images/nhl1.png";
import NHLSivu1 from "../Images/nhl1.webp";
import NHLSivu2 from "../Images/nhl2.webp";
import NHLSivu3 from "../Images/nhl3.webp";
import NHLSivu4 from "../Images/nhl4.webp";

import JYU from "../Images/jyu1.png";
import JYUSivu1 from "../Images/jyu1.webp";
import JYUSivu2 from "../Images/jyu2.webp";
import JYUSivu3 from "../Images/jyu3.webp";
import JYUSivu4 from "../Images/jyu4.webp";

import Harvia from "../Images/harvia.png";
import Harvia2 from "../Images/harvia2.webp";
import Harvia3 from "../Images/harvia3.webp";
import Harvia4 from "../Images/harvia4.webp";
import Harvia5 from "../Images/harvia5.webp";

import Beat1 from "../Audio/jkl4.wav";
import Beat2 from "../Audio/JS1.wav";
import Beat3 from "../Audio/JS2.wav";
import Beat4 from "../Audio/ap6.wav";

import Unity from "../Images/unity.webp";
import Game1 from "../Images/game1.webp";
import Game2 from "../Images/game2.webp";
import Game3 from "../Images/game3.webp";

function AudioCard({ track, currentlyPlaying, setCurrentlyPlaying }) {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Pause other playing audio
    if (currentlyPlaying && currentlyPlaying !== audio) {
      currentlyPlaying.pause();
    }

    if (audio.paused) {
      audio.play();
      setCurrentlyPlaying(audio);
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent || 0);
  };

  // ✅ Clickable progress bar
  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;

    audio.currentTime = percent * audio.duration;
  };

  return (
    <div className="audio-card">
      <div className="audio-title">{track.name}</div>

      <button className="audio-play-btn" onClick={togglePlay}>
        {isPlaying ? "❚❚" : "▶"}
      </button>

      <div className="audio-progress" onClick={handleSeek}>
        <div
          className="audio-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
      />
    </div>
  );
}

function Projects() {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);


  const projectData = [
    // {
    //   id: 1,
    //   title: "TinkerIT",
    //   icon: TinkerIT,
    //   screenshots: [TinkerITSivu1, TinkerITSivu2, TinkerITSivu3, TinkerITSivu4],
    //   description: t("TINKERIT_TEXT"),
    //   technologies: ["React", "JavaScript", "CSS", "Node.js", "SquareSpace"],
    //   linkText: t("VISIT_OURWEBSITE"),
    //   url: "https://tinkerit.fi/",
    // },
    // {
    //   id: 2,
    //   title: "SafkaStock",
    //   icon: SafkaStock,
    //   screenshots: [SafkaStockSivu1, SafkaStockSivu2, SafkaStockSivu4, SafkaStockSivu5],
    //   description: t("SAFKASTOCK_TEXT"),
    //   technologies: ["GPT API", "Azure Document Intelligence", "PERN-stack"],
    //   linkText: t("WEBSITE_SOON"),
    //   url: "mailto:jesse.haimi@icloud.com",
    // },
    {
      id: 3,
      title: t("JYU_RUOKAILUAPP_TITLE"),
      type: "mobile",
      icon: JYU,
      screenshots: [JYUSivu1, JYUSivu2, JYUSivu3, JYUSivu4],
      description: t("JYU_RUOKAILUAPP_TEXT"),
      technologies: ["PostgreSQL", "React", "Node.js", "AWS"],
      linkText: t("VISIT_APP"),
      url: "https://jyu-ruokailu-app-kappa.vercel.app/",
    },
    {
      id: 4,
      title: t("NHL_TITLE"),
      type: "mobile",
      icon: NHL,
      screenshots: [NHLSivu1, NHLSivu2, NHLSivu3, NHLSivu4],
      description: t("NHL_TEXT"),
      technologies: ["React", "Node.js", "AWS"],
      linkText: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/NHL-scoreDB",
    },
    // {
    //   id: 5,
    //   title: "OurHarvia",
    //   type: "mobile",
    //   icon: Harvia,
    //   screenshots: [Harvia4, Harvia2, Harvia5, Harvia3],
    //   description: t("OURHARVIA_TEXT"),
    //   technologies: ["ElevenLabs", "PostgreSQL", "TypeScript", "Tailwind"],
    //   linkText: t("VIEW_CODE"),
    //   url: "https://github.com/jkhaimi/OurHarvia",
    // },
    {
      id: 6,
      title: t("MUSIC_TITLE"),
      type: "audio",
      icon: Music,
      tracks: [
        { src: Beat1, name: "Song 1" },
        { src: Beat2, name: "Song 2" },
        { src: Beat3, name: "Song 3" },
        { src: Beat4, name: "Song 4" },
      ],
      description: t("MUSIC_TEXT"),
      technologies: ["FL Studio", "Logic Pro"],
      linkText: t("CHECKOUT_MUSIC"),
      url: "https://soundcloud.com/jkhaimi",
    },    
    {
      id: 7,
      title: t("AIRPORTTAXI_TITLE"),
      icon: AirportTaxi,
      screenshots: [Movit1, Movit2, Movit3],
      description: t("AIRPORTTAXI_TEXT"),
      technologies: ["Node.js", "AWS"],
      linkText: t("VISIT_WEBSITE"),
      url: "https://www.airporttaxi.fi/",
    },
    {
      id: 9,
      title: t("KAJASTUS_TITLE"),
      icon: Kajastus,
      screenshots: [Kajastus1, Kajastus2, Kajastus3, Kajastus4],
      description: t("KAJASTUS_TEXT"),
      technologies: ["SquareSpace"],
      linkText: t("VISIT_WEBSITE"),
      url: "https://www.tikkurilankajastus.fi/",
    },
    {
      id: 10,
      title: t("GAME_TITLE"),
      icon: Unity,
      screenshots: [Game1, Game2, Game3],
      description: t("GAME_TEXT"),
      technologies: ["Unity"],
      linkText: t("VIEW_CODE"),
      url: "https://github.com/jkhaimi/1v1-Game",
    },
  ];
  
  const openProject = (project) => {
    setActiveProject(project);
    setCurrentImage(0);
  };

  const closeProject = () => setActiveProject(null);

  const getCarouselItems = () => {
    if (!activeProject) return [];
    return activeProject.type === "audio"
      ? activeProject.tracks
      : activeProject.screenshots;
  };
  

  const nextImage = () => {
    setCurrentImage((prev) => {
      const items = getCarouselItems();
      if (!items.length) return 0;
  
      const maxIndex = isMobile ? items.length - 1 : items.length - 2;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => {
      const items = getCarouselItems();
      if (!items.length) return 0;
  
      const maxIndex = isMobile ? items.length - 1 : items.length - 2;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };
  
  
  useEffect(() => {
    if (!activeProject) return;
  
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeProject();
      }
  
      if (e.key === "ArrowRight") {
        nextImage();
      }
  
      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, nextImage, prevImage]);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="projects" id="projects">
      <h1>{t("PROJECTS_TITLE")}</h1>

      {/* PROJECT LIST */}
      <div className="project-list">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-row"
            onClick={() => openProject(project)}
          >
            <img
              src={project.icon}
              alt={project.title}
              className="project-row-icon"
            />
            <span className="project-row-title">{project.title}</span>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeProject}>
              ✕
            </button>

            {/* HEADER */}
            <div className="modal-header">
              <div className="modal-title">
              <img
                src={activeProject.icon}
                alt={activeProject.title}
                className="modal-icon"
              />
              <h2>{activeProject.title}</h2>
              </div>
            </div>

            {/* CAROUSEL / AUDIO */}
            {activeProject.type === "audio" ? (
            <div className="carousel audio-carousel">
              {activeProject.tracks.length > 1 && (
                <button className="carousel-btn left" onClick={prevImage}>
                  ‹
                </button>
              )}

              <div className="carousel-window">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${currentImage * (isMobile ? 100 : 50)}%)`,
                  }}
                >
                  {activeProject.tracks.map((track, index) => (
                    <div className="carousel-slide audio-slide" key={index}>
                      <AudioCard
                        track={track}
                        currentlyPlaying={currentlyPlaying}
                        setCurrentlyPlaying={setCurrentlyPlaying}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {activeProject.tracks.length > 1 && (
                <button className="carousel-btn right" onClick={nextImage}>
                  ›
                </button>
              )}
            </div>
          ) : (

              <div
                className={`carousel ${
                  activeProject.type === "mobile" ? "carousel-mobile" : ""
                }`}
              >
                {getCarouselItems().length > (isMobile ? 1 : 2) && (
                  <button className="carousel-btn left" onClick={prevImage}>
                    ‹
                  </button>
                )}

                <div className="carousel-window">
                  <div
                    className="carousel-track"
                    style={{
                      transform: `translateX(-${currentImage * (isMobile ? 107.5 : 50)}%)`,
                    }}
                  >
                    {activeProject.screenshots.map((img, index) => (
                      <div className="carousel-slide" key={index}>
                        <img src={img} alt={`${activeProject.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {getCarouselItems().length > (isMobile ? 1 : 2) && (
                  <button className="carousel-btn right" onClick={nextImage}>
                    ›
                  </button>
                )}
              </div>
            )}


            {/* DESCRIPTION */}
            <p className="modal-description">
              {activeProject.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="tech-list">
              {activeProject.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {/* LINK */}
            <a
              href={activeProject.url}
              target="_blank"
              rel="noreferrer"
              className="modal-link"
            >
              {activeProject.linkText}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
