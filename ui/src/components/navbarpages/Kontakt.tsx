import React from 'react'
import { useTranslation } from "react-i18next";

const Kontakt : React.FC = () => {
  const{t} = useTranslation();

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents page reload
  };

  return (
    <div className="kontakt-container">
      <div className='adresse'>
        <h1>{t("Kontakt")}</h1>
        <h1>DA-Cars</h1>
        <p>Pirmasenserstrasse 98</p>
        <p>66482 Zweibrücken</p>
        <p>{t("Land")}</p>
        <p>+4963328003425</p>
        <p>info@da-cars.de</p>
      </div>
      <div className='kontakt-firma'>
        <h1>{t("frage")}</h1>
        <form className="kontakt-firma-form" onSubmit={handleForm}>
          <label htmlFor="name">{t("Name")}</label>
          <input type="text" id="name" name="name" placeholder={t("IhrName")} />
          <label htmlFor="email">{t("Email")}</label>
          <input type="email" id="email" name="email" placeholder={t("IhreEmailAdresse")} />
          <label htmlFor="nachricht">{t("Nachricht")}</label>
          <textarea id="nachricht" name="nachricht" placeholder={t("IhreNachricht")} rows={5}></textarea>
          <label>
            <input type="checkbox" id="agb" name="agb" required />
            {t("agb")}
          </label>
          <button type="submit" className="absenden-button">{t("Absenden")}</button>
        </form>
      </div>

    </div>
  )
}

export default Kontakt
