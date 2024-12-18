import React from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'; 

const Einloggen : React.FC = () => {
  const{t} = useTranslation();
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email === 'admin@gmail.com' && password === 'admin') {
      navigate('/adminlayout/FahrzeugVerwalten');
    } else {
      alert(t("Falsche Anmeldeinformationen"));
    }

  };

  return (
    <div className='einloggen-container'>
      <div className='login-form'>
        <h1>{t("Anmelden")}</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">{t("Email")}</label>
          <input type="email" name="email" placeholder={t("IhreEmailAdresse")} />
          <label htmlFor="password">{t("Password")}</label>
          <input type="password" name="password" placeholder="*******" />
          <button type="submit" className="anmelden-button">{t("Anmelden")}</button>
        </form>
      </div>
    </div>
  )
}

export default Einloggen
