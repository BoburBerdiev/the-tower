import ImgUl from "../../components/img-ul/img-ul"
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

const galleryZoomContent = [
  "/image/IMG_7362-min.jpg",
  "/image/IMG_7361-min.jpg",
  "/image/IMG_5346-min.jpg",
  "/image/IMG_5484-min.jpg",
  "/image/IMG_5451-min.jpg",
]
const GalleryZoom = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <LightGallery
    onInit={onInit}
    elementClassNames={"grid grid-cols-4  md:gap-5 gap-3"}
    speed={500}
    plugins={[lgThumbnail, lgZoom]}
>
<a data-aos='zoom-in' data-aos-delay='100' href={galleryZoomContent[0]} className="block col-span-4 md:col-span-2  h-[200px] md:h-[350px]">
<ImgUl src={galleryZoomContent[0]} objectFit={'object-cover'} />
</a>
<a data-aos='zoom-in' data-aos-delay='150' href={galleryZoomContent[1]} className="block col-span-2 h-[200px] md:h-[350px]">
<ImgUl src={galleryZoomContent[1]} objectFit={'object-cover'} />
</a>
<a data-aos='zoom-in' data-aos-delay='200' href={galleryZoomContent[2]} className="block  col-span-2 h-[200px] md:h-[350px]">
<ImgUl src={galleryZoomContent[2]} objectFit={'object-cover'} />
</a>
<a data-aos='zoom-in' data-aos-delay='250' href={galleryZoomContent[3]} className="block h-[200px] md:h-[350px] col-span-2 md:col-span-1 ">
<ImgUl src={galleryZoomContent[3]} objectFit={'object-cover'} />
</a>
<a data-aos='zoom-in' data-aos-delay='300' href={galleryZoomContent[4]} className="block col-span-2 md:col-span-1 h-[200px] md:h-[350px] ">
<ImgUl src={galleryZoomContent[4]} objectFit={'object-cover'} />
</a>
</LightGallery>
  )
}

export default GalleryZoom
