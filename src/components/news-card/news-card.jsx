import { LuCalendarRange } from "react-icons/lu";
import { ImgUI } from '..'

const NewsCard = ({img, date, decr}) => {
  return (
    <div className='w-full aspect-[16/22] lg:aspect-[16/18] relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full z-[8]'>
        <ImgUI src={img} imgStyle={'object-cover'}/>
      </div>
      <div className=' bg-gradient-to-t from-black/50 to-black/0 w-full h-full absolute top-0 left-0 z-[9]'></div>
      <div className='w-full h-full relative z-10 flex text-white flex-col justify-end p-3 lg:px-[15px] lg:pb-6'>
        <div className='flex items-center gap-1.5 '>
          <LuCalendarRange className="md:text-xl text-lg" />
          <p className=" font-inter font-medium text-sm md:text-base">{date}</p>
        </div>    
      </div>  
    </div>
  )
}

export default NewsCard