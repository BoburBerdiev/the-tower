import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {ImgUI} from "@/components";
import {GrNext, GrPrevious} from "react-icons/gr";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const GalleryZoomInner = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {
                images.length > 0 &&
                <>

                    <Swiper

                        loop={true}
                        spaceBetween={10}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Thumbs ,EffectFade, Autoplay]}
                        className="mySwiper2"
                        effect={"fade"}
                    >
                        {
                            images?.map(image => (
                                <SwiperSlide key={image?.id}>
                                    <LightGallery plugins={[lgThumbnail, lgZoom]}>
                                    <a  href={image?.src} className={'block w-full aspect-video lg:aspect-[10/4]'}>
                                        <ImgUI priority={true} src={image?.src}/>
                                    </a>
                                    </LightGallery>
                                </SwiperSlide>

                            ))
                        }

                    </Swiper>
                    <div className={'h-[30px] md:h-10'}>

                    </div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={6.5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs ,Navigation]}
                        className="mySwiper"
                        navigation={{
                            nextEl: ".swipper-button-next",
                            prevEl: ".swipper-button-prev",
                        }}
                    >
                        <div className={'grid grid-cols-4'}>
                            {
                                images?.map(image => (
                                    <SwiperSlide key={image?.id}>
                                        <div className={'w-full aspect-video'}>
                                            <ImgUI src={image?.src}/>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                            {(
                                <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
                                    <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev ">
                                        <GrPrevious className="text-2xl" />
                                    </div>

                                    <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next ">
                                        <GrNext className="text-2xl" />
                                    </div>
                                </div>
                            )}
                        </div>

                    </Swiper>
                </>

            }
        </>
    );
};

export default GalleryZoomInner;