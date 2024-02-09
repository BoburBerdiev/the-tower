import { useEffect, useState } from "react"
import {ButtonUl, ImgUl} from "../index"
import Skeleton from "react-loading-skeleton"

const ServiceCard = ({src, title, href, decsr , indexForAos}) => {
  
  return (
    <div data-aos='fade-up' data-aos-delay={`${indexForAos}00`} className="relative overflow-hidden cursor-pointer group">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[510px]   ">
          {<ImgUl objectFit={'object-cover'} src={src}/> || <Skeleton baseColor="grey" width={`100%`} height={`100%`} />}
      </div>
      <div className="w-full h-full text-white absolute z-20 top-0 transition-all duration-500 ease group-hover:bg-black/50 bg-[-298.719px_0px/267.876%_100%] bg-no-repeat grid place-content-center">
        <div className="py-[7.5%] px-4 text-white absolute z-20 top-[20%] group-hover:top-0 flex flex-col transition-all duration-500 ease items-center justify-end w-full h-full ">
          <h4 className="service-card-title font-elegance leading-normal text-xl text-center mb-10 group-hover:mb-2 transition-all duration-500 ease sm:text-2xl md:text-[28px]">{title || <Skeleton width={`200px`} />}</h4>
          <div className="grid grid-rows-[0fr] transition-all duration-500 ease group-hover:grid-rows-[1fr]">
            <p className="mb-3 overflow-hidden text-xs font-light text-center transition-all duration-500 opacity-0 font-roboto md:text-sm xl:text-base md:mb-5 ease group-hover:opacity-100">{decsr}</p>
          </div>
          <ButtonUl text={'Подробнее'} href={href}  />
        </div>
      </div>
      {
        <ImgUl objectFit={'object-cover'} src={src}/>
        &&
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.5)_18.9%] to-[rgba(0,0,0,0)_37.76%] bg-[-72.971px_-52.896px/280.882%_118.135%] bg-no-repeat"></div>
      }
    </div>
  )
}

export default ServiceCard