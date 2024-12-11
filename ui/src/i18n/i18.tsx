import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    lng:"de",
    resources:{
        de:{
            translation:{
                // Navbar
                Dienstleistungen: "Dienstleistungen",
                Fahrzeuge: "Fahrzeuge",
                Kontakt: "Kontakt",
                einloggen: "Einloggen",
                // Dienstleistungen
                KFZAufbereitung: "KFZ-Aufbereitung",
                Scheibentönung: "Scheibentönung",
                Autoglasservice: "Autoglasservice",
                klimaservice: "Klimaservice",
                // KFZ-Aufbereitung
                Dienste: "Dienste",
                Beschreibung: "Beschreibung",
                PkwPreis: "PKW Preis",
                VanSuvPreis: "Van/SUV Preis",
                KleinbusPreis: "Kleinbus Preis",
                PreislisteKfzAufbereitung:"Preisliste KFZ-Aufbereitung",
                nachricht: "nachricht",
                // Adresse
                Land: "Deutschland",
                // kontakt-firma-form
                frage: "Für weitere fragen gerne anschreiben",
                Name: "Nom",
                IhrName: "Ihr Name",
                Email: "Email",
                IhreEmailAdresse: "Ihre Email Adresse",
                IhreNachricht: "Ihre Nachricht",
                agb: "Ich akzeptiere die AGB",
                Absenden: "Asenden"
            }
        },
        fr:{
            translation:{
                // Navbar
                Dienstleistungen: "Services",
                Fahrzeuge: "Véhicule",
                Kontakt: "Contact",
                einloggen: "s'identifier",
                // Dienstleistungen
                KFZAufbereitung: "Préparation du véhicule",
                Scheibentönung: "Teinte des verres",
                Autoglasservice: "Service de vitres de voiture",
                klimaservice: "Service de climatisation",
                // KFZ-Aufbereitung
                Dienste: "Services",
                Beschreibung: "Description",
                PkwPreis: "Prix de la voiture",
                VanSuvPreis: "Prix fourgon/SUV",
                KleinbusPreis: "Prix du minibus",
                PreislisteKfzAufbereitung:"Liste de prix pour l’esthétique automobile",
                Nachricht: "message",
                // Adresse
                Land: "Allemagne",
                // kontakt-firma-form
                frage: "Pour d’autres questions, veuillez écrire à",
                Name: "Nom",
                IhrName: "Votre nom",
                Email: "Email",
                IhreEmailAdresse: "Votre adresse e-mail",
                IhreNachricht: "Votre message",
                agb: "J’accepte les conditions générales",
                Absenden: "Dépêche"
            }
        }
    }
})