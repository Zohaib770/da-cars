import React from 'react'
import { useTranslation } from "react-i18next";

interface KfzAufbereitung {
  name: string;
  beschreibung: string;
  pkwPreis: number;
  vanSuvPreis: number;
  kleinbusPreis: number;
}

const kfzaufbereitung : React.FC = () => {
  const{t} = useTranslation();
  const aufbereitungListe: KfzAufbereitung[] = [
    {
      name: "Lackpflege",
      beschreibung: "Politur - Entfernt kleine Kratzer, reinigt den Lack und erzeugt ein spiegelglattes Hochglanzbild mit UV – Schutz.",
      pkwPreis: 99.99,
      vanSuvPreis: 119.99,
      kleinbusPreis: 139.99
    },
    {
      name: "Lackaufbereitung",
      beschreibung: "Schleifen & Politur",
      pkwPreis: 349.99,
      vanSuvPreis: 369.99,
      kleinbusPreis: 389.99
    },
    {
      name: "Außenwäsche",
      beschreibung: "mit Wax Shampoo",
      pkwPreis: 29.99,
      vanSuvPreis: 49.99,
      kleinbusPreis: 69.99
    }
  ];

  return (
    <div className="table-container">
      <h1 style={{color: "#017cbc"}}>{t("PreislisteKfzAufbereitung")}</h1>
      <table>
        <thead>
          <tr>
            <th>{t("Dienste")}</th>
            <th>{t("Beschreibung")}</th>
            <th>{t("PkwPreis")}</th>
            <th>{t("VanSuvPreis")}</th>
            <th>{t("KleinbusPreis")}</th>
          </tr>
        </thead>
        <tbody>
          {aufbereitungListe.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.beschreibung}</td>
              <td className="kfz-aufbereitung-preis">{item.pkwPreis}€</td>
              <td className="kfz-aufbereitung-preis">{item.vanSuvPreis}€</td>
              <td className="kfz-aufbereitung-preis">{item.kleinbusPreis}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default kfzaufbereitung
