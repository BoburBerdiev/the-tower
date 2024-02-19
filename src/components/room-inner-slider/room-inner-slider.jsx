import {Autoplay, EffectFade, FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {ImgUI} from "@/components";
import {GrNext, GrPrevious} from "react-icons/gr";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";

const RoomInnerSlider = ({images}) => {
    // console.log(images[0].src)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {
                images.length > 0 &&
                <div className={'grid grid-cols-6 gap-[30px]'}>
                    <div className={'col-span-5'}>
                        <Swiper

                            loop={true}
                            spaceBetween={10}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            modules={[FreeMode, Thumbs ,EffectFade, Autoplay]}
                            className="mySwiper2 h-[430px]"
                            effect={"fade"}
                        >
                            {
                                images?.map(image => (
                                    <SwiperSlide key={image?.id}>
                                        <div  href={image?.src} className={'block w-full aspect-video lg:aspect-[10/4]'}>
                                            <ImgUI priority={true} src={image?.img}/>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }

                        </Swiper>
                    </div>

                    <div className={'col-span-1  gap-4'}>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs ,Navigation]}
                            className={"mySwiper flex flex-col"}

                        >
                                {
                                    images?.map(image => (
                                        <div className={'w-full h-[150px] bg-red-300'}>
                                        <SwiperSlide className={'w-full h-full'} key={image?.id}>
                                            <div className={'w-full h-full relative'}>
                                                <ImgUI src={image?.img}/>
                                            </div>
                                        </SwiperSlide>
                                        </div>

                                    ))
                                }
                        </Swiper>
                    </div>

                </div>

            }
        </>

    );
};

export default RoomInnerSlider;