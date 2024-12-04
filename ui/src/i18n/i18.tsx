import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next, Translation} from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    lng:"de",
    resources:{
        de:{
            translation:{
                dienstleistungen: "dienstleistungen"
            }
        },
        fr:{
            translation:{
                
            }
        }
    }
})