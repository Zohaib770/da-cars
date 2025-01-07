import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Kontakt : React.FC = () => {
  const{t} = useTranslation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');

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
      const data = response;
      console.log(" ================= data " + data);

    } catch (err) {
      console.error(err);
      alert(t("Falsche Anmeldeinformationen"));
    }

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
        <form className="kontakt-firma-form" onSubmit={handleKontaktForm}>
          
          <label htmlFor="name">{t("Name")}</label>
          <input 
            type="text" id="name" 
            name="name" placeholder={t("IhrName")} 
            value={name} onChange={(e) => setName(e.target.value)} 
            />

          <label htmlFor="email">{t("Email")}</label>
          <input 
            type="email" id="email" 
            name="email" placeholder={t("IhreEmailAdresse")} 
            value={email} onChange={(e) => setEmail(e.target.value)}
            />

          <label htmlFor="nachricht">{t("Nachricht")}</label>
          <textarea 
            id="nachricht" name="nachricht" 
            placeholder={t("IhreNachricht")} rows={5}
            value={nachricht} onChange={(e) => setNachricht(e.target.value)}>
          </textarea>
          
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
