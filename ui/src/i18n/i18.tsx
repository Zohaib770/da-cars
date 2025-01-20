import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    lng:"de",
    resources:{
        de:{
            translation:{
                //wilkommen Text
                dacar: "Da Cars",
                dacar_text: "Auto An- & Verkauf, Professionelle KFZ-Pflege, FOLIATE" +
                            "Scheibentönung, Alufelgen, Reifen, Autoglasservice, Klimaservice", 
                dacar_wilk_text: "Willkommen bei DA-Cars, Ihrer professionellen Lösung für die Aufbereitung" +
                                "und Pflege Ihres Fahrzeug. Wir sind Ihr vertrauenswürdiger Partner, wenn es" +
                                "darum geht, Ihrem Auto neuen Glanz zu verleihen und es in bestmöglichem Zustand" +
                                "zu erhalten. Wir bieten qualitativ hochwertigen Service, auf den Sie sich verlassen" +
                                "können! Egal ob Sie eine Grundreinigung, Scheibentönung oder Glasservice benötigen." +
                                "Mit hochwertigen Produkten und modernster Technik verleihen wir Ihrem Fahrzeug ein" +
                                "makelloses Aussehen.",

                // Navbar
                dienstleistungen: "Dienstleistungen",
                fahrzeuge: "Fahrzeuge",
                kontakt: "Kontakt",
                einloggen: "Einloggen",
                admin_eingeloggt: "Admin eingeloggt",

                // Dienstleistungen
                kfz_aufbereitung: "KFZ-Aufbereitung",
                scheibentoenung: "Scheibentönung",
                autoglasservice: "Autoglasservice",
                klimaservice: "Klimaservice",

                // KFZ-Aufbereitung
                kfzaufbereitungverwalten: "Kfz-Aufbereitung verwaltung",
                preis_liste_kfzaufbereitung:"Preisliste KFZ-Aufbereitung",
                keine_preis_liste_kfzaufbereitung: "Preise noch nicht vorhanden",
                dienste: "Dienste",
                beschreibung: "Beschreibung",
                pkw_preis: "PKW-Preis",
                van_suv_preis: "Van/SUV Preis",
                kleinbus_preis: "Kleinbus Preis",
                aktion: "Aktion",
                aktualisieren: "Aktualisieren",
                
                aussenreinigung: "Außenreinigung",
                aussenreinigung_text: "Eine gründliche Außenreinigung schützt den Lack, lässt Ihr Fahrzeug in" +
                                    "neuem Glanz erstrahlen und bewahrt langfristig seinen Wert.",
                
                aussenwaesche: "Außenwäsche",
                aussenwaesche_shampoo: "mit Wax Shampoo",
                
                lackpflege: "Lackpflege",
                lackpflege_politur: "-	Politur" +
                                        "Entfernt kleine Kratzer, reinigt den Lack und erzeugt ein" +
                                        "spiegelglattes Hochglanzbild mit UV – Schutz.",
                lackpflege_schleife: "Lackaufbereitung (Schleifen & Politur)",
                lackpflege_versiegelung: "Lackversiegelung (Langzeit Versiegelung)",
                lackpflege_24: "Nano Lackbeschichtung (Bis zu 24 Monaten)",
                lackpflege_36: "Keramik Lackversiegelung (Bis zu 36 Monaten)",

                Innenreinigung: "Innenreinigung",
                Innenreinigung_standard: "Standard Reinigung (Innenraum aussaugen," +
                                        "Scheiben- und Cockpitpflege)",
                Innenreinigung_intensive: "Intensiv Reinigung (Standard Reinigung + Kofferraum aussaugen," +
                                            "Kunststoffpflege,Polsterreinigung, Lederpflege, Dachhimmel-Reinigung," +
                                            "Türkantenreinigung)",

                stoff_textil: "Stoff/Textil Imprägnierung (Cabriodach)",

                motorwaesche: "Motorwäsche",
                motorwaesche_text: "Eine professionelle Motorwäsche entfernt Schmutz und" +
                                    "Ablagerungen, sorgt für optimale Kühlung und erleichtert" +
                                    "die frühzeitige Erkennung von möglichen Problemen",

                komplett_aufbereitung_inkl_motor: "Komplettaufbereitung (inkl. Motorwäsche)",

                glasversiegelung: "Glasversiegelung",
                glasversiegelung_text: "Eine Glasversiegelung sorgt für klare Sicht und schützt" +
                                        "Ihre Scheiben vor Schmutz, Wasser und Schnee, wodurch die" +
                                        "Sicherheit und Fahrsicht bei jedem Wetter verbessert wird.",

                // Scheibentoenung
                scheibentoenung_title: "Scheibentönung x Foliatec",
                scheibentoenung_text: "Unsere Scheibentönung in Kooperation mit Foliatec bietet nicht" +
                                    "nur eine ansprechende Optik, sondern schützt auch vor UV-Strahlen und" + 
                                    "verbessert die Privatsphäre im Fahrzeug. Mit hochwertigen Folien garantieren" +
                                    "wir eine präzise Verarbeitung und langlebige Ergebnisse, die Ihr Fahrzeug individuell aufwerten.",
                ab: "ab",

                // Autoglasservice
                autoglasservice_title: "Autoglasservice",
                autoglasservice_text: "Unser Autoglasservice umfasst die fachgerechte Begutachtung, Reparatur" +
                                    "oder den Austausch beschädigter Scheiben, um die Sicherheit und Sicht" + 
                                    "Ihres Fahrzeugs zu gewährleisten. Wir verwenden hochwertige Materialien" + 
                                    "und Techniken, damit Ihre Scheibe schnell wieder in einwandfreiem Zustand ist",
                // KlimaService                   
                klimaservice_title: "Klimaservice",
                klimaservice_text: "Ein Klimaservice beginnt mit der Überprüfung des Klimasystems auf" + 
                                 "Leckagen und den allgemeinen Zustand. Anschließend wird das alte" +
                                 "Kältemittel abgesaugt und fachgerecht entsorgt. Das System wird" +
                                 "gereinigt, um Schmutz und Bakterien zu entfernen. Danach erfolgt" +
                                 "die Neubefüllung mit neuem Kältemittel. Abschließend testen wir die" +
                                 "Funktionstüchtigkeit des Systems, um sicherzustellen, dass Ihre Klimaanlage" +
                                 "effizient und zuverlässig arbeitet.",

                //Kontakt
                // Adresse
                land: "Deutschland",
                // Kontakt-firma-form
                frage: "Für weitere fragen gerne anschreiben",
                name: "Name",
                ihr_name: "Ihr Name",
                email: "Email",
                ihre_email_adresse: "Ihre Email Adresse",
                nachricht: "Nachricht",
                ihre_nachricht: "Ihre Nachricht",
                agb: "Ich akzeptiere die AGB",
                absenden: "Asenden",
                kontakt_success: "Nachricht erfolgreich gesendet !",
                kontakt_error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut",

                //Einloggen
                anmelden: "Anmelden",
                passwort: "Passwort",

                //Admin-Navabar
                //Fahrzeug hochladen
                fahrzeughochladen: "Fahrzeug Hochladen",
                fahrzeugbilder: "Fahrzeugbilder",
                marke: "Marke",
                modell: "Modell",

                //Fahrzeugverwalten
                fahrzeugverwalten: "Fahrzeugverwalten",
                keine_fahrzeug: "Keine Fahrzeuge verfügbar.",
                baujahr: "baujahr",
                km_stand: "Km stand",
                tuev: "Tüv",
                preis: "Preis",
                ps_leistung: "lesitung PS",
                loeschen: "löschen",

                //Profil
                profil: "Profil",
                benutzer_profil: "Benutzer Profil",
                pass_zurueck: "Passwort zurücksetzen",
                otp_an_email: "OTP wurde an die Email adresse geschickt",
                otp_geben: "Geben Sie den OTP ein:",
                otp_best: "Otp bestätigen",
                neu_pass: "Neues Passwort",
                neu_pass_best: "Bestätigen Sie das Passwort",
                btn_pass_aendern: "Passwort ändern",

                //Abmelden
                abmelden: "Abmelden",
            }
        },
        fr:{
            translation:{
                //wilkommen Text
                dacar: "Da Cars",
                dacar_text: "Achat et vente de voitures, entretien professionnel, teintage" +
                            "des vitres FOLIATEC, jantes en alliage, pneus, service de vitrage" +
                            "automobile, service de climatisation.", 
                dacar_wilk_text: "Bienvenue chez Da Cars, votre solution professionnelle pour l’entretien" +
                                "et la préparation de votre véhicule. Nous sommes votre partenaire de confiance" +
                                "pour redonner de l’éclat à votre voiture et la maintenir en parfait état. Nous" +
                                "proposons un service de haute qualité sur lequel vous pouvez compter ! Que vous" +
                                "ayez besoin d’un nettoyage, d’un teintage de vitres ou d’un service de vitrage," +
                                "nous utilisons des produits haut de gamme et des technologies modernes pour offrir" +
                                "à votre véhicule une apparence impeccable.",

                // Navbar
                dienstleistungen: "Services",
                fahrzeuge: "Véhicules",
                kontakt: "Contact",
                einloggen: "Se connecter",
                admin_eingeloggt: "Administrateur connecté",

                // Dienstleistungen
                kfz_aufbereitung: "Préparation de véhicule",
                scheibentoenung: "Teintage des vitres",
                autoglasservice: "Service de vitrage automobile",
                klimaservice: "Service de climatisation",

                // KFZ-Aufbereitung
                kfzaufbereitungverwalten: "Administration de la préparation du véhicule",
                preis_liste_kfzaufbereitung:"Liste de prix pour préparation automobile",
                keine_preis_liste_kfzaufbereitung: "Prix pas encore disponibles",
                dienste: "Services",
                beschreibung: "Description",
                pkw_preis: "Prix pour voiture particulière (PKW)",
                van_suv_preis: "Prix pour Van/SUV ",
                kleinbus_preis: "Prix pour minibus",
                aktion: "Action",
                aktualisieren: "mettre à jour",

                aussenreinigung: "Nettoyage extérieur",
                aussenreinigung_text: "Un nettoyage extérieur complet protège la peinture, redonne" +
                                        "à votre véhicule son éclat et préserve sa valeur à long terme.",
                
                aussenwaesche: "Lavage extérieur",
                aussenwaesche_shampoo: "Avec shampooing à la cire",
                
                lackpflege: "Entretien de la peinture",
                lackpflege_politur: "-	Polissage" +
                                        "Élimine les petites rayures, nettoie la peinture et crée une brillance" +
                                        "miroir avec une protection UV.",
                lackpflege_schleife: "Préparation de la peinture (Ponçage et polissage)",
                lackpflege_versiegelung: "Protection de la peinture (Scellement longue durée)",
                lackpflege_24: "Revêtement nano (-	Jusqu’à 24 mois)",
                lackpflege_36: "Scellement céramique (Jusqu’à 36 mois)",

                Innenreinigung: "Nettoyage intérieur",
                Innenreinigung_standard: "Nettoyage standard (Aspiration de l’intérieur, nettoyage" +
                                            "des vitres et du tableau de bord)",
                Innenreinigung_intensive: "Nettoyage intensif (Nettoyage standard + aspiration du" +
                                            "coffre, soin des plastiques, nettoyage des tissus, soin" +
                                            "du cuir, nettoyage du ciel de toit et des bords de porte)",

                stoff_textil: "Imprégnation des tissus/textiles (toit de cabriolet)",

                motorwaesche: "Nettoyage du moteur ",
                motorwaesche_text: "Un nettoyage professionnel du moteur élimine la saleté et les" +
                                    "dépôts, garantit un refroidissement optimal et facilite la" +
                                    "détection précoce de problèmes éventuels.",

                komplett_aufbereitung_inkl_motor: "Préparation complète (incluant le nettoyage du moteur)",

                glasversiegelung: "Protection des vitres",
                glasversiegelung_text: "Une protection des vitres garantit une visibilité claire et" +
                                        "protège vos vitres contre la saleté, l’eau et la neige, améliorant" +
                                        "ainsi la sécurité et la vision par tous les temps.",

                // Scheibentoenung
                scheibentoenung_title: "Teintage de vitres x Foliatec",
                scheibentoenung_text: "Notre teintage de vitres, en collaboration avec Foliatec, offre" +
                                    "non seulement un aspect esthétique, mais également une protection contre" +
                                    "les rayons UV et une meilleure confidentialité dans votre véhicule." +
                                    "Avec des films de haute qualité, nous garantissons une finition précise" +
                                    "et des résultats durables qui valorisent votre véhicule.",
                ab: "à partir de",

                // Autoglasservice
                autoglasservice_title: "Service de vitrage automobile",
                autoglasservice_text: "Notre service comprend l’évaluation, la réparation ou le remplacement des" +
                                    "vitres endommagées pour garantir la sécurité et la visibilité de votre véhicule." +
                                    "Nous utilisons des matériaux et des techniques de haute qualité pour que votre" +
                                    "vitre soit rapidement remise en état impeccable.",
                // KlimaService                   
                klimaservice_title: "Service de climatisation",
                klimaservice_text: "Un service de climatisation commence par une vérification du système pour détecter " +
                                "des fuites et évaluer son état général. Ensuite, l’ancien liquide réfrigérant est aspiré" +
                                "et éliminé conformément aux normes. Le système est nettoyé pour éliminer la saleté et les" +
                                "bactéries, avant d’être rempli avec un nouveau liquide réfrigérant. Enfin, nous testons le" +
                                "fonctionnement du système pour garantir une efficacité et une fiabilité optimales.",

                //Kontakt
                // Adresse
                land: "Allemagne",
                // Kontakt-firma-form
                frage: "Pour d’autres questions, veuillez écrire à",
                name: "Nom",
                ihr_name: "Votre nom",
                email: "Émail",
                ihre_email_adresse: "Votre adresse e-mail",
                nachricht: "Message",
                ihre_nachricht: "Votre message",
                agb: "J’accepte les conditions générales",
                absenden: "Dépêche",
                kontakt_success: "Message envoyé avec succès !",
                kontakt_error: "Une erreur s’est produite. Veuillez réessayer",

                //Einloggen
                anmelden: "annoncer",
                password: "Mot de passe",
                
                //Admin-Navbar
                //Fahrzeug hochladen
                fahrzeughochladen: "Télécharger un véhicule",
                fahrzeugbilder: "Photos de véhicule",
                marke: "Marque",
                modell: "Modèle",

                //Fahrzeugverwalten
                fahrzeugverwalten: "Gérer le véhicule",
                keine_fahrzeug: "Aucun véhicule disponible",
                baujahr: "Année de fabrication",
                km_stand: "Kilométrage",
                tuev: "Contrôle technique",
                preis: "Prix",
                ps_leistung: "Puissance (ch)",
                loeschen: "Supprimer",

                //Profil
                profil: "Profil",
                benutzer_profil: "Profil utilisateur",
                pass_zurueck: "Réinitialiser le mot de passe",
                otp_an_email: "Un code OTP a été envoyé à l’adresse e-mail.",
                otp_geben: "Entrez le code OTP",
                otp_best: "Confirmer le code OTP",
                neu_pass: "Nouveau mot de passe",
                neu_pass_best: "Confirmez le mot de passe",
                btn_pass_aendern: "Changer le mot de passe",

                //Abmelden
                abmelden: "Se déconnecter",
            }
        }
    }
})