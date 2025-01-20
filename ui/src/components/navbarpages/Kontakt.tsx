import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./NavbarPages.css"

const Kontakt : React.FC = () => {
  const{t} = useTranslation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [agbChecked, setAgbChecked] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

  const handleKontaktForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      nachricht: nachricht
    };

    try {
      console.log(import.meta.env.VITE_REACT_APP_API_URL);
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/kontakt/mailanempfaenger`, formData);
      console.log(response.data);
      
      // Felder zurücksetzen
      setName('');
      setEmail('');
      setNachricht('');
      setAgbChecked(false);

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
      <div className='adresse'>
        <h1>{t("kontakt")}</h1>
        <h1>DA-Cars</h1>
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
        <p>+4963328003425</p>
        <p>info@da-cars.de</p>
      </div>

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

          <label htmlFor="email">{t("Email")}</label>
          <input 
            type="email" id="email" 
            name="email" placeholder={t("ihre_email_adresse")} 
            value={email} onChange={(e) => setEmail(e.target.value)}
            />

          <label htmlFor="nachricht">{t("nachricht")}</label>
          <textarea 
            id="nachricht" name="nachricht" 
            placeholder={t("ihre_nachricht")} rows={5}
            value={nachricht} onChange={(e) => setNachricht(e.target.value)}>
          </textarea>
          
          <label>
            <input 
              type="checkbox" id="agb" 
              name="agb" checked={agbChecked} 
              onChange={(e) => setAgbChecked(e.target.checked)} required />
              {t("agb")}
          </label>

          <button type="submit" className="absenden-button">{t("absenden")}</button>
        </form>
      </div>

    </div>
  )
}

export default Kontakt
