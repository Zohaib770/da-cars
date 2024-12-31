import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./NavbarPages.css";

interface Auto {
  marke: string;
  modell: string;
  baujahr: number;
  bildUrl: string[];
}


const Fahrzeug: React.FC = () => {
  const{t} = useTranslation();

  const [autoDaten, setAutoDaten] = useState<Auto[]>([]);
  const [bilderIndex, setBilderIndex] = useState<number[]>([]);

  const vorherigesBild = (index: number) => {
    setBilderIndex((prevIndex) =>
      prevIndex.map((current, idx) =>
        idx === index
          ? (current - 1 + autoDaten[index].bildUrl.length) % autoDaten[index].bildUrl.length
          : current
      )
    );
  };

  const naechstesBild = (index: number) => {
    setBilderIndex((prevIndex) =>
      prevIndex.map((current, idx) =>
        idx === index ? (current + 1) % autoDaten[index].bildUrl.length : current
      )
    );
  };

  useEffect(() => {
    const fetchAutoDaten = async () => {
      try {
        const response = await axios.get<Auto[]>(`${import.meta.env.VITE_REACT_APP_API_URL}/auto/findAll`);
        setAutoDaten(response.data);
        setBilderIndex(response.data.map(() => 0)); // Initialisiere Bildindex
      } catch (err) {
        console.error("Fehler beim Laden der Daten", err);
      }
    };
  
    fetchAutoDaten();
  }, []);
  


  return (
    <div className="fahrzeug-container">
       <table className="fahrzeug-table">
        <tbody>
          {autoDaten.map((auto, index) => (
            <tr key={index}>
                <td className="fahrzeug-bild">
                    <button className="slider links" onClick={() => vorherigesBild(index)}>&lt;</button>
                    <img
                      src={`http://localhost:8080/autobilder/${auto.bildUrl[bilderIndex[index]]}`}
                      alt={`${auto.marke} ${auto.modell}`}
                    />

                    <button className="slider rechts" onClick={() => naechstesBild(index)}>&gt;</button>
                </td>

                <td className="fahrzeug-details">
                    <h1 className="fahrzeug-titel">{`${auto.marke} ${auto.modell}`}</h1>
                    <p className="fahrzeug-beschreibung">Baujahr: {auto.baujahr}</p>
                    <button
                      className="fahrzeug-button"
                      onClick={() => alert(`Vielen Dank für Ihr Interesse an ${auto.marke} ${auto.modell}!`)}
                    >
                      {t("Nachricht")}
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  );
};

export default Fahrzeug;
