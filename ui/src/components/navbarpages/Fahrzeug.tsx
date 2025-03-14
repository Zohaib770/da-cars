import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./NavbarPages.css";

interface Auto {
  autoId: number;
  marke: string;
  modell: string;
  beschreibung: string;
  baujahr: number;
  kmStand: number;
  tuev: Date;
  leistung: number;
  preis: number;
  bildUrl: string[];
}


const Fahrzeug: React.FC = () => {
  const { t } = useTranslation();

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

  if (autoDaten.length === 0) {
    return (
      <div className="fahrzeug-container">
        <p className="keine-autos">{t("keine_fahrzeug")}</p>
      </div>
    );
  }

  return (
    <div className="fahrzeug-container">
      <table className="fahrzeug-table">
        <tbody>
          <div className='fahrzeug-table-div'>
            {autoDaten.map((auto, index) => (
              <tr key={index}>
                <td className="fahrzeug-bild">
                  <div style={{ position: 'relative' }}>
                    {auto.bildUrl.length > 1 && (
                      <>
                        <button className="slider links" onClick={() => vorherigesBild(index)}>&lt;</button>
                      </>
                    )}
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_AUTO_BILDER_URL}/${auto.bildUrl[bilderIndex[index]]}`}
                      alt={`${auto.marke} ${auto.modell}`}
                    />
                    {auto.bildUrl.length > 1 && (
                      <>
                        <button className="slider rechts" onClick={() => naechstesBild(index)}>&gt;</button>
                      </>
                    )}
                  </div>
                </td>

                <td className="fahrzeug-details">
                  <div className='fahrzeug-details-div'>
                    <h1 className="fahrzeug-titel">{`${auto.marke} ${auto.modell}`}</h1>
                    <p className="beschreibung">{t("beschreibung")}: {auto.beschreibung}</p>
                    <div className="b-k-t">
                      <p>{t("baujahr")}: {auto.baujahr}</p>
                      <p>{t("kmStand")}: {auto.kmStand}</p>
                      <p>{t("tuev")}: {new Intl.DateTimeFormat('de-DE').format(new Date(auto.tuev))}</p>
                    </div>
                    <div className="l-p">
                      <p>{t("leistung")}: {auto.leistung}</p>
                      <p>{t("preis")}: {auto.preis} €</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Fahrzeug;
