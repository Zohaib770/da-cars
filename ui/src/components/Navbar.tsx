import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
            <li><Link to="/">{t("Dienstleistungen")}</Link></li>
            <li><Link to="/fahrzeug">{t("Fahrzeuge")}</Link></li>
            <li><Link to="/kontakt">{t("Kontakt")}</Link></li>
            <li><Link to="/einloggen">{t("einloggen")}</Link></li>
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
