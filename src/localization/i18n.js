import {initReactI18next} from "react-i18next";
import i18next from "i18next";
import uz from './uz.json'
import ru from './ru.json'
import en from './en.json'


i18next.use(initReactI18next).init({
        fallbackLng: 'ru',
        supportedLngs: ['ru', 'uz' , 'en'],
        interpolation: {
                escapeValue: false
        },
        resources: {
                ru,
                uz,
                en
        }
})