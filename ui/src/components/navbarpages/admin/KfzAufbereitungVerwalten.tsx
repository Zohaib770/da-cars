import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import "../../maingridpages/MainGridPages.css";

interface KfzAufbereitungPreise {
  id: number;
  autopflege: string;
  pkwPreis: number;
  vanSuvPreis: number;
  kleinbusPreis: number;
}

// Separate Row-Komponente mit eigenem State
const PreisRow: React.FC<{
  item: KfzAufbereitungPreise;
  onUpdate: (id: number, updatedItem: KfzAufbereitungPreise) => void;
}> = ({ item, onUpdate }) => {
  const { t } = useTranslation();
  const [localItem, setLocalItem] = useState<KfzAufbereitungPreise>(item);

  // Aktualisiere localItem wenn sich item ändert (z.B. nach DB-Update)
  useEffect(() => {
    setLocalItem(item);
  }, [item]);

  const getDisplayText = () => {
    const textMap: Record<string, { title: string; description: string }> = {
      komplettreinigung_text: { title: "komplettreinigung", description: "komplettreinigung_text" },
      aussenreinigung_nasswaesche: { title: "aussenreinigung", description: "aussenreinigung_nasswaesche" },
      aussenwaesche_shampoo: { title: "aussenwaesche", description: "aussenwaesche_shampoo" },
      Innenreinigung_standard_text: { title: "Innenreinigung_standard", description: "Innenreinigung_standard_text" },
      Innenreinigung_intensive_text: { title: "Innenreinigung_intensive", description: "Innenreinigung_intensive_text" },
      lackpflege_politur: { title: "lackpflege", description: "lackpflege_politur" },
      motorwaesche_text: { title: "motorwaesche", description: "motorwaesche_text" },
      glasversiegelung_text: { title: "glasversiegelung", description: "glasversiegelung_text" }
    };

    const specialCases = [
      "aussenreinigung_felgen",
      "aussenreinigung_motor",
      "lackpflege_schleife",
      "lackpflege_versiegelung",
      "lackpflege_24",
      "lackpflege_36",
      "stoff_textil"
    ];

    if (textMap[item.autopflege]) {
      const { title, description } = textMap[item.autopflege];
      return (
        <>
          <span className='highlight'>{t(title)}</span>
          <br />{t(description)}
        </>
      );
    } else if (specialCases.includes(item.autopflege)) {
      return <span className={item.autopflege === "stoff_textil" ? 'highlight' : ''}>{t(item.autopflege)}</span>;
    }
    
    return t(item.autopflege);
  };

  const handlePriceChange = (field: keyof KfzAufbereitungPreise, value: number) => {
    setLocalItem(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    onUpdate(localItem.id, localItem);
  };

  return (
    <tr>
      <td>{getDisplayText()}</td>
      <td>
        <input
          className="kfz-aufbereitung-preis"
          type="number"
          value={localItem.pkwPreis}
          onChange={(e) => handlePriceChange('pkwPreis', parseFloat(e.target.value) || 0)}
        />
        <span className='euro-zeichen'>€</span>
      </td>
      <td>
        <input
          className="kfz-aufbereitung-preis"
          type="number"
          value={localItem.vanSuvPreis}
          onChange={(e) => handlePriceChange('vanSuvPreis', parseFloat(e.target.value) || 0)}
        />
        <span className="euro-zeichen">€</span>
      </td>
      <td>
        <input
          className="kfz-aufbereitung-preis"
          type="number"
          value={localItem.kleinbusPreis}
          onChange={(e) => handlePriceChange('kleinbusPreis', parseFloat(e.target.value) || 0)}
        />
        <span className="euro-zeichen">€</span>
      </td>
      <td>
        <button
          className="btn-preis-aktualisieren"
          onClick={handleUpdate}
        >
          {t("aktualisieren")}
        </button>
      </td>
    </tr>
  );
};

const KfzAufbereitungVerwalten: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [kfzAufbereitungPreise, setKfzAufbereitungPreise] = useState<KfzAufbereitungPreise[]>([]);

  const AktualisierPreis = async (id: number, updatedItem: KfzAufbereitungPreise) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/Kfzaufbereitungpreise/save`,
        updatedItem
      );
      
      // Aktualisiere den globalen State mit dem neuen Wert
      setKfzAufbereitungPreise(prev =>
        prev.map(item => item.id === id ? updatedItem : item)
      );
      
      setMessage({ type: 'success', text: t("kfzaufbereitungverwalten_success") });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Preise:", error);
      setMessage({ type: 'error', text: t("kfzaufbereitungverwalten_error") });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  useEffect(() => {
    const fetchKfzAufbereitungPreise = async () => {
      try {
        const response = await axios.get<KfzAufbereitungPreise[]>(
          `${import.meta.env.VITE_REACT_APP_API_URL}/Kfzaufbereitungpreise/findall`
        );
        console.log('Geladene Daten:', response.data); // Zum Debuggen
        setKfzAufbereitungPreise(response.data.sort((a, b) => a.id - b.id));
      } catch (err) {
        console.error("Fehler beim Laden der KfzAufbereitungPreise", err);
      }
    };

    fetchKfzAufbereitungPreise();
  }, []);

  return (
    <div className="kfzaufbereitung-container">
      <div className="table-container">
        <h1 style={{ color: "#017cbc" }}>{t("preis_liste_kfzaufbereitung")}</h1>
        
        {message && (
          <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
            {message.text}
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>{t("autopflege")}</th>
              <th>{t("pkw_preis")}</th>
              <th>{t("van_suv_preis")}</th>
              <th>{t("kleinbus_preis")}</th>
              <th>{t("aktion")}</th>
            </tr>
          </thead>
          <tbody>
            {kfzAufbereitungPreise.map((item) => (
              <PreisRow
                key={item.id}
                item={item}
                onUpdate={AktualisierPreis}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KfzAufbereitungVerwalten;