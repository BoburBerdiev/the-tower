import {Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {ImgUI} from "@/components";
import {GrNext, GrPrevious} from "react-icons/gr";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";

const RoomInnerSlider = ({images}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {
                images?.length > 0 &&
                <div className={'grid grid-cols-8 xl:grid-cols-12 gap-2 lg:gap-[30px]'}>
                    <div className={'col-span-6 xl:col-span-10 room-slider'}>
                        <Swiper

                            loop={true}
                            spaceBetween={10}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            modules={[FreeMode, Thumbs ,EffectFade, Autoplay, Pagination]}
                            className="mySwiper2  w-full aspect-square sm:h-[350px] md:h-[450px] lg:h-[500px]  "
                            effect={"fade"}
                            pagination={{
                                clickable: true,
                              }}
                        >
                            {
                                images?.map(image => (
                                    <SwiperSlide key={image?.id}>
                                        <div data-aos='fade-in'  href={image?.image} className={'block w-full h-full'}>
                                            <ImgUI priority={true} src={image?.image} alt={'room-inner'}/>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }

                        </Swiper>
                    </div>

                    <div className={'col-span-2 h-full xl:col-span-2  gap-4 room-inner-slider'}>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs ,Navigation]}
                            className={"mySwiper flex flex-col w-full h-full"}
                        >
                                    {
                                        images?.map(image => (
                                            <SwiperSlide key={image?.id} className='relative  w-full '>
                                                <ImgUI src={image?.image} imgStyle={'object-cover cursor-pointer'} alt={'rooms-inner'}/>
                                            </SwiperSlide>
    
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