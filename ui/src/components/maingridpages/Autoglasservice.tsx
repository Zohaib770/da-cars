import React from 'react'
import { useTranslation } from "react-i18next";

import autoglasservice1 from '../../assets/autoglasservice1.png';
import autoglasservice2 from '../../assets/autoglasservice2.png';

const Autoglasservice: React.FC = () => {
  const{t} = useTranslation();

  return (
    <div className="autoglasservice-container">
        <div className="imag">
            <img src={autoglasservice1} alt="autoglasservice" />
            <img src={autoglasservice2} alt="autoglasservice" />
        </div>
        <div className="txt">
            <h1>{t("AutoglasserviceTitle")}</h1>
            <p>{t("AutoglasserviceTxt")}</p>
            <br />
            <h1>{t("Preise")}</h1>
        </div>  
    </div>
  )
}

export default Autoglasservice