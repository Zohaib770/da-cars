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
                // Scheibentoenung
                ScheibentoenungTitle: "Scheibentönung x Foliatec",
                ScheibentoenungTxt: "Unsere Scheibentönung in Kooperation mit Foliatec bietet nicht" +
                                    "nur eine ansprechende Optik, sondern schützt auch vor UV-Strahlen und" + 
                                    "verbessert die Privatsphäre im Fahrzeug. Mit hochwertigen Folien garantieren" +
                                    "wir eine präzise Verarbeitung und langlebige Ergebnisse, die Ihr Fahrzeug individuell aufwerten.",
                // Autoglasservice
                AutoglasserviceTitle: "Autoglasservice",
                AutoglasserviceTxt: "Unser Autoglasservice umfasst die fachgerechte Begutachtung, Reparatur" +
                                    "oder den Austausch beschädigter Scheiben, um die Sicherheit und Sicht" + 
                                    "Ihres Fahrzeugs zu gewährleisten. Wir verwenden hochwertige Materialien" + 
                                    "und Techniken, damit Ihre Scheibe schnell wieder in einwandfreiem Zustand ist",
                // KlimaService                   
                klimaserviceTitle: "Klimaservice",
                klimaserviceTxt: "Ein Klimaservice beginnt mit der Überprüfung des Klimasystems auf" + 
                                 "Leckagen und den allgemeinen Zustand. Anschließend wird das alte" +
                                 "Kältemittel abgesaugt und fachgerecht entsorgt. Das System wird" +
                                 "gereinigt, um Schmutz und Bakterien zu entfernen. Danach erfolgt" +
                                 "die Neubefüllung mit neuem Kältemittel. Abschließend testen wir die" +
                                 "Funktionstüchtigkeit des Systems, um sicherzustellen, dass Ihre Klimaanlage" +
                                 "effizient und zuverlässig arbeitet.",
                Nachricht: "nachricht",

                //Fahrzeug

                //Kontakt
                // Adresse
                Land: "Deutschland",
                // Kontakt-firma-form
                frage: "Für weitere fragen gerne anschreiben",
                Name: "Name",
                IhrName: "Ihr Name",
                Email: "Email",
                IhreEmailAdresse: "Ihre Email Adresse",
                IhreNachricht: "Ihre Nachricht",
                agb: "Ich akzeptiere die AGB",
                Absenden: "Asenden",

                //Einloggen
                Anmelden: "Anmelden",
                Password: "Passwort",
                //Admin-Navabar
                Fahrzeughochladen: "Fahrzeug Hochladen",
                Fahrzeugverwalten: "Fahrzeugverwalten"

                //Fahrzeug hochladen
                //Profil
                //Abmelden
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

                //Kontakt
                // Adresse
                Land: "Allemagne",
                // Kontakt-firma-form
                frage: "Pour d’autres questions, veuillez écrire à",
                Name: "Nom",
                IhrName: "Votre nom",
                Email: "Émail",
                IhreEmailAdresse: "Votre adresse e-mail",
                IhreNachricht: "Votre message",
                agb: "J’accepte les conditions générales",
                Absenden: "Dépêche",

                //Einloggen
                Anmelden: "annoncer",
                Password: "Mot de passe",
                //Admin-Navbar
                Fahrzeughochladen: "Télécharger le véhicule",
                Fahrzeugverwalten: "Gérer votre véhicule"

                //Fahrzeug hochladen
                //Profil
                //Abmelden
            }
        }
    }
})