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
                klimaservice: "Klimaservice"
            }
        },
        fr:{
            translation:{
                dienstleistungen: "Services",
                Fahrzeuge: "Véhicule",
                Kontakt: "Contact",
                einloggen: "s'identifier",
                KFZAufbereitung: "Préparation du véhicule",
                Scheibentönung: "Teinte des verres",
                Autoglasservice: "Service de vitres de voiture",
                klimaservice: "Service de climatisation"
            }
        }
    }
})