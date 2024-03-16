import { useTranslation } from 'react-i18next'
import {ButtonUI , Slider} from '@/components/index'
import {RoomsCharacterList} from "@/components";
import {changleTypeBooking} from "@/slice/booking";
import {useDispatch} from "react-redux";


const HotelCard = ({imgs, cardTitle, room_size,capacity ,num_balconies , num_bathrooms,  indexForAos , href}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()

  return (

    <div data-aos='fade-up' data-aos-delay={`${indexForAos}00`} className='relative flex flex-col w-full text-black'>
      <div className='flex flex-col justify-between h-full'>
        <div>
         <div className=' w-full h-[180px] md:h-[250px] xl:h-[300px]  mb-3 lg:mb-5 relative'>
            <Slider SliderContent={imgs} PaginationInner={true} card={true} />
         </div>
         <div className='md:space-y-3 '>
           <h5 className='font-elegance leading-normal tracking-[0.48px] uppercase text-lg md:text-xl lg:text-2xl '>{cardTitle}</h5>
           <div className='flex flex-wrap leading-normal gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>
              <RoomsCharacterList room_size={room_size} capacity={capacity} num_balconies={num_balconies} num_bathrooms={num_bathrooms} />
           </div>
         </div>
        </div>
       <div className='flex flex-col w-full justify-between gap-2 mt-2 md:mt-5 sm:flex-row md:items-center'>
        <ButtonUI paddingFull={true} text={t('btn.booking')} href={'/booking'} onClick={() => dispatch(changleTypeBooking(cardTitle))}  />
        <ButtonUI btnBorder={true} paddingFull={true} href={href}  text={t('btn.more')}  />
       </div>

      </div>
    </div>
  )
}

export default HotelCard