import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    lng:"de",
    resources:{
        de:{
            translation:{
                Dienstleistungen: "Dienstleistungen",
                Fahrzeuge: "Fahrzeuge",
                Kontakt: "Kontakt",
                einloggen: "Einloggen",
                KFZAufbereitung: "KFZ-Aufbereitung",
                Scheibentönung: "Scheibentönung",
                Autoglasservice: "Autoglasservice",
                klimaservice: "Klimaservice",
                Dienste: "Dienste",
                Beschreibung: "Beschreibung",
                PkwPreis: "PKW Preis",
                VanSuvPreis: "Van/SUV Preis",
                KleinbusPreis: "Kleinbus Preis",
                PreislisteKfzAufbereitung:"Preisliste KFZ-Aufbereitung",
                nachricht: "nachricht"
            }
        },
        fr:{
            translation:{
                Dienstleistungen: "Services",
                Fahrzeuge: "Véhicule",
                Kontakt: "Contact",
                einloggen: "s'identifier",
                KFZAufbereitung: "Préparation du véhicule",
                Scheibentönung: "Teinte des verres",
                Autoglasservice: "Service de vitres de voiture",
                klimaservice: "Service de climatisation",
                Dienste: "Services",
                Beschreibung: "Description",
                PkwPreis: "Prix de la voiture",
                VanSuvPreis: "Prix fourgon/SUV",
                KleinbusPreis: "Prix du minibus",
                PreislisteKfzAufbereitung:"Liste de prix pour l’esthétique automobile",
                nachricht: "message"
            }
        }
    }
})