import React from 'react'
import { ImgUI } from '..'
import { MdStarRate } from "react-icons/md"; 
import { MdStarOutline } from "react-icons/md";



const ReviewCard = ({name,  country,  date, title, text}) => {


  return (
    <div className='border border-brown rounded-none outline-none shadow-sm p-5 lg:p-[30px] w-full font-roboto font-light tracking-[0.36px] xl:text-lg'>
      <div className='md:flex gap-x-5 md:gap-x-[38px]'>
        <div className='flex flex-col justify-between max-md:float-right mr-4 mb-2 gap-3 md:gap-5 md:h-20'>
          <div className='space-y-[5px]'>
            <h4 className='text-sm font-medium'>{name}</h4>
            <div className='flex items-center gap-x-[6px]'>

              <p className='text-xs'>{country}</p>
            </div>
          </div>
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