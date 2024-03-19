import {useTranslation} from "react-i18next";
import {MdOutlineBathroom, MdOutlineBedroomParent, MdOutlinePhotoSizeSelectSmall} from "react-icons/md";
import {VscChromeMaximize} from "react-icons/vsc";
import {LiaRestroomSolid} from "react-icons/lia";

const RoomsCharacterList = ({room_size , capacity , num_balconies , num_bathrooms}) => {
    const {t} = useTranslation()

    return (
        <div
            data-aos='fade-up'
            className='flex divide-x-2 divide-iron leading-normal gap-x-2 md:gap-x-4  gap-y-1 items-center text-iron font-roboto text-sm  tracking-[0.4px] flex-wrap '>

            <p className="px-2 flex gap-x-2 items-center"> <span><MdOutlinePhotoSizeSelectSmall className={'text-lg'} /></span> <span className={'text-nowrap'} >{room_size} {t('roomInner.areaSymbol')}</span>  </p>
            <p className="px-2 flex gap-x-2 items-center"> <span> <MdOutlineBedroomParent className={'text-lg'} /></span>  <span className={'text-nowrap'} >{capacity} {t('roomInner.humenSymbol')}</span>  </p>
            <p className="px-2 flex gap-x-2 items-center"> <span > <LiaRestroomSolid className={'text-lg'} /></span  >  <span className={'text-nowrap'}>  {num_balconies} {t('roomInner.filterSymbol')}</span> </p>
            <p className="px-2 flex gap-x-2 items-center"> <span> <MdOutlineBathroom className={'text-lg'} /></span> <span className={'text-nowrap'}>{num_bathrooms} {t('roomInner.balconySymbol')}</span> </p>
        </div>
    );
}

export default RoomsCharacterList;