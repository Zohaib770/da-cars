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
            <h1>{t("scheibentoenung_title")}</h1>
            <p>{t("scheibentoenung_text")}</p>
            <br />
            <h1>{t("preis")}: {t("ab")} 120 €</h1>
        </div>  
    </div>
  )
}

export default Scheibentoenung