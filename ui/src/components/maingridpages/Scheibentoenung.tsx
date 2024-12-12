import React from 'react'
import { useTranslation } from "react-i18next";

import scheibentoenung from '../../assets/scheibentönung.png';


const Scheibentoenung: React.FC = () => {
   const{t} = useTranslation();

  return (
    <div className="scheibentoenung-container">
        <div className="imag">
            <img src={scheibentoenung} alt="Scheiben" />
        </div>
        <div className="txt">
            <h1>{t("ScheibentoenungTitle")}</h1>
            <p>{t("ScheibentoenungTxt")}</p>
            <br />
            <h1>{t("Preise")}</h1>
        </div>  
    </div>
  )
}

export default Scheibentoenung