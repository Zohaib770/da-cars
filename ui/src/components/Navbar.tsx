import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

import { useTranslation } from "react-i18next";
import daCars from '../assets/da-cars-logo.png';

import "./Navbar.css";



const Navbar: React.FC = () => {

  const{t, i18n} = useTranslation();
  const { isLoggedIn } = useContext(AuthContext);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={daCars} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li><Link to="/">{t("dienstleistungen")}</Link></li>
            <li><Link to="/fahrzeug">{t("fahrzeuge")}</Link></li>
            <li><Link to="/kontakt">{t("kontakt")}</Link></li>
            <li>
              {isLoggedIn ? (
                  <Link to="/adminlayout/fahrzeugverwalten">{t("admin_eingeloggt")}</Link>
                ): (
                <Link to="/einloggen">{t("einloggen")}</Link>
              )}
            </li>
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
