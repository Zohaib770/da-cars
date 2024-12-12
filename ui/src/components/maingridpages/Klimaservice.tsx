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
            <h1>{t("klimaserviceTitle")}</h1>
            <p>{t("klimaserviceTxt")}</p>
            <br />
            <h1>{t("Preise")}</h1>
        </div>  
    </div>
  )
}

export default Klimaservice
