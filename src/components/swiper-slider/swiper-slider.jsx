import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination,} from 'swiper/modules';
import {GrNext, GrPrevious} from "react-icons/gr";
import {HotelCard, ImgUI, NewsCard} from "@/components";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useEffect, useState} from 'react';

const SwiperSlider = ({gallery , hotelCardData, newsCard }) => {

    const [galleryData , setGalleryData] = useState('')
    const [selectGallery , setSelectGallery] = useState('')
    useEffect(() => {setGalleryData(gallery)} , [gallery])


    const onInit =  () => {
    }

    return (
        <div className='card-ui relative'>


            {galleryData &&

                    <Swiper
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".swipper-button-next",
                            prevEl: ".swipper-button-prev",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                                spaceBetween: 10,
                            },
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            el: ".my-pagination",
                        }}
                        loop={true}
                        modules={[Navigation, Pagination]}
                        className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
                    >

                        <LightGallery
                            speed={500}
                            onInit={onInit}
                            plugins={[lgThumbnail, lgZoom]}
                        >
                            {
                                galleryData?.map(image => (
                                    <SwiperSlide   className={'w-full '} key={image?.id}>
                                        <div onclick={() => setSelectGallery(image?.scr)}  class={'aspect-video block relative overflow-hidden'}>
                                            <ImgUI src={image?.scr} alt={'gallery'} objectFit={'object-cover'}/>
                                        </div>
                                    </SwiperSlide>


                                ))
                            }

                </LightGallery>

                        <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
                            <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev ">
                                <GrPrevious className="text-2xl"/>
                            </div>
                            <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>

                            <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next ">
                                <GrNext className="text-2xl"/>
                            </div>
                        </div>
                    </Swiper>



            }


            {
                hotelCardData &&
                <Swiper
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".swipper-button-next",
                        prevEl: ".swipper-button-prev",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    pagination={{
                        clickable: true,
                        el: ".my-pagination",
                    }}
                    loop={true}
                    modules={[Navigation , Pagination]}
                    className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
                >
                    {

                        hotelCardData?.map(card => (
                            <SwiperSlide className={'h-full'}  key={card?.id}>
                                <HotelCard img={card?.img} key={card.id} id={card.id} cardTitle={card?.title} descriptions={card?.information} href={card?.slug} price={card?.price} time={card?.time} />
                            </SwiperSlide>
                        ))

                    }



                        <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
                            <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev ">
                                <GrPrevious className="text-2xl" />
                            </div>
                            <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>

                            <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next ">
                                <GrNext className="text-2xl" />
                            </div>
                        </div>
                    </Swiper>
            }

            {
                newsCard &&
                <Swiper
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".swipper-button-next",
                        prevEl: ".swipper-button-prev",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    pagination={{
                        clickable: true,
                        el: ".my-pagination",
                    }}
                    loop={true}
                    modules={[Navigation , Pagination]}
                    className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
                >
                    {
                        newsCard?.map(card => (
                            <SwiperSlide className={'h-full'}  key={card?.id}>
                                <NewsCard img={card?.img} date={card?.date} decr={card?.decr} href={card?.href} />
                            </SwiperSlide>
                        ))
                    }


                    <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
                        <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev ">
                            <GrPrevious className="text-2xl" />
                        </div>
                        <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>

                        <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next ">
                            <GrNext className="text-2xl" />
                        </div>
                    </div>
                </Swiper>
            }




            {/*    newsCard &&*/}
            {/*    newsCard?.map(card => (*/}
            {/*        <SwiperSlide className={'h-full'}  key={card?.id}>*/}
            {/*            <NewsCard img={card?.img} date={card?.date} decr={card?.decr} href={card?.href} />*/}
            {/*        </SwiperSlide>*/}
            {/*    ))}*/}
        </div>
    );
};

export default SwiperSlider;