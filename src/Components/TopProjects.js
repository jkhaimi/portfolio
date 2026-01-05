import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "./ContactModal";
import "./TopProjects.css";

/* TinkerIT */
import TinkerITSivu1 from "../Images/tinkerit-sivu1.webp";
import TinkerITSivu2 from "../Images/tinkerit-sivu2.webp";
import TinkerITSivu3 from "../Images/tinkerit-sivu3.webp";
import TinkerITSivu4 from "../Images/tinkerit-sivu4.webp";

/* SafkaStock */
import SafkaStockSivu1 from "../Images/safkastock1.webp";
import SafkaStockSivu2 from "../Images/safkastock2.webp";
import SafkaStockSivu4 from "../Images/safkastock4.webp";
import SafkaStockSivu5 from "../Images/safkastock5.webp";

/* OurHarvia */
import Harvia2 from "../Images/harvia2.webp";
import Harvia3 from "../Images/harvia3.webp";
import Harvia4 from "../Images/harvia4.webp";
import Harvia5 from "../Images/harvia5.webp";
  
function ProjectBlock({ project, reverse, onContactClick }) {
  const [step, setStep] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const { t } = useTranslation();

  const STEP_LABELS = [
    t("STEP_WHAT"),
    t("STEP_WHY"),
    t("STEP_HOW"),
    t("STEP_RESULT"),
  ];

  const next = () =>
    setStep((prev) => (prev === project.steps.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setStep((prev) => (prev === 0 ? project.steps.length - 1 : prev - 1));

  return (
    <>
      <div className={`top-project ${reverse ? "reverse" : ""}`}>
        {/* IMAGE */}
        <div
        className={`top-project-image ${
            project.type === "mobile" ? "mobile-carousel" : ""
        }`}
        >
          <button className="arrow left" onClick={prev}>‹</button>

          <div className="image-slider">
          <div
            className="image-track"
            style={{
                transform: `translateX(-${
                step * (project.type === "mobile" ? 109.5 : 100)
                }%)`,
            }}
            >
            {project.steps.map((s, i) => (
                <img
                key={i}
                src={project.steps[step].image}
                loading="lazy"
                decoding="async"              
                alt={project.title}
                onClick={() => setImageOpen(true)}
                />
            ))}
            </div>
          </div>

          <button className="arrow right" onClick={next}>›</button>
        </div>

        {/* CONTENT */}
        <div className="top-project-content">
          <div className="top-project-text">
            <h2>{project.title}</h2>
            {project.subtitle && (
              <span className="subtitle">{project.subtitle}</span>
            )}

            <span className="step-label">{STEP_LABELS[step]}</span>
            <p>{project.steps[step].text}</p>
          </div>

          {/* FIXED FOOTER */}
          <div className="top-project-footer">
            <div className="top-tech-list">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {project.linkType === "contact" ? (
              <button
                className="contact-project-link"
                onClick={onContactClick}
              >
                {project.linkText}
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {project.linkText}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE */}
      {imageOpen && (
        <div className="image-modal" onClick={() => setImageOpen(false)}>
            <img
            src={project.steps[step].image}
            loading="eager"
            decoding="async"
            alt={project.title}
            className={project.type === "mobile" ? "image-modal-mobile" : ""}
            onClick={() => setImageOpen(false)}
            />
        </div>
        )}
    </>
  );
}

function TopProjects() {
  const { t } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  const projects = [
    {
      title: "TinkerIT",
      steps: [
        { image: TinkerITSivu1, text: t("TINKERIT_WHAT") },
        { image: TinkerITSivu2, text: t("TINKERIT_PROBLEM") },
        { image: TinkerITSivu3, text: t("TINKERIT_SOLUTION") },
        { image: TinkerITSivu4, text: t("TINKERIT_RESULT") },
      ],
      technologies: ["React", "Node.js", "CSS", "Squarespace"],
      link: "https://tinkerit.fi",
      linkText: t("VISIT_WEBSITE"),
    },
    {
      title: "SafkaStock",
      steps: [
        { image: SafkaStockSivu1, text: t("SAFKASTOCK_WHAT") },
        { image: SafkaStockSivu2, text: t("SAFKASTOCK_PROBLEM") },
        { image: SafkaStockSivu5, text: t("SAFKASTOCK_SOLUTION") },
        { image: SafkaStockSivu4, text: t("SAFKASTOCK_RESULT") },
      ],
      technologies: ["GPT API", "Azure Document Intelligence", "PERN-stack"],
      linkType: "contact",
      linkText: t("WEBSITE_SOON"),
    },
    {
      title: "OurHarvia",
      type: "mobile",
      steps: [
        { image: Harvia4, text: t("OURHARVIA_WHAT") },
        { image: Harvia2, text: t("OURHARVIA_PROBLEM") },
        { image: Harvia3, text: t("OURHARVIA_SOLUTION") },
        { image: Harvia5, text: t("OURHARVIA_RESULT") },
      ],
      technologies: ["TypeScript", "ElevenLabs", "PostgreSQL"],
      link: "https://github.com/jkhaimi/OurHarvia",
      linkText: t("VIEW_CODE"),
    },
  ];

  return (
    <section className="top-projects">
      <h1>{t("TOP_PROJECTS_TITLE")}</h1>

      {projects.map((project, index) => (
        <ProjectBlock
          key={project.title}
          project={project}
          reverse={index % 2 === 1}
          onContactClick={() => setContactOpen(true)}
        />
      ))}

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </section>
  );
}

export default TopProjects;
