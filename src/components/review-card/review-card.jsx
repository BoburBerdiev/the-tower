import React from 'react'
import { ImgUI } from '..'
import { MdStarRate } from "react-icons/md"; 
import { MdStarOutline } from "react-icons/md";



const ReviewCard = ({name, flag, country, rateCount, date, title, text}) => {

  const count = Math.min(Math.max(parseInt(rateCount, 10), 0), 5)

  const stars = Array.from({ length: 5}, (_, index) => (
    index < count
    ?
    <span className='text-orange-400'><MdStarRate /></span>
    :
    <span><MdStarOutline /></span>
    // <span key={index} className={`${index < count ? 'text-orange-400' : ''}`}></span>
  ))

  return (
    <div className='border border-brown rounded-none outline-none p-5 lg:p-[30px] w-full font-roboto font-light tracking-[0.36px] xl:text-lg'>
      <div className='md:flex gap-x-5 md:gap-x-[38px]'>
        <div className='flex flex-col justify-between max-md:float-right mr-4 mb-2 gap-3 md:gap-5 md:h-20'>
          <div className='space-y-[5px]'>
            <h4 className='text-sm font-medium'>{name}</h4>
            <div className='flex items-center gap-x-[6px]'>
              <div className='w-5 h-[14px] relative'>
                <ImgUI src={flag} />
              </div>
              <p className='text-xs'>{country}</p>
            </div>
          </div>
          <div className='flex items-center md:text-sm'>{stars}</div>
        </div>
        <div className='space-y-2'>
          <p className='text-xs font-light'>{`Дата отзыва: ${date}`}</p>
          <h3 className='text-lg md:text-xl font-medium'>{title}</h3>
          <p className='md:text-lg'>{`«${text}»`}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard