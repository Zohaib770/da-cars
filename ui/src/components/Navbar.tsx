import React, { useState } from "react";
import "./Navbar.css";
import daCars from '../assets/da-cars-logo.png';
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {

  const{t, i18n} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={daCars} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="#home">{t("Dienstleistungen")}</a></li>
            <li><a href="#about">{t("Fahrzeuge")}</a></li>
            <li><a href="#services">{t("Kontakt")}</a></li>
            <li><a href="#contact">{t("einloggen")}</a></li>
          </ul>
          {/* <div className="language-selector"> */}
            <select onChange={changeLanguage} defaultValue={i18n.language}>
              <option value="de">DE</option>
              <option value="fr">FR</option>
            </select>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
