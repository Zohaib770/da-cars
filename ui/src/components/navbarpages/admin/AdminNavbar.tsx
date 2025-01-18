import React, {useContext} from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../context/AuthContext";
import "./Admin.css";

const AdminNavbar : React.FC = () => {
  const{t} = useTranslation();
  const { logout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    localStorage.removeItem("benutzeremail");
    navigate("/einloggen");
  };

  return (
    <nav className='adminnavbar'>
        <div className="adminnavbar-container">
            <ul>
                <li><Link to="/adminlayout/fahrzeughochladen">{t("fahrzeughochladen")}</Link></li>
                <li><Link to="/adminlayout/fahrzeugverwalten">{t("fahrzeugverwalten")}</Link></li>
                <li><Link to="/adminlayout/profil">{t("profil")}</Link></li>
                <li>
                  {isLoggedIn && (
                    <span onClick={handleLogout} style={{ cursor: "pointer" }}>
                      {t("abmelden")}
                    </span>
                  )}
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default AdminNavbar
