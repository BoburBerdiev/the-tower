import { MiniHeader, NewsCard, SectionUI, Slider } from '@/components'
import React from 'react'

const index = () => {
  const newsBanner = {
    title: 'Новостной блог',
    img : '/image/IMG_5451-min.jpg'
  }
  return (
    <div>
      <div>
        <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
      </div>
      <SectionUI padding={'py-10 md:py-16 lg:py-[100px]'}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[30px]">
          <NewsCard date={'17 февр. 2023г.'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
        </div>
      </SectionUI>
    </div>
  )
}

export default index