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
import { useTranslation } from "react-i18next";
import SEO from "@/SEO/SEO";
import {roomsSEO} from "@/SEO/SEO.config"
import { useSelector } from "react-redux";
import axios from "axios";
import {langSelect} from "@/helper";


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
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
    {
        imgs: [
            {
                img: "/image/IMG_7363-min.jpg"
            },
            {
                img: "/image/IMG_7361-min.jpg"
            },
            {
                img: "/image/IMG_7362-min.jpg"
            },
        ],
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
        decr: "Комфортная комната для двух персон в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса."
    },
]


const index = ({rooms , roomsHeader}) => {
    const {t} = useTranslation()
const {lang} = useSelector(state => state.langSlice)



    const newsBanner = {
        title: t('rooms.miniHeader'),
        img : '/image/IMG_5451-min.jpg'
    }


    return (
        <div>

            <SEO
              ogImage={'/logo.png'}
              title={roomsSEO[lang]?.title}
                description={roomsSEO[lang]?.description}
                ogTitle={roomsSEO[lang]?.ogTitle}
                ogDescription={roomsSEO[lang]?.ogDescription}
                twitterHandle={roomsSEO[lang]?.twitterHandle}
            />
            <div>
                <MiniHeader img={roomsHeader.header_image} title={langSelect(lang , roomsHeader?.title_ru , roomsHeader?.title_en , roomsHeader?.title_uz)}/>
            </div>
            <SectionUI bgFigureTopPostion={'top-0 left-0'}
                       padding={'py-10 md:py-20 lg:pb-[90px] lg:pt-32 xl:pt-[100px]'}>

                <div className="grid grid-cols-1 gap-5 lg:gap-[30px] ">
                    {
                        rooms?.results &&

                        rooms?.results?.map((card , index) => (
                                <>
                                    <RoomsRow key={card.id} order={index} card={card}/>
                                </>

                            ))
                    }
                </div>
            </SectionUI>
        </div>
    )
}
export async function getServerSideProps({req, res}) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    // Fetch data from external API
    const [rooms ,roomsHeader ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rooms/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roompage/`),

    ]);
    return {
        props: {
            rooms: rooms?.data,
            roomsHeader : roomsHeader?.data

        },
    };
}

export default index
