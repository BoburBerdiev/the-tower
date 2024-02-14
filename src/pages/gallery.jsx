

import {GalleryZoomInner, SectionUI , SectionTitle} from "@/components";

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
        }

    ]
    console.log(1)

  return (

    <SectionUI padding='py-10 md:py-20   '>
      <div className="mb-5 md:mb-10">
        <SectionTitle justify={'justify-center'}  title={'Фотогалерея'} subTitle={'В нашем отеле 96 комфортабельных номеров, которые оснащены самым современным оборудованием по стандартам отелей Tower, высококачественными кроватями (перина) и постельным бельем, Смарт-телевизорами, обновленной системой кондиционирования воздуха, мини-баром, бесплатным высокоскоростным доступом в Интернет (Wi-Fi), мини-баром бар, фен, сейф.'}/>
      </div>
      {/*<GalleryZoom />*/}
      <GalleryZoomInner images={images} />
    </SectionUI>
  )
}

export default Gallery
