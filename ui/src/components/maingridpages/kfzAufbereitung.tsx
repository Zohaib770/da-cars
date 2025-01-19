import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./MainGridPages.css";

interface KfzAufbereitungPreise {
  id: number;
  dienste: string; 
  diensteBeschreibung: string;
  pkwPreis: number;
  vanSuvPreis: number;
  kleinbusPreis: number;
}

const kfzaufbereitung : React.FC = () => {
  const{t} = useTranslation();

  const [kfzAufbereitungPreise, setKfzAufbereitungPreise] = useState<KfzAufbereitungPreise[]>([]);
  
  useEffect(() => {
    const fetchKfzAufbereitungPreise = async () => {
      try {
        const response = await axios.get<KfzAufbereitungPreise[]>(`${import.meta.env.VITE_REACT_APP_API_URL}/Kfzaufbereitungpreise/findall`);
        setKfzAufbereitungPreise(response.data);
      } catch (err) {
        console.error("Fehler beim Laden der KfzAufbereitungPreise", err);
      }
    };
  
    fetchKfzAufbereitungPreise();
  }, []);

  if (kfzAufbereitungPreise.length === 0) {
    return (
      <div className="kfzaufbereitung-container">
        <p className="keine-kfzaufbereitung">{t("keine_preis_liste_kfzaufbereitung")}</p>
      </div>
    );
  }

  return (
    <div className="kfzaufbereitung-container">
      <div className="table-container">
        <h1 style={{color: "#017cbc"}}>{t("preis_liste_kfzaufbereitung")}</h1>
        <table>
          <thead>
            <tr>
              <th>{t("dienste")}</th>
              <th>{t("beschreibung")}</th>
              <th>{t("pkw_preis")}</th>
              <th>{t("van_suv_preis")}</th>
              <th>{t("kleinbus_preis")}</th>
            </tr>
          </thead>
          <tbody>
            {kfzAufbereitungPreise.map((item, index) => {
              if (item.dienste === "aussenreinigung" && item.diensteBeschreibung === "aussenreinigung_text") {
                return (
                  <tr key={`aussenreinigung-${index}`}>
                    <td>{t("aussenreinigung")}</td>
                    <td>{t("aussenreinigung_text")}</td>
                    <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.dienste === "aussenwaesche" && item.diensteBeschreibung === "aussenwaesche_shampoo") {
                return (
                  <tr key={`aussenwaesche-${index}`}>
                    <td>{t("aussenwaesche")}</td>
                    <td>{t("aussenwaesche_shampoo")}</td>
                    <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.dienste === "lackpflege") {
                switch (item.diensteBeschreibung) {
                  case "lackpflege_politur":
                  case "lackpflege_schleife":
                  case "lackpflege_versiegelung":
                  case "lackpflege_24":
                  case "lackpflege_36":
                    return (
                      <tr key={`lackpflege-${index}`}>
                        <td>{t("lackpflege")}</td>
                        <td>{t(item.diensteBeschreibung)}</td>
                        <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                        <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                        <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                      </tr>
                    );
                  default:
                    return null;
                }
              } else if (item.dienste === "Innenreinigung") {
                if (item.diensteBeschreibung === "Innenreinigung_standard" || item.diensteBeschreibung === "Innenreinigung_intensive") {
                  return (
                    <tr key={`Innenreinigung-${index}`}>
                      <td>{t("Innenreinigung")}</td>
                      <td>{t(item.diensteBeschreibung)}</td>
                      <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                      <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                      <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                    </tr>
                  );
                }
              } else if (item.dienste === "stoff_textil" && item.diensteBeschreibung === "stoff_textil") {
                return (
                  <tr key={`stoff_textil-${index}`}>
                    <td>{t("stoff_textil")}</td>
                    <td>{t("stoff_textil")}</td>
                    <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.dienste === "motorwaesche" && item.diensteBeschreibung === "motorwaesche_text") {
                return (
                  <tr key={`motorwaesche-${index}`}>
                    <td>{t("motorwaesche")}</td>
                    <td>{t("motorwaesche_text")}</td>
                    <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.dienste === "komplett_aufbereitung_inkl_motor" && item.diensteBeschreibung === "komplett_aufbereitung_inkl_motor") {
                return (
                  <tr key={`komplett_aufbereitung-${index}`}>
                    <td>{t("komplett_aufbereitung_inkl_motor")}</td>
                    <td>{t("komplett_aufbereitung_inkl_motor")}</td>
                    <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.dienste === "glasversiegelung" && item.diensteBeschreibung === "glasversiegelung_text") {
                return (
                  <tr key={`glasversiegelung-${index}`}>
                    <td>{t("glasversiegelung")}</td>
                    <td>{t("glasversiegelung_text")}</td>
                    <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
                    <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default kfzaufbereitung
