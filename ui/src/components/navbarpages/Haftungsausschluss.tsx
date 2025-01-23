import React from 'react'
import { useTranslation } from "react-i18next";

import "./NavbarPages.css";

const Haftungsausschluss : React.FC = () => {

    const{t} = useTranslation();

  return (
    <div className='haftungsausschluss-container'>
        <div className='haftungsausschluss-content'>
            <h2>{t("inhalt")}</h2>
            <p>{t("inhalt_text")}</p>

            <h2>{t("verweis")}</h2>
            <p>{t("verweis_text")}</p>

            <h2>{t("urheber")}</h2>
            <p>{t("urheber_text")}</p>

            <h2>{t("datenschutz")}</h2>
            <p>{t("datenschutz_text")}</p>

            <h2>{t("rechte")}</h2>
            <p>{t("rechte_text")}</p>

        </div>
    </div>
  )
}

export default Haftungsausschluss
