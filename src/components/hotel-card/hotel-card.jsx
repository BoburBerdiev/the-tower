import { useTranslation } from 'react-i18next'
import {ButtonUI , ImgUI} from '@/components/index'


const HotelCard = ({img, cardTitle, descriptions, href, price, time , indexForAos}) => {

  const {t} = useTranslation()

  return (

    <div data-aos='fade-up' data-aos-delay={`${indexForAos}00`} className='relative flex flex-col w-full text-black'>
      <div className='flex flex-col justify-between h-full'>
        <div>
         <div className=' w-full h-[180px] md:h-[250px] xl:h-[300px]  mb-3 lg:mb-5 relative'>
            <ImgUI src={img}  alt={'The Tower card'}  />
         </div>
         <div className='md:space-y-3 '>
           <h5 className='font-elegance leading-normal tracking-[0.48px] uppercase text-lg md:text-xl lg:text-2xl '>{cardTitle}</h5>
           <div className='flex flex-wrap leading-normal gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>
              {descriptions?.map((description , index) => (
                <p key={index}>{description}</p>
              ))}
           </div>
           <a href={href} className='text-sm block leading-normal font-roboto underline tracking-[0.36px] text-iron md:text-lg ' >{t('btn.more')}</a>
         </div>
        </div>
       <div className='flex flex-col justify-between gap-2 mt-2 md:mt-5 sm:flex-row md:items-center'>
        <div className='flex items-center justify-between font-elegance md:flex-col md:items-start '>
          <h4 className='text-lg md:text-x leading-normall lg:text-2xl '>
            <span>{price}</span>
            <span className='text-xs uppercase xl:text-2xl'>UZS</span>
            </h4>
          <p className='text-sm leading-normal md:text-base lg:text-lg'>{time}</p>
        </div>
        <ButtonUI  typeClass={'btn-gold'} text={t('btn.booking')}  />
       </div>

      </div>
    </div>
  )
}

export default HotelCard