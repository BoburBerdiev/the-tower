import { LuCalendarRange } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";
import { ImgUI } from '..'
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";

const NewsCard = ({img, date, decr, href}) => {
  const {t} = useTranslation()
  return (
    <a href={href} className={`block group w-full aspect-[16/22] lg:aspect-[16/18] relative overflow-hidden card-shadow duration-300 `}>
      <div className='duration-300 group-hover:scale-[1.1] absolute top-0 left-0 w-full h-full z-[8] '>
        <ImgUI src={img} imgStyle={'object-cover'}/>
      </div>
      <div className=' bg-gradient-to-t from-black/80 group-hover:from-black/65 md:from-black/50 via-black/50 to-black/0 w-full h-full absolute top-0 left-0 z-[9]'></div>
      <div className='w-full h-full duration-300 z-10 flex flex-col justify-end  '>
        <div className="relative z-10 duration-300 h-fit flex flex-col group-hover:pl-6 px-3 lg:px-[15px] pb-4 md:pb-6 text-white space-y-2 before:h-full before:w-0 before:bg-brown before:absolute before:top-0 before:left-0 group-hover:before:w-2 before:duration-300 before:rounded-tr before:z-[99]">
          <div className='flex items-center'>
            <LuCalendarRange className="md:text-xl text-lg pb-[3px]" />
            <p className={`font-inter font-medium text-sm md:text-base`}>{date}</p>
          </div>
          <p className={`font-openSans text-sm md:text-xl  line-clamp-3 md:line-clamp-2`}>{decr}</p>
          <div className={`font-openSans max-md:text-xs w-fit flex items-center gap-x-2  hover:underline`}>
            {t('btn.more')}
            <HiArrowRight className="group-hover:md:ml-3 duration-300" />
          </div>
        </div>
      </div>  
    </a>
  )
}

export default NewsCard