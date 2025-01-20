import React, { useState, useRef  } from 'react';
import { useTranslation } from "react-i18next";
import './Admin.css';
import axios from 'axios';

const FahrzeugHochladen: React.FC = () => {
  const{t} = useTranslation();
  const [auto, setAuto] = useState({
    bilder: [] as File[],
    marke: '',
    modell: '',
    beschreibung: '',
    baujahr: '',
    kmStand: '',
    tuev: '',
    leistung: '',
    preis: '',
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuto({ ...auto, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setAuto(prevData => ({
        ...prevData,
        bilder: [...prevData.bilder, ...files], // Speichern der Dateien in einem Array
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('marke', auto.marke);
    formData.append('modell', auto.modell);
    formData.append('beschreibung', auto.beschreibung);
    formData.append('baujahr', auto.baujahr);
    formData.append('kmStand', auto.kmStand);
    formData.append('tuev', auto.tuev);
    formData.append('leistung', auto.leistung);
    formData.append('preis', auto.preis);

    // Alle Bilder zum FormData hinzufügen
    auto.bilder.forEach((file) => {
      formData.append('dateien', file, file.name); // 'dateien' ist der Name für die Multipart-Dateien im DTO
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auto/save`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.status === 200) {
        setAuto({
          bilder: [],
          marke: '',
          modell: '',
          beschreibung: '',
          baujahr: '',
          kmStand: '',
          tuev: '',
          leistung: '',
          preis: '',
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = ''; // Rücksetzen des Datei-Inputs
        }
      }
    } catch (error) {
      console.error('Fehler beim Hochladen des Fahrzeugs:', error);
    }
  };

  return (
    <div className="fahrzeughochladen-container">
      <h1>{t("fahrzeughochladen")}</h1>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-group">
          <label htmlFor="dateien">{t("fahrzeugbilder")}</label>
          <input
            type="file"
            id="dateien"
            name="dateien"
            multiple
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="marke">{t("marke")}</label>
          <input
            type="text"
            id="marke"
            name="marke"
            value={auto.marke}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="modell">{t("modell")}</label>
          <input
            type="text"
            id="modell"
            name="modell"
            value={auto.modell}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="beschreibung">{t("beschreibung")}</label>
          <textarea
            id="beschreibung"
            name="beschreibung"
            rows={5}
            value={auto.beschreibung}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="baujahr">{t("baujahr")}</label>
          <input
            type="number"
            id="baujahr"
            name="baujahr"
            value={auto.baujahr}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="kmStand">{t("km_stand")}</label>
          <input
            type="number"
            id="kmStand"
            name="kmStand"
            value={auto.kmStand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tuev">{t("tuev")}</label>
          <input
            type="date"
            id="tuev"
            name="tuev"
            value={auto.tuev}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="leistung">{t("leistung")}</label>
          <input
            type="number"
            id="leistung"
            name="leistung"
            value={auto.leistung}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preis">{t("preis")} in €</label>
          <input
            type="number"
            id="preis"
            name="preis"
            value={auto.preis}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {t("fahrzeughochladen")}
        </button>
      </form>
    </div>
  );
};

export default FahrzeugHochladen;
