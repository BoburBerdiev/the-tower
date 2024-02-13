import React from 'react'

const LocationInfos = ({title, icon, alt, locations}) => {
  return (
    <div className='text-white'>
      <div className='flex items-center gap-x-5 pb-[10px]'>
        <div>
          <img src={icon} alt={alt} />
        </div>
        <h3 className='text-lg font-medium'>{title}</h3>
      </div>
      <ul className='space-y-[5px] md:space-y-[10px]'>
        {
          locations.map(location => (
            <li className='flex items-center justify-between gap-10 font-thin'>
              <p>{location.place}</p>
              <p>{location.distance}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LocationInfos