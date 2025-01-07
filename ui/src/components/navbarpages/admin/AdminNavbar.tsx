import React, {useContext} from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../context/Authcontext";
import "./Admin.css";

const AdminNavbar : React.FC = () => {
  const{t} = useTranslation();
  const { logout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/einloggen");
  };

  return (
    <nav className='adminnavbar'>
        <div className="adminnavbar-container">
            <ul>
                <li><Link to="/adminlayout/fahrzeughochladen">{t("Fahrzeughochladen")}</Link></li>
                <li><Link to="/adminlayout/fahrzeugverwalten">{t("Fahrzeugverwalten")}</Link></li>
                <li><Link to="/adminlayout/profil">{t("Profil")}</Link></li>
                <li>
                  {isLoggedIn && (
                    <span onClick={handleLogout} style={{ cursor: "pointer" }}>
                      {t("Abmelden")}
                    </span>
                  )}
                </li>
                {/* <li><Link to="/einloggen">{t("Abmelden")}</Link></li> */}
            </ul>
        </div>
    </nav>
  )
}

export default AdminNavbar
