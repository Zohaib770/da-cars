import React from "react";
import { useTranslation } from "react-i18next";
import "./MainGrid.css";

const MainGrid: React.FC = () => {
  const{t} = useTranslation();

  return (
    <div className="main-grid">
      <div className="grid-item">{t("KFZAufbereitung")}</div>
      <div className="grid-item">{t("Scheibentönung")}</div>
      <div className="grid-item">{t("Autoglasservice")}</div>
      <div className="grid-item">{t("klimaservice")}</div>
    </div>
  );
};

export default MainGrid;
