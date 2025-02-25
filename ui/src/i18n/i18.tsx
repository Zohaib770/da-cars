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
                lackpflege_politur: "-	Politur " +
                                        "(Entfernt kleine Kratzer, reinigt den Lack und erzeugt ein" +
                                        "spiegelglattes Hochglanzbild mit UV – Schutz)",
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
                telefon: "Telefon",
                ihre_tel: "Ihre Telefonnummer",
                nachricht: "Nachricht",
                ihre_nachricht: "Ihre Nachricht",
                agb: "Ich akzeptiere die AGB",
                absenden: "Asenden",
                kontakt_success: "Nachricht erfolgreich gesendet !",
                kontakt_error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut",

                //Impressum
                impressum: "Impressum",
                geschaeftsfuehrer: "Vertretungsberechtigte Geschäftsführer: Djilali Ameur",
                umsatzsteuer_id: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a",
                umsatzsteuer_gesetzte: "Umsatzsteuergesetz: DE231110586",
                impr_erst: "Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS) für Verbraucher:",
                impr_zweit: ". Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",

                //Haftungsausschluss
                haftungsausschluss: "Haftungsausschluss",
                inhalt: "1. Inhalt des Onlineangebotes",
                inhalt_text: "Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder" +
                            "Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich" +
                            "auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung" +
                            "der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger" +
                            "Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des" +
                            "Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle" +
                            "Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile" +
                            "der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu" +
                            "löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.",
                verweis: "2. Verweise und Links",
                verweis_text: "Bei direkten oder indirekten Verweisen auf fremde Webseiten (“Hyperlinks”), die außerhalb" +
                            "des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich" + 
                            "in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch" +
                            "möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor" +
                            "erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den" +
                            "zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte" +
                            "oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb" +
                            "distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die" +
                            "nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen" +
                            "Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten" +
                            "Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von" +
                            "Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder" +
                            "unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart" +
                            "dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen" +
                            "wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.",
                urheber: "3. Urheber- und Kennzeichenrecht",
                urheber_text: "Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder," +
                    	    "Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder," +
                            "Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken," +
                            "Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes" +
                            "genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt" + 
                            "den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen" +
                            "eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass" +
                            "Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor" +
                            "selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung" +
                            "solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten" +
                            "Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.",
                datenschutz: "4. Datenschutz",
                datenschutz_text: "Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher" +
                                "oder geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt" +
                                "die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis." +
                                "Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit technisch" +
                                "möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter" +
                                "Daten oder eines Pseudonyms gestattet. Die Nutzung der im Rahmen des Impressums oder" +
                                "vergleichbarer Angaben veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und" +
                                "Faxnummern sowie Emailadressen durch Dritte zur Übersendung von nicht ausdrücklich" +
                                "angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die Versender" +
                                "von sogenannten Spam-Mails bei Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.",
                rechte: "5. Rechtswirksamkeit dieses Haftungsausschlusses",
                rechte_text : "Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von" +
                            "dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen" +
                            "dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen" +
                            "sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.",

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
                lackpflege_politur: "-	Polissage " +
                                        "(Élimine les petites rayures, nettoie la peinture et crée une brillance" +
                                        "miroir avec une protection UV)",
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
                telefon: "Téléphone",
                ihre_tel: "Votre numéro de téléphone",
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