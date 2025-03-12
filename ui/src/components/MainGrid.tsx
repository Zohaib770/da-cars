import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import "./maingridpages/MainGridPages.css";
import CookieBanner from "./CookieBanner" 

import HauptBild from "../assets/hauptbild.jpg"
import ScheibentoenungBild from "../assets/scheibentönung.png"
import AutoglasserviceBild from "../assets/autoglasservice1.png"
import klimaserviceBild from "../assets/klimaservice.png"

const MainGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="main-grid">
      <div className="hero-section" style={{ backgroundImage: `url(${HauptBild})` }}>
        <div className="hero-content">
          <h1>{t("maingrid_herocontent_title")}</h1>
          <p>{t("maingrid_herocontent_text")}</p>
        </div>
      </div>

      <div className="services-section">
        <h2>{t("maingrid_unsere_dienstleistungen")}</h2>
        <p>{t("maingrid_professionelle_loesungen_fuer_ihr_fahrzeug")}</p>
        <div className="services-grid">
          <div className="service-item">
            <Link to="/kfzaufbereitung">
              <img src={HauptBild} alt={t("kfz_aufbereitung")} />
              <h3>{t("kfz_aufbereitung")}</h3>
            </Link>
          </div>
          <div className="service-item">
            <Link to="/scheibentoenung">
              <img src={ScheibentoenungBild} alt={t("scheibentoenung")} />
              <h3>{t("scheibentoenung")}</h3>
            </Link>
          </div>
          <div className="service-item">
            <Link to="/autoglasservice">
              <img src={AutoglasserviceBild} alt={t("autoglasservice")} />
              <h3>{t("autoglasservice")}</h3>
            </Link>
          </div>
          <div className="service-item">
            <Link to="/klimaservice">
              <img src={klimaserviceBild} alt={t("klimaservice")} />
              <h3>{t("klimaservice")}</h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>{t("maingrid_ueber_dacar")}</h2>
        <h3>{t("maingrid_dacar_text")}</h3>
        <p>{t("maingrid_dacar_wilk_text")}</p>
        <div className="about-stats">
          <div className="stat">
            <span>20+</span>
            <p>{t("maingrid_jahre_erfahrung")}</p>
          </div>
          <div className="stat">
            <span>5000+</span>
            <p>{t("maingrid_zufriedene_kunden")}</p>
          </div>
          <div className="stat">
            <span>100%</span>
            <p>{t("maingrid_qualitaetsgarantie")}</p>
          </div>
        </div>
      </div>

      <CookieBanner />

    </div>
  );
};

export default MainGrid;