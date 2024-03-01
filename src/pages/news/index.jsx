import SEO from '@/SEO/SEO'
import { MiniHeader, NewsCard, SectionUI, Slider } from '@/components'
import NewsCardSkeleton from '@/components/news-card-skeleton/news-card-skeleton'
import { useTranslation } from 'react-i18next'
import {news} from '@/SEO/SEO.config'
import { useSelector } from 'react-redux'
const index = () => {
  const {t} = useTranslation()
const {lang} = useSelector(state => state.langSlice)

  const newsBanner = {
    title: t('news.title'),
    img : '/image/IMG_5451-min.jpg'
  }
  return (
    <div>
       <SEO
                ogImage={'/logo.png'}
                title={news[lang].title}
                description={news[lang].description}
                ogTitle={news[lang].ogTitle}
                ogDescription={news[lang].ogDescription}
                twitterHandle={news[lang].twitterHandle}
            />
      <div>
        <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
      </div>
      <SectionUI padding={'py-10 md:py-16 lg:py-[100px]'}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[30px]">

          <NewsCardSkeleton />
          <NewsCardSkeleton />
          <NewsCardSkeleton />
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
          <NewsCard date={'17 февр. 2023г.'} href={'/news'} img={'/image/IMG_7359-min.jpg'} decr={'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.'}/>
        </div>
      </SectionUI>
    </div>
  )
}

export default index