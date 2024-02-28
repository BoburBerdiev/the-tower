import SEO from "@/SEO/SEO";
import {GalleryZoomInner, SectionUI, SectionTitle, GalleryZoom, MiniHeader} from "@/components";
import { useTranslation } from "react-i18next";
import {gallery} from '@/SEO/SEO.config'
import { useSelector } from "react-redux";

const Gallery = () => {

    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const images = [
        {
            id:1,
            src:"/image/IMG_5481-min.jpg"
        },
        {
            id:2,
            src:"/image/IMG_5481-min.jpg"
        },
        {
            id:3,
            src:"/image/IMG_5481-min.jpg"
        },
        {
            id:4,
            src:"/image/IMG_5481-min.jpg"
        },
        {
            id:5,
            src:"/image/IMG_5514-min.jpg"
        },
        {
            id:7,
            src:"/image/IMG_5481-min.jpg"
        },
        {
            id:15,
            src:"/image/IMG_5514-min.jpg"
        }
    ]
    const newsBanner = {
        title: t('gallery.title'),
        img : '/image/IMG_5451-min.jpg'
    }
  return (
      <>
      <SEO
              ogImage={'/image/Tower hotel___eng 1.png'}
              title={gallery[lang].title}
              description={gallery[lang].description}
              ogTitle={gallery[lang].ogTitle}
              ogDescription={gallery[lang].ogDescription}
              twitterHandle={gallery[lang].twitterHandle}
            />
          <div>
              <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
          </div>
          <SectionUI padding='py-10 md:py-20   '>
                <GalleryZoom />
              <GalleryZoomInner images={images}/>
          </SectionUI>
      </>

  )
}

export default Gallery
