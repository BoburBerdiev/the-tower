import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {ImgUI} from "@/components";

const GalleryZoom = () => {
  const galleryZoomContent = [
    "/image/IMG_7362-min.jpg",
    "/image/IMG_7361-min.jpg",
    "/image/IMG_5346-min.jpg",
    "/image/IMG_5484-min.jpg",
    "/image/IMG_5451-min.jpg",
  ]
  const onInit = () => {
};
  return (
    <LightGallery
    onInit={onInit}
    elementClassNames={"grid grid-cols-4  md:gap-5 gap-3"}
    // speed={500}
    plugins={[lgThumbnail, lgZoom]}
>
<a  href={galleryZoomContent[0]} className="block col-span-4 md:col-span-2 relative h-[200px] md:h-[350px]">
<ImgUI src={galleryZoomContent[0]} alt={'gallery'} objectFit={'object-cover'} />
</a>
<a  href={galleryZoomContent[1]} className="block col-span-2 h-[200px] relative md:h-[350px]">
<ImgUI src={galleryZoomContent[1]} alt={'gallery'} objectFit={'object-cover'} />
</a>
<a href={galleryZoomContent[2]} className="block  col-span-2 h-[200px] relative md:h-[350px]">
<ImgUI src={galleryZoomContent[2]} alt={'gallery'} objectFit={'object-cover'} />
</a>
<a href={galleryZoomContent[3]} className="block h-[200px] md:h-[350px] relative col-span-2 md:col-span-1 ">
<ImgUI src={galleryZoomContent[3]} alt={'gallery'} objectFit={'object-cover'} />
</a>
<a  href={galleryZoomContent[4]} className="block col-span-2 md:col-span-1 relative h-[200px] md:h-[350px] ">
<ImgUI src={galleryZoomContent[4]} alt={'gallery'} objectFit={'object-cover'} />
</a>
</LightGallery>
  )
}

export default GalleryZoom
