import React from 'react'
import { useTranslation } from "react-i18next";

import klimaservice from '../../assets/klimaservice.png';


const Klimaservice: React.FC = () => {
  const{t} = useTranslation();

  return (
    <div className="klimaservice-container">
        <div className="imag">
            <img src={klimaservice} alt="Scheiben" />
        </div>
        <div className="txt">
            <h1>{t("klimaservice_title")}</h1>
            <p>{t("klimaservice_text")}</p>
            <br />
            <h1>{t("preis")}</h1>
        </div>  
    </div>
  )
}

export default Klimaservice
