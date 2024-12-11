import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import "./NavbarPages.css";

import p1 from '../../assets/Autosbilder/1.jpg';
import p2 from '../../assets/Autosbilder/2.jpg';
import p3 from '../../assets/Autosbilder/3.jpg';
import p4 from '../../assets/Autosbilder/4.jpg';

const autoDaten = [
  {
    name: 'Tesla Model S',
    bilder: [p1, p2],
    beschreibung: 'Ein luxuriöses Elektrofahrzeug mit einer Reichweite von 600 km.',
    preis: '89.990 €',
  },
  {
    name: 'BMW i4',
    bilder: [p2, p3, p4],
    beschreibung: 'Ein elegantes Elektrofahrzeug mit sportlichem Design.',
    preis: '58.300 €',
  },
  {
    name: 'Audi e-tron',
    bilder: [p1, p4, p2],
    beschreibung: 'Ein elektrischer SUV mit modernster Technologie.',
    preis: '79.990 €',
  },
  {
    name: 'Mercedes EQC',
    bilder: [p3, p2, p1],
    beschreibung: 'Ein luxuriöser elektrischer SUV mit stilvollem Design.',
    preis: '72.800 €',
  },
];

const Fahrzeug: React.FC = () => {
  const{t} = useTranslation();

  const [bilderIndex, setBilderIndex] = useState(
    autoDaten.map(() => 0)
  );

  const vorherigesBild = (index: number) => {
    setBilderIndex((prevState) => {
      const newState = [...prevState];
      newState[index] = (newState[index] === 0 ? autoDaten[index].bilder.length - 1 : newState[index] - 1);
      return newState;
    });
  };

  const naechstesBild = (index: number) => {
    setBilderIndex((prevState) => {
      const newState = [...prevState];
      newState[index] = (newState[index] === autoDaten[index].bilder.length - 1 ? 0 : newState[index] + 1);
      return newState;
    });
  };

  return (
    <div className="fahrzeug-container">
       <table className="fahrzeug-table">
        <tbody>
          {autoDaten.map((auto, index) => (
            <tr key={index}>
                <td className="fahrzeug-bild">
                    <button className="slider links" onClick={() => vorherigesBild(index)}>&lt;</button>
                    <img
                      src={auto.bilder[bilderIndex[index]]} 
                      alt={auto.name}
                    />
                    <button className="slider rechts" onClick={() => naechstesBild(index)}>&gt;</button>
                </td>

                <td className="fahrzeug-details">
                    <h1 className="fahrzeug-titel">{auto.name}</h1>
                    <p className="fahrzeug-beschreibung">{auto.beschreibung}</p>
                    <h3 className="fahrzeug-preis">Preis: {auto.preis}</h3>
                    <button
                      className="fahrzeug-button"
                      onClick={() => alert(`Vielen Dank für Ihr Interesse an ${auto.name}!`)}
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
