import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

import { useTranslation } from "react-i18next";
import daCars from '../assets/da-cars-logo.png';

import "./Navbar.css";



const Navbar: React.FC = () => {

  const{t, i18n} = useTranslation();
  const { isLoggedIn } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <img src={daCars} alt="Logo" className="navbar-logo" />
          </Link>  
        </div>
        <div className="navbar-right">
          
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
          
          <ul className={`menu-items ${isMenuOpen ? "show" : ""}`}>
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
            <select onChange={changeLanguage} defaultValue={i18n.language}>
              <option value="de">DE</option>
              <option value="fr">FR</option>
            </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
