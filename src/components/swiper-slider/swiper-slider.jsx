import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination,} from 'swiper/modules';
import {GrNext, GrPrevious} from "react-icons/gr";
import {HotelCard, ImgUI} from "@/components";


// gallery
const hotelCardData = [
    {
        img: "/image/IMG_5481-min.jpg" ,
        title: "Standart Twin",
        id:5,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '400 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5481-min.jpg" ,
        title: "Standart Twin",
        id:10,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '400 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5481-min.jpg" ,
        title: "Standart Twin",
        id:1,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '400 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5484-min.jpg" ,
        title: "Standart Twin",
        id:2,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '400 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5346-min.jpg" ,
        title: "Standart Twin",
        id:3,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '400 000 ',
        time: 'за ночь',
    },
]
const gallery = [
    {
        scr:'/image/abduganiev.png',
        id:1
    }
    ,{
        scr:'/image/abduganiev.png',
        id:2
    }
    ,{
        scr:'/image/IMG_5513-min.png',
        id:3
    },
    {
        scr:'/image/footer-bg.png',
        id:4
    },
    {
        scr:'/image/pattern.png',
        id:5
    },
]
const SwiperSlider = ({}) => {
    return (
        <div className='card-ui relative'>
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
                {/*{*/}
                {/*    gallery?.map(image => (*/}
                {/*         <SwiperSlide className={'h-full'}  key={image?.id}>*/}
                {/*            <div className={'w-full aspect-video '}>*/}
                {/*             <ImgUI src={image?.scr}  />*/}
                {/*            </div>*/}
                {/*         </SwiperSlide>*/}
                {/*    ))*/}
                {/*}*/}
                {hotelCardData.map(card => (
                    <SwiperSlide className={'h-full'}  key={card?.id}>
                        <HotelCard img={card.img} key={card.id} id={card.id} cardTitle={card.title} descriptions={card.information} href={card.slug} price={card.price} time={card.time} />
                    </SwiperSlide>
                ))}
                {/*{productsArr?.map(product => (*/}
                {/*    product?.id && <SwiperSlide className={'h-full '} key={product?.id}>*/}

                {/*    </SwiperSlide>*/}
                {/*))}*/}

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
        </div>
    );
};

export default SwiperSlider;