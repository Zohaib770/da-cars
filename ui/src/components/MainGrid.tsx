import React from "react";
import { useTranslation } from "react-i18next";
import "./maingridpages/MainGridPages.css";
import { Link } from 'react-router-dom';

const MainGrid: React.FC = () => {
  const{t} = useTranslation();

  return (
    <div className="main-grid">
      <div className="main-content">
      <div className="grid-left">
        <div className="grid-item">
          <Link to="kfzaufbereitung">{t("kfz_aufbereitung")}</Link>
        </div>

        <div className="grid-item">
          <Link to="/scheibentoenung">{t("scheibentoenung")}</Link>
        </div>

        <div className="grid-item">
          <Link to="/autoglasservice">{t("autoglasservice")}</Link>
        </div>
        
        <div className="grid-item">
          <Link to="/klimaservice">{t("klimaservice")}</Link>
        </div>
      </div>
      
      <div className="grid-right">
        <h1>{t("dacar")}</h1>
        <h2>{t("dacar_text")}</h2>
        <p>{t("dacar_wilk_text")}</p>
      </div>
      </div>
    </div>
  );
};

export default MainGrid;
