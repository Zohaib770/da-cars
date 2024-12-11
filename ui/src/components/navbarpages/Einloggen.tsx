import React from 'react'
import { useTranslation } from "react-i18next";

const Einloggen : React.FC = () => {
  const{t} = useTranslation();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents page reload
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
