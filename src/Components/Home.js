import React from "react";
import "./Home.css";
import profilePic from "../Images/Jesse2.webp";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJsSquare, FaJava, FaAws, FaGithub, FaDocker } from "react-icons/fa";
import { FaFutbol, FaMusic, FaChessKnight, FaDumbbell, FaBook, FaCode } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();

  return (
    <div className="home-container">


      {/* Koulutus ja työkokemus vierekkäin */}
      {/* <section className="experience">
        <div className="education home-box">
          <h2>{t("EDUCATION")}</h2>

          <div className="education-item">
            <p className="education-title">{t("JYU_2")}</p> 
            <p className="education-school">{t("JYU2_2")}</p>
            <span className="education-time">{t("JYU_TIME_2")}</span>
        </div>

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
            <p className="work-title">{t("SAFKASTOCK_TITLE")}</p> 
            <p className="work-place">SafkaStock</p>
            <span className="work-time">{t("SAFKASTOCK_TIME")}</span>
            </div>


        <div className="work-item">
            <p className="work-title">{t("JYUJOB_TITLE")}</p> 
            <p className="work-place">{t("JYU2")}</p>
            <span className="work-time">{t("JYUJOB_TIME")}</span>
        </div>

          <div className="work-item">
            <p className="work-title">{t("TINKERIT_TITLE")}</p> 
            <p className="work-place">{t("TINKERIT")}</p>
            <span className="work-time">{t("TINKERIT_TIME")}</span>
            </div>

        </div>
      </section> */}

        <section className="knowledge">
      {/* Teknologiat ja ikonit */}
      <div className="technologies home-box">
        <h2>{t("TECHNOLOGIES")}</h2>
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
            <FaGithub size={40} className="tech-icon" />
            <span className="tooltip">Github</span>
          </div>
          <div className="tech-item">
            <FaDocker size={40} className="tech-icon tech-icon-mobile" />
            <span className="tooltip">Docker</span>
          </div>
        </div>
      </div>

    <div className="hobbies-languages home-box">
    <h2>{t("HOBBYS")}</h2>
    <div className="hobby-icons">
        <div className="hobby-item">
        <span className="tooltip">{t("FOOTBALL")}</span>
        <FaFutbol size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">{t("MUSICPRODUCTION")}</span>
        <FaMusic size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">{t("CHESS")}</span>
        <FaChessKnight size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">{t("GYM")}</span>
        <FaDumbbell size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item">
        <span className="tooltip">{t("READING")}</span>
        <FaBook size={40} className="hobby-icon" />
        </div>
        <div className="hobby-item hobby-item-mobile">
        <span className="tooltip">{t("CODING")}</span>
        <FaCode size={40} className="hobby-icon" />
        </div>
      <div className="language-item">
        <img src={require("../Images/finnish2.png")} alt="Finnish" className="language-icon" />
        <span className="tooltip">{t("FINNISH")}</span>
      </div>
      <div className="language-item">
        <img src={require("../Images/english2.png")} alt="English" className="language-icon" />
        <span className="tooltip">{t("ENGLISH")}</span>
      </div>
      <div className="language-item">
        <img src={require("../Images/spanish2.png")} alt="Spanish" className="language-icon" />
        <span className="tooltip">{t("SPANISH")}</span>
      </div>
    </div>
    

      </div>
    </section>
    </div>
  );
};

export default Home;
