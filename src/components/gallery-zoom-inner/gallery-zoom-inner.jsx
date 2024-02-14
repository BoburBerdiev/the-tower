import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {ImgUI} from "@/components";
import {GrNext, GrPrevious} from "react-icons/gr";

const GalleryZoomInner = ({images}) => {
    console.log(images[0].src)
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
                                    <div className={'w-full aspect-video lg:aspect-[10/4]'}>
                                        <ImgUI priority={true} src={image?.src}/>
                                    </div>
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
                        slidesPerView={16}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper"

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
                        </div>

                    </Swiper>
                </>

            }
        </>
    );
};

export default GalleryZoomInner;