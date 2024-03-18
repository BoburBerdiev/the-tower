import {DropdownUI} from "@/components";
import { FaYoutube} from 'react-icons/fa6';
import {formatPhoneNumber, langSelect} from "@/helper";
import {changleLang} from "@/slice/lang";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";


const TopNav = ({contact}) => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const handleChangleLang = (lang) => {
        i18n.changeLanguage(lang.value)
        dispatch(changleLang(lang.value))
    }
    const {lang} = useSelector(state => state.langSlice)


    const langList = [
        {
            title: t('lang.ru'),
            value: 'ru',
            id: 1
        },
        {
            title: t('lang.en'),
            value: 'en',
            id: 2
        },
        {
            title: t('lang.uz'),
            value: 'uz',
            id: 3
        }
    ]
    return (
        <div className='bg-brown w-full'>
            <div className='container flex justify-between gap-x-4 xl:gap-x-10 items-center text-white'>
                <div className='flex items-center gap-2.5'>
                    <a href={contact?.instagram} target='_blank'><RiInstagramFill className='text-xl' /></a>
                    <a href={contact?.facebook} target='_blank'><FaFacebookSquare className='text-lg' /></a>
                    <a href={contact?.youtube} target='_blank'><FaYoutube className='text-xl'/></a>
                </div>
                <div className='flex justify-end gap-x-4 xl:gap-x-10 items-center font-roboto text-sm text-white '>
                    <DropdownUI list={langList} onClick={handleChangleLang}/>
                    <a href={`tel:${contact?.phone}`} className='hidden sm:block'>{
                        formatPhoneNumber(contact?.phone)
                    }</a>
                    <p className='hidden lg:block'> {langSelect(lang, contact?.address_ru, contact?.address_en, contact?.address_uz)}</p>
                </div>
            </div>
        </div>
    )
}
export default TopNav
