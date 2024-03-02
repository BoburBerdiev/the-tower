import { ImgUI } from ".."
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const LocationInfos = ({title, icon, alt, locations}) => {
    const {lang} = useSelector(state => state.langSlice)

  return (
    <div className='text-white'>
      <div className='flex items-center gap-x-5 pb-[10px]'>
        <div className="w-6 h-6 relative shrink-0">
          <ImgUI src={icon} alt={alt} objectFitContain/>
        </div>
        <h3 className='text-lg font-medium'>{title}</h3>
      </div>
      <ul data-aos='fade-right' className='space-y-[5px] md:space-y-[10px]'>
        {
          locations.map((location, index) => (
            <li key={location?.id} className='flex items-center justify-between text-sm lg:text-base gap-10 font-thin'>
              <p>{ langSelect(lang ,location?.title_ru, location?.title_en , location?.title_uz ) }</p>
              <p className=" shrink-0 text-[12px] lg:text-base">{location.distance}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LocationInfos