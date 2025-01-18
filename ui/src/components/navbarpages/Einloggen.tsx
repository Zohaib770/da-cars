import React, {useState, useContext} from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

const Einloggen : React.FC = () => {
  const{t} = useTranslation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password
    };

    try {
      console.log(import.meta.env.VITE_REACT_APP_API_URL);
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/benutzer/login`, formData);
      const data = response;
      console.log(" ================= data " + data.statusText);
      /* navigate('/adminlayout/FahrzeugVerwalten'); */
      if (response.status === 200) {
        login();
        localStorage.setItem("benutzeremail", email);
        localStorage.setItem("isLoggedIn", "true");
        navigate('/adminlayout/fahrzeugverwalten');
      } else {
          alert(t("Falsche Anmeldeinformationen"));
      }

    } catch (err) {
      console.error(err);
      alert(t("Falsche Anmeldeinformationen"));
    }

  };

  return (
    <div className='einloggen-container'>
      <div className='login-form'>
        <h1>{t("anmelden")}</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">{t("email")}</label>
          <input 
            type="email" 
            name="email" 
            placeholder={t("ihre_email_adresse")} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          <label htmlFor="password">{t("passwort")}</label>
          <input 
            type="password" 
            name="password" 
            placeholder="*******" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <button type="submit" className="anmelden-button">{t("anmelden")}</button>
        </form>
      </div>
    </div>
  )
}

export default Einloggen
