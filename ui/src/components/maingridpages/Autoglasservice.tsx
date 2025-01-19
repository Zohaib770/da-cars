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
            <h1>{t("autoglasservice_title")}</h1>
            <p>{t("autoglasservice_text")}</p>
        </div>  
    </div>
  )
}

export default Autoglasservice