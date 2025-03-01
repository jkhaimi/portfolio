import React from "react";
import "./Home.css";
import profilePic from "../Images/Jesse2.png";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJsSquare, FaJava, FaAws, FaGithub, FaDocker } from "react-icons/fa";
import { FaFutbol, FaMusic, FaChessKnight, FaDumbbell, FaBook  } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();

  return (
    <div className="home-container">
      <section className="intro">
        <div className="intro-text">
          <h1>Jesse Haimi</h1>
          <p className="intro-text-title">{t('TITLE')}</p>
          <p className="intro-text-title">{t('TITLE2')}</p>
        </div>
        <img src={profilePic} alt="Jesse Haimi" className="home-image" />
      </section>

      {/* Koulutus ja työkokemus vierekkäin */}
      <section className="experience">
        <div className="education home-box">
          <h2>{t("EDUCATION")}</h2>

        <div className="education-item">
            <p className="education-title">{t("JYU")}</p> 
            <p className="education-school">{t("JYU2")}</p>
            <span className="education-time">{t("JYU_TIME")}</span>
        </div>

        <div className="education-item">
            <p className="education-title">{t("LUMO")}</p> 
            <p className="education-school">{t("LUMO2")}</p>
            <span className="education-time">{t("LUMO_TIME")}</span>
        </div>

        </div>
        <div className="work home-box">
          <h2>{t("EXPERIENCE")}</h2>

          <div className="work-item">
            <p className="work-title">{t("TINKERIT_TITLE")}</p> 
            <p className="work-place">{t("TINKERIT")}</p>
            <span className="work-time">{t("TINKERIT_TIME")}</span>
            </div>

        <div className="work-item">
            <p className="work-title">{t("JYUJOB_TITLE")}</p> 
            <p className="work-place">{t("JYU2")}</p>
            <span className="work-time">{t("JYUJOB_TIME")}</span>
        </div>
        
        </div>
      </section>

        <section className="knowledge">
      {/* Teknologiat ja ikonit */}
      <div className="technologies home-box">
        <h2>Teknologiat</h2>
        <div className="tech-icons">
          <div className="tech-item">
            <TbBrandCSharp size={40} className="tech-icon" />
            <span className="tooltip">C#</span>
          </div>
          <div className="tech-item">
            <FaJava size={40} className="tech-icon" />
            <span className="tooltip">Java</span>
          </div>
          <div className="tech-item">
            <FaPython size={40} className="tech-icon" />
            <span className="tooltip">Python</span>
          </div>
          <div className="tech-item">
            <FaJsSquare size={40} className="tech-icon" />
            <span className="tooltip">JavaScript</span>
          </div>
          <div className="tech-item">
            <FaReact size={40} className="tech-icon" />
            <span className="tooltip">React</span>
          </div>
          <div className="tech-item">
            <FaNodeJs size={40} className="tech-icon" />
            <span className="tooltip">Node.js</span>
          </div>
          <div className="tech-item">
            <FaDatabase size={40} className="tech-icon" />
            <span className="tooltip">SQL</span>
          </div>
          <div className="tech-item">
            <FaAws size={40} className="tech-icon" />
            <span className="tooltip">AWS</span>
          </div>
          <div className="tech-item">
            <FaDocker size={40} className="tech-icon" />
            <span className="tooltip">Docker</span>
          </div>
          <div className="tech-item">
            <FaGithub size={40} className="tech-icon" />
            <span className="tooltip">Github</span>
          </div>
        </div>
      </div>

    <div className="hobbies-languages home-box">
    <h2>Harrastukset ja Kielitaito</h2>
    <div className="hobby-icons">
        <div className="hobby-item">
        <span className="tooltip">Football</span>
        <FaFutbol size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">Music Production</span>
        <FaMusic size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">Chess</span>
        <FaChessKnight size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">Gym</span>
        <FaDumbbell size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">Reading</span>
        <FaBook size={40} className="hobby-icon" />
        </div>
      <div className="language-item">
        <img src={require("../Images/finnish2.png")} alt="Finnish" className="language-icon" />
        <span className="tooltip">Suomi</span>
      </div>
      <div className="language-item">
        <img src={require("../Images/english2.png")} alt="English" className="language-icon" />
        <span className="tooltip">Englanti</span>
      </div>
      <div className="language-item">
        <img src={require("../Images/spanish2.png")} alt="Spanish" className="language-icon" />
        <span className="tooltip">Espanja</span>
      </div>
    </div>
    

      </div>
    </section>
    </div>
  );
};

export default Home;
