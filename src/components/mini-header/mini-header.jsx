import React from 'react'
import { ImgUI } from '..'

const MiniHeader = ({img, title}) => {
  return (
    <div className='w-full relative h-[30vh] flex flex-col items-center justify-center overflow-hidden'>
      <ImgUI src={img} alt={'banner'}/>
      <div className='w-full h-full z-10 absolute top-0 left-0 bg-black/40'></div>
      <div className='container flex flex-col items-center relative z-[11]'>
        <h2 className=' mini-header-title '>{title}</h2>
      </div>
    </div>
  )
}

export default MiniHeader