import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./Admin.css";

const AdminNavbar : React.FC = () => {
    const{t} = useTranslation();

  return (
    <nav className='adminnavbar'>
        <div className="adminnavbar-container">
            <ul>
                <li><Link to="/adminlayout/fahrzeugverwalten">{t("Fahrzeug")}</Link></li>
                <li><Link to="/adminlayout/profil">{t("Profil")}</Link></li>
                <li><Link to="/einloggen">{t("Abmelden")}</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default AdminNavbar
