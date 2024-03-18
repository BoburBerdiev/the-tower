import {ButtonUI,  ImgUI} from "@/components"
import { useTranslation } from "react-i18next"
import Skeleton from "react-loading-skeleton"

const ServiceCard = ({src, title, href, decsr , indexForAos}) => {
  const {t} = useTranslation()
  
  return (
    <div data-aos='fade-up' data-aos-delay={`${indexForAos}00`} className="relative overflow-hidden cursor-pointer group card-shadow">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[510px] group-hover:scale-105 transition duration-300 relative ">
          { src ? <ImgUI  src={src} alt={'service'} quality={100} card={true} /> : <Skeleton baseColor="grey" width={`100%`} height={`100%`} />}
      </div>
      <div className="w-full h-full text-white absolute z-20 top-0 transition-all duration-500 ease group-hover:bg-black/50 bg-[-298.719px_0px/267.876%_100%] bg-no-repeat grid place-content-center">
        <div className="max-md:py-[20%] py-[10%] group-hover:py-[7.5%] group-hover:h-full px-4 text-white absolute z-20 top-[20%] group-hover:top-0 flex flex-col transition-all duration-500 ease items-center justify-end w-full h-full max-md:h-[120%] ">
          <h4 className="service-card-title font-elegance leading-normal text-xl text-center mb-10 group-hover:mb-2 transition-all duration-500 ease sm:text-2xl md:text-[28px]">{title || <Skeleton width={`200px`} />}</h4>
          <div className="grid grid-rows-[0fr] transition-all duration-500 ease group-hover:grid-rows-[1fr]">
            <p className="mb-3 overflow-hidden text-xs font-light text-center transition-all duration-500 opacity-0 font-roboto md:text-sm xl:text-base md:mb-5 ease group-hover:opacity-100 line-clamp-[10]">{decsr}</p>
          </div>
          <ButtonUI text={t('btn.more')} href={href} btnWhiteBorder={true} stylePadding={'py-2 px-3.5 lg:px-5 lg:py-3.5'}  btnBorder={true} />
        </div>
      </div>
      {
        <ImgUI  src={src} alt={'service-card'}/>
        &&
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.5)_18.9%] to-[rgba(0,0,0,0)_37.76%] bg-[-72.971px_-52.896px/280.882%_118.135%] bg-no-repeat"></div>
      }
    </div>
  )
}

export default ServiceCard