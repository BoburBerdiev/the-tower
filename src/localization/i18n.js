import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import  LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import en from './en.json'
import ru from './ru.json'
import uz from './uz.json'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources:{
                en,
                ru,
                uz
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {escapeValue: false,},
        detection: {order:['cookie','localstorage'],caches:['cookie']}
    });

export default i18n