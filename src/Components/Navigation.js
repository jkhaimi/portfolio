import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();

  return (
    <div className="Navigation">
      <h3>Jesse Haimi</h3>

      <nav className="site-links">
        <NavLink to="/" end>
          {t("NAV_HOME")}
        </NavLink>

        <NavLink to="/projects">
          {t("NAV_PROJECTS")}
        </NavLink>

        <NavLink to="/about">
          {t("NAV_ABOUT")}
        </NavLink>

        {/*
        <NavLink to="/chess">
          Shakkipeli
        </NavLink>
        */}
      </nav>
    </div>
  );
}

export default Navigation;
