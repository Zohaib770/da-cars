import React from 'react'
import { useTranslation } from "react-i18next";

import "./NavbarPages.css";

const Impressum : React.FC = () => {

    const{t} = useTranslation();

  return (
    <div className='impressum-container'>
        <div className='impressum-content'>
            <h2>DA-Cars Djilali Ameur</h2>
            <a
            href="https://maps.google.com?q=Pirmasenserstrasse 98, 66482 Zweibrücken"
            target="_blank"
            rel="noopener noreferrer"
            className="adresse-link">
                <p>Pirmasenser Straße 98</p>
                <p>66482 Zweibrücken</p>
            </a>
            <p>
                Telefon:&nbsp;
                <a href="tel:+4963328003425" className="telefon-link">+49 (0) 6332 – 8003425</a>
            </p>
            <p>
                E-Mail: &nbsp;
                <a 
                    href="mailto:info@da-cars.de" 
                    className="email-link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    info@da-cars.de
                </a>
            </p>
            <p>
                Internet: &nbsp;
                <a 
                    href="https://www.da-cars.de" 
                    className="internet-link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    www.da-cars.de
                </a>
            </p>
            <br />
            <p>{t("geschaeftsfuehrer")}</p>
            <br />
            <p>{t("umsatzsteuer_id")}</p>
            <p>{t("umsatzsteuer_gesetzte")}</p>
            <br />
            <p>{t("impr_erst")} &nbsp;
                <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    className="internet-link"
                    target="_blank" >
                    https://ec.europa.eu/consumers/odr/
                    </a>
                 {t("impr_zweit")}</p>
        </div>
    </div>
  )
}

export default Impressum
