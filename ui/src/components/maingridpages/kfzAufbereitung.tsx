import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "./MainGridPages.css";

interface KfzAufbereitungPreise {
  id: number;
  autopflege: string;
  pkwPreis: number;
  vanSuvPreis: number;
  kleinbusPreis: number;
}

const kfzaufbereitung: React.FC = () => {
  const { t } = useTranslation();

  const [kfzAufbereitungPreise, setKfzAufbereitungPreise] = useState<KfzAufbereitungPreise[]>([]);

  useEffect(() => {
    const fetchKfzAufbereitungPreise = async () => {
      try {
        const response = await axios.get<KfzAufbereitungPreise[]>(`${import.meta.env.VITE_REACT_APP_API_URL}/Kfzaufbereitungpreise/findall`);
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setKfzAufbereitungPreise(sortedData);
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
        <h1 style={{ color: "#017cbc" }}>{t("preis_liste_kfzaufbereitung")}</h1>
        <table>
          <thead>
            <tr>
              <th>{t("autopflege")}</th>
              <th>{t("pkw_preis")}</th>
              <th>{t("van_suv_preis")}</th>
              <th>{t("kleinbus_preis")}</th>
            </tr>
          </thead>
          <tbody>
            {kfzAufbereitungPreise.map((item, index) => {
              if (item.autopflege === "aussenreinigung_nasswaesche") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("aussenreinigung")}
                      </span>
                      <br />{t("aussenreinigung_nasswaesche")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "aussenreinigung_felgen") {
                return (
                  <tr key={index}>
                    <td>{t("aussenreinigung_felgen")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "aussenreinigung_motor") {
                return (
                  <tr key={index}>
                    <td>{t("aussenreinigung_motor")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "aussenwaesche_shampoo") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("aussenwaesche")}
                      </span>
                      <br />{t("aussenwaesche_shampoo")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "Innenreinigung_standard_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("Innenreinigung_standard")}
                      </span>
                      <br />{t("Innenreinigung_standard_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "Innenreinigung_intensive_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("Innenreinigung_intensive")}
                      </span>
                      <br />{t("Innenreinigung_intensive_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_politur") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("lackpflege")}
                      </span>
                      <br />{t("lackpflege_politur")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_schleife") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_schleife")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_versiegelung") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_versiegelung")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_24") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_24")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_36") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_36")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "stoff_textil") {
                return (
                  <tr key={index}>
                    <td className='highlight'>{t("stoff_textil")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "motorwaesche_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("motorwaesche")}
                      </span>
                      <br />{t("motorwaesche_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                ); 
              } else if (item.autopflege === "scheinwerfer_reparatur_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("scheinwerfer_reparatur")}
                      </span>
                      <br />{t("scheinwerfer_reparatur_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "glasversiegelung_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("glasversiegelung")}
                      </span>
                      <br /> {t("glasversiegelung_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              }
              else if (item.autopflege === "ozonbehandlung_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("ozonbehandlung")}
                      </span>
                      <br /> {t("ozonbehandlung_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              }
              else if (item.autopflege === "polsterreparatur_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("polsterreparatur")}
                      </span>
                      <br /> {t("polsterreparatur_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
                  </tr>
                );
              } else if (item.autopflege === "komplett_aufbereitung_text") {
                return (
                  <tr className='komplett_aufbereitung' key={index}>
                    <td>
                      <span className='highlight'>
                        {t("komplett_aufbereitung")}
                      </span>
                      <br />{t("komplett_aufbereitung_text")}</td>
                    <td>{item.pkwPreis}€</td>
                    <td>{item.vanSuvPreis}€</td>
                    <td>{item.kleinbusPreis}€</td>
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
