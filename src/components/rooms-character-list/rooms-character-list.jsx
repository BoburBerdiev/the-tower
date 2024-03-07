import {useTranslation} from "react-i18next";

const RoomsCharacterList = ({room_size , capacity , num_balconies , num_bathrooms}) => {
    const {t} = useTranslation()

    return (
        <div
            data-aos='fade-up'
            className='flex flex-wrap divide-x-2 divide-iron leading-normal gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>

            <p className="px-3 text-center">{room_size} {t('roomInner.areaSymbol')}</p>
            <p className="px-3 text-center">{capacity} {t('roomInner.humenSymbol')}</p>
            <p className="px-3 text-center">{num_balconies} {t('roomInner.filterSymbol')}</p>
            <p className="px-3 text-center">{num_bathrooms} {t('roomInner.balconySymbol')}</p>
        </div>
    );
}

export default RoomsCharacterList;