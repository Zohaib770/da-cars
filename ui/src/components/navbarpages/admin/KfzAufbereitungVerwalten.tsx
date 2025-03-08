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

const KfzAufbereitungVerwalten: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [kfzAufbereitungPreise, setKfzAufbereitungPreise] = useState<KfzAufbereitungPreise[]>([]);

  const AktualisierPreis = async (item: KfzAufbereitungPreise) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/Kfzaufbereitungpreise/save`,
        {
          id: item.id,
          autopflege: item.autopflege,
          pkwPreis: item.pkwPreis,
          vanSuvPreis: item.vanSuvPreis,
          kleinbusPreis: item.kleinbusPreis,
        }
      );
      setMessage({ type: 'success', text: t("kfzaufbereitungverwalten_success") });
      setTimeout(() => setMessage(null), 300);
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Preise:", error);
      setMessage({ type: 'error', text: t("kfzaufbereitungverwalten_error") });
      setTimeout(() => setMessage(null), 300);
    }
  };

  useEffect(() => {
    const fetchKfzAufbereitungPreise = async () => {
      try {
        const response = await axios.get<KfzAufbereitungPreise[]>(`${import.meta.env.VITE_REACT_APP_API_URL}/Kfzaufbereitungpreise/findall`);
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setKfzAufbereitungPreise(sortedData);
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
            {kfzAufbereitungPreise.map((item, index) => {
              if (item.autopflege === "komplettreinigung_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("komplettreinigung")}
                      </span>
                      <br />{t("komplettreinigung_text")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "aussenreinigung_nasswaesche") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("aussenreinigung")}
                      </span>
                      <br />{t("aussenreinigung_nasswaesche")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "aussenreinigung_felgen") {
                return (
                  <tr key={index}>
                    <td>{t("aussenreinigung_felgen")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "aussenreinigung_motor") {
                return (
                  <tr key={index}>
                    <td>{t("aussenreinigung_motor")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "aussenwaesche_shampoo") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("aussenwaesche")}
                      </span>
                      <br />{t("aussenwaesche_shampoo")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "Innenreinigung_standard_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("Innenreinigung_standard")}
                      </span>
                      <br />{t("Innenreinigung_standard_text")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "Innenreinigung_intensive_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("Innenreinigung_intensive")}
                      </span>
                      <br />{t("Innenreinigung_intensive_text")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_politur") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("lackpflege")}
                      </span>
                      <br />{t("lackpflege_politur")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_schleife") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_schleife")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_versiegelung") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_versiegelung")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_24") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_24")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "lackpflege_36") {
                return (
                  <tr key={index}>
                    <td>{t("lackpflege_36")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "stoff_textil") {
                return (
                  <tr key={index}>
                    <td className='highlight'>{t("stoff_textil")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "motorwaesche_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("motorwaesche")}
                      </span>
                      <br />{t("motorwaesche_text")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              } else if (item.autopflege === "glasversiegelung_text") {
                return (
                  <tr key={index}>
                    <td>
                      <span className='highlight'>
                        {t("glasversiegelung")}
                      </span>
                      <br /> {t("glasversiegelung_text")}</td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.pkwPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, pkwPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className='euro-zeichen'>€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.vanSuvPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, vanSuvPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen">€</span>
                    </td>
                    <td><input
                      className="kfz-aufbereitung-preis"
                      type="number"
                      value={item.kleinbusPreis}
                      onChange={(e) => {
                        const updatedPreis = parseFloat(e.target.value) || 0;
                        setKfzAufbereitungPreise((prev) =>
                          prev.map((preisItem) =>
                            preisItem.id === item.id ? { ...preisItem, kleinbusPreis: updatedPreis } : preisItem
                          )
                        );
                      }} />
                      <span className="euro-zeichen" style={{ color: '#017cbc' }}>€</span>
                    </td>
                    <td>
                      <button
                        className="btn-preis-aktualisieren"
                        onClick={() => {
                          AktualisierPreis(item);
                        }}
                      >
                        {t("aktualisieren")}
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default KfzAufbereitungVerwalten
