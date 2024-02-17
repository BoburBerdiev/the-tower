

import {GalleryZoomInner, SectionUI, SectionTitle, GalleryZoom, MiniHeader} from "@/components";

const Gallery = () => {

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
    console.log(1)
    const newsBanner = {
        title: 'Фотогалерея',
        img : '/image/IMG_5451-min.jpg'
    }
  return (
      <>
          <div>
              <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
          </div>
          <SectionUI padding='py-10 md:py-20   '>

              <GalleryZoomInner images={images}/>
          </SectionUI>
      </>

  )
}

export default Gallery
