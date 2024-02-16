import { LuCalendarRange } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";
import { ImgUI } from '..'
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";

const NewsCard = ({img, date, decr, href}) => {
  const {t} = useTranslation()
  return (
    <div className={` group w-full aspect-[16/22] lg:aspect-[16/18] relative overflow-hidden`}>
      <div className='duration-300 group-hover:scale-[1.1] absolute top-0 left-0 w-full h-full z-[8]'>
        {
          img 
          ?
          <ImgUI src={img} imgStyle={'object-cover'}/>
          :
          <Skeleton className="w-full h-full"/>
        }
      </div>
      <div className=' bg-gradient-to-t from-black/80 md:from-black/50 via-black/50 to-black/0 w-full h-full absolute top-0 left-0 z-[9]'></div>
      <div className='w-full h-full relative z-10 flex text-white space-y-2 flex-col justify-end px-3 lg:px-[15px] pb-4 md:pb-6'>
        <div className='flex items-center '>
          {
            date
            ?
            <>
              <LuCalendarRange className="md:text-xl text-lg pb-[3px]" />
              <p className={`font-inter font-medium text-sm md:text-base`}>{date}</p>
            </>
              :
            <div>
              <Skeleton width={'0%'} height={'0%'} />
            </div>
          }
        </div>
        {
          decr
          ?
          <p className={`font-openSans text-sm md:text-xl  line-clamp-3 md:line-clamp-2`}>{decr}</p>
          :
          <div className="flex flex-col">
            <Skeleton width={'0%'} height={'0%'}/>
            <Skeleton width={'0%'} height={'0%'}/>
          </div>
        }
        {
          href
          ?
          <a href={href} className={`font-openSans max-md:text-xs w-fit flex items-center gap-x-2  hover:underline`}>
            {t('btn.more')}
            <HiArrowRight />
          </a>
            :
          <div className="w-1/4">
            <Skeleton width={'0%'} height={'0%'}/>
          </div>
        }
      </div>  
    </div>
  )
}

export default NewsCard