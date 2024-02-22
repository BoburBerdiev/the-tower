import { LightGallery } from 'lightgallery/lightgallery'
import React from 'react'

const SwiperZoom = () => {
  const onInit = () => {
  }
  return (
    <div className='card-ui relative'>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} >

      </LightGallery>
    </div>
  )
}

export default SwiperZoom