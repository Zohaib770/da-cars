import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './Admin.css';
import axios from 'axios';

const FahrzeugHochladen: React.FC = () => {
  const{t} = useTranslation();
  const [auto, setAuto] = useState({
    bilder: [] as File[],
    marke: '',
    baujahr: '',
    modell: '',
  });

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
    formData.append('baujahr', auto.baujahr);
    formData.append('modell', auto.modell);

    // Alle Bilder zum FormData hinzufügen
    auto.bilder.forEach((file, index) => {
      formData.append('dateien', file, file.name); // 'dateien' ist der Name für die Multipart-Dateien im DTO
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auto/save`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Wichtig für das Senden von FormData
        },
      });
      
      if (response.status === 200) {
        alert('Fahrzeug erfolgreich hochgeladen');
        setAuto({
          bilder: [],
          marke: '',
          baujahr: '',
          modell: '',
        });
      }
    } catch (error) {
      console.error('Fehler beim Hochladen des Fahrzeugs:', error);
      alert('Fehler beim Hochladen des Fahrzeugs');
    }
  };

  return (
    <div className="fahrzeughochladen-container">
      <h1>{("fahrzeughochladen")}</h1>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-group">
          <label htmlFor="dateien">{t("fahrzeugbilder")}</label>
          <input
            type="file"
            id="dateien"
            name="dateien"
            multiple
            onChange={handleImageChange}
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
        <button type="submit" className="submit-button">
          {t("fahrzeughochladen")}
        </button>
      </form>
    </div>
  );
};

export default FahrzeugHochladen;
