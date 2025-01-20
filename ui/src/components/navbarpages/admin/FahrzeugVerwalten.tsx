import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "../NavbarPages.css";

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

const FahrzeugVerwalten: React.FC = () => {
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

  const deleteAuto = async (autoId: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/auto/deletebyid?id=${autoId}`);
      setAutoDaten((prevAutos) => prevAutos.filter((auto) => auto.autoId !== autoId));
    } catch (err) {
      console.error("Fehler beim Löschen des Fahrzeugs", err);
    }
  };

  useEffect(() => {
    const fetchAutoDaten = async () => {
      try {
        const response = await axios.get<Auto[]>(`${import.meta.env.VITE_REACT_APP_API_URL}/auto/findAll`);
        setAutoDaten(response.data);
        setBilderIndex(response.data.map(() => 0));
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
          {autoDaten.map((auto, index) => (
            <tr key={index}>
                <td className="fahrzeug-bild">
                    {auto.bildUrl.length > 1 && (
                      <>
                        <button className="slider links" onClick={() => vorherigesBild(index)}>&lt;</button>
                      </>
                    )}
                    <img
                      src={`http://localhost:8080/autobilder/${auto.bildUrl[bilderIndex[index]]}`}
                      alt={`${auto.marke} ${auto.modell}`}
                    />
                    {auto.bildUrl.length > 1 && (
                        <>
                          <button className="slider rechts" onClick={() => naechstesBild(index)}>&gt;</button>
                        </>
                      )}
                </td>

                <td className="fahrzeug-details">
                    <h1 className="fahrzeug-titel">{`${auto.marke} ${auto.modell}`}</h1>
                    <p className="">{t("beschreibung")}: {auto.beschreibung}</p>
                    <div className="b-k-t">
                      <p className="">{t("baujahr")}: {auto.baujahr}</p>
                      <p className="">{t("kmStand")}: {auto.kmStand}</p>
                      <p className="">{t("tuev")}: {new Intl.DateTimeFormat('de-DE').format(new Date(auto.tuev))}</p>
                    </div>
                    <div className="l-p">
                      <p className="">{t("leistung")}: {auto.leistung}</p>
                      <p className="">{t("preis")}: {auto.preis} €</p>
                    </div>
                    <button
                        className="fahrzeug-delete-button"
                        onClick={() => deleteAuto(auto.autoId)}
                    >
                        {t("loeschen")}
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  );
};

export default FahrzeugVerwalten;
