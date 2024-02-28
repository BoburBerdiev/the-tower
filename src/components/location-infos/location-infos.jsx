import { ImgUI } from ".."

const LocationInfos = ({title, icon, alt, locations}) => {
  return (
    <div className='text-white'>
      <div className='flex items-center gap-x-5 pb-[10px]'>
        <div className="w-6 h-6 relative shrink-0">
          <ImgUI src={icon} alt={alt} objectFitContain/>
        </div>
        <h3 className='text-lg font-medium'>{title}</h3>
      </div>
      <ul className='space-y-[5px] md:space-y-[10px]'>
        {
          locations.map(location => (
            <li key={location?.id} className='flex items-center justify-between text-sm lg:text-base gap-10 font-thin'>
              <p>{location.place}</p>
              <p className=" shrink-0 text-[12px] lg:text-base">{location.distance}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LocationInfos