import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./NavbarPages.css"

const Kontakt: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

  const handleKontaktForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      telefon: telefon,
      nachricht: nachricht
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/kontakt/mailanempfaenger`, formData);
      setName('');
      setEmail('');
      setTelefon('');
      setNachricht('');

      setMessage({ type: 'success', text: t("kontakt_success") });
      setTimeout(() => setMessage(null), 3000);

    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: t("kontakt_error") });
      setTimeout(() => setMessage(null), 3000);
    }

  };

  return (
    <div className="kontakt-container">

      <div className="kontakt-content">
        <div className='kontakt-firma'>
          <h1>{t("frage")}</h1>

          {message && (
            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {message.text}
            </div>
          )}
          <form className="kontakt-firma-form" onSubmit={handleKontaktForm}>

            <label htmlFor="name">{t("name")}</label>
            <input
              type="text" id="name"
              name="name" placeholder={t("ihr_name")}
              value={name} onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">{t("email")}</label>
            <input
              type="email" id="email"
              name="email" placeholder={t("ihre_email_adresse")}
              value={email} onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="telefon">{t("telefon")}</label>
            <input
              type="number" id="telefon"
              name="telefon" placeholder={t("ihre_tel")}
              value={telefon} onChange={(e) => setTelefon(e.target.value)}
            />

            <label htmlFor="nachricht">{t("nachricht")}</label>
            <textarea
              id="nachricht" name="nachricht"
              placeholder={t("ihre_nachricht")} rows={5}
              value={nachricht} onChange={(e) => setNachricht(e.target.value)}>
            </textarea>

            <button type="submit" className="absenden-button">{t("absenden")}</button>
          </form>
        </div>

        <div className='adresse'>
          <h1>{t("kontakt")}</h1>
          <h1>DA-Cars</h1>
          <div>
            <a
              href="https://maps.google.com?q=Pirmasenserstrasse 98, 66482 Zweibrücken"
              target="_blank"
              rel="noopener noreferrer"
              className="adresse-link"
            >
              <p>Pirmasenserstrasse 98</p>
              <p>66482 Zweibrücken</p>
              <p>{t("land")}</p>
            </a>
            <a href="tel:+4963328003425" className="telefon-link">
              <p>+4963328003425</p>
            </a>
            <a
              href="mailto:info@da-cars.de"
              className="email-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>info@da-cars.de</p>
            </a>
          </div>
        </div>

      </div>

      <div className='imp-daten'>
        <Link to="/impressum">
          <h4>{t("impressum")}</h4>
        </Link>
        <Link to="/haftungsausschluss">
          <h4>{t("haftungsausschluss")}</h4>
        </Link>
      </div>

    </div>
  )
}

export default Kontakt
