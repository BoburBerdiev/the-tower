

import {GalleryZoomInner, SectionUI , SectionTitle} from "@/components";

const Gallery = () => {
 
  return (

    <SectionUI padding='py-10 md:py-20   '>
      <div className="mb-5 md:mb-10">
        <SectionTitle justify={'justify-center'}  title={'Фотогалерея'} subTitle={'В нашем отеле 96 комфортабельных номеров, которые оснащены самым современным оборудованием по стандартам отелей Tower, высококачественными кроватями (перина) и постельным бельем, Смарт-телевизорами, обновленной системой кондиционирования воздуха, мини-баром, бесплатным высокоскоростным доступом в Интернет (Wi-Fi), мини-баром бар, фен, сейф.'}/>
      </div>
      {/*<GalleryZoom />*/}
      {/*<GalleryZoomInner />*/}
    </SectionUI>
  )
}

export default Gallery
