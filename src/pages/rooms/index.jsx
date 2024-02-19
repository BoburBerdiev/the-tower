import { useState } from "react";
import {
    SectionTitle,
    SectionUI,
    Slider,
    HotelCardSkeleton,
    RoomsCharacterList,
    MiniHeader,
    RoomsRow
} from "@/components"


const roomsBannerText = [
    {
        title: "Почувствуйте себя как дома!",
        img: "/image/IMG_5346-min.jpg",
    },
    {
        title: "Почувствуйте себя как дома!2",
        img: "/image/IMG_5346-min.jpg",
    },
    {
        title: "Почувствуйте себя как дома! 3",
        img: "/image/IMG_5346-min.jpg",
    },
];
const roomsCardsContent = [
    {
        img: "/image/IMG_5513-min.jpg" ,
        title: "Standart Twin",
        id:0,
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
        title: "Standart double",
        id:1,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '550 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5481-min.jpg" ,
        title: "deluxe",
        id:2,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '650 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5481-min.jpg" ,
        title: "deluxe",
        id:3,
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],
        slug: "link",
        price: '650 000 ',
        time: 'за ночь',
    },
    {
        img: "/image/IMG_5513-min.jpg" ,
        title: "Standart Twin",
        id:4,
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
        title: "Standart double",
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
        id:6,
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
        id:7,
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
        id:8,
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

const newsBanner = {
    title: 'Наши номера',
    img : '/image/IMG_5451-min.jpg'
}
const index = () => {
    const [load, setLoad] = useState(false)
    return (
        <div>
            {/*<div className="w-full h-[90vh]">*/}
            {/*    <Slider SliderContent={roomsBannerText} innerBtn={true} />*/}
            {/*</div>*/}

            <div>
                <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
            </div>
            <SectionUI bgFigureTopPostion={'top-0 left-0'}
                       padding={'py-10 md:py-20 lg:pb-[90px] lg:pt-32 xl:pt-[100px]'}>

                <div className="grid grid-cols-1 gap-5 lg:gap-[30px] pt-10">
                    {
                        load ?
                            Array(9).fill("").map((_, ind) => (
                                <HotelCardSkeleton key={ind}/>
                            ))
                            :
                            roomsCardsContent.map((card , index) => (
                                <>
                                    {/*<HotelCard img={card.img} key={card.id} id={card.id} cardTitle={card.title} descriptions={card.information} href={card.slug} price={card.price} time={card.time} />*/}
                                    <RoomsRow key={card.id} order={index} card={card}/>
                                </>

                            ))
                    }
                </div>
            </SectionUI>
        </div>
    )
}

export default index
