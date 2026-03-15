import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import ContactModal from "./ContactModal";
import "./Options.css";

function Options() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fi" : "en");
  };

  return (
    <>
      <nav className="options">
        <div className="options-inner">
          <button className="lang-button" onClick={toggleLanguage}>
            {i18n.language === "en" ? "FI" : "EN"}
          </button>

          <button
            className="mail-icon-button"
            onClick={() => setOpen(true)}
            aria-label="Open contact form"
          >
            <CiMail size={32} />
          </button>
        </div>
      </nav>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Options;
