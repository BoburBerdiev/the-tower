import {ImgUI,  Header, SectionTitle, ButtonUI  , SectionUI, ServiceCard, LocationInfos ,SwiperSlider, SwiperGallery} from '@/components/'
import LightGalleryComponent from '@/components/swiper-gallery-zoom/swiper-gallery'
import { useTranslation } from 'react-i18next'

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
        id:50,
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
const serviceCardData = [
    {
        title: 'Ресторан',
        decsr: 'Лаунж-бар, расположенный в вестибюле отеля, является идеальным местом для отдыха в вечернее время, местом для приятной встречи с друзьями или с деловыми партнерами. ',
        href: 'link',
        src: '/image/IMG_5448-min.jpg'
    },
    {
        title: 'Лаунж-бар',
        decsr: 'Лаунж-бар, расположенный в вестибюле отеля, является идеальным местом для отдыха в вечернее время, местом для приятной встречи с друзьями или с деловыми партнерами. ',
        href: 'link',
        src: '/image/IMG_5513-min.jpg'
    },
    {
        title: 'Конференц-зал',
        decsr: 'Лаунж-бар, расположенный в вестибюле отеля, является идеальным местом для отдыха в вечернее время, местом для приятной встречи с друзьями или с деловыми партнерами. ',
        href: 'link',
        src: '/image/IMG_7362-min.jpg'
    },
    {
        title: 'Тренажерный зал',
        decsr: 'Лаунж-бар, расположенный в вестибюле отеля, является идеальным местом для отдыха в вечернее время, местом для приятной встречи с друзьями или с деловыми партнерами. ',
        href: 'link',
        src: '/image/IMG_7363-min.jpg'
    },
]
const locationInfos = [
    {
        title: "Рестораны и кафе",
        icon:"/image/restaurants&cafes.svg",
        locations: [
            {
                place: 'Кафе-бар: T4K Performance Bar',
                distance: '200 м'
            },
            {
                place: 'Кафе-бар: Бухара',
                distance: '250 м'
            },
            {
                place: 'Ресторан: Азия',
                distance: '300 м'
            }
        ]
    },
    {
        title: "Развлечения",
        icon:"/image/entertainment.svg",
        locations: [
            {
                place: 'Пкио им.Фурката',
                distance: '2,1 км'
            },
            {
                place: 'Сеульский национальный парк',
                distance: '2,6 км'
            },
            {
                place: 'Парк Навруз',
                distance: '3,1 км'
            },
            {
                place: 'Пкио им.Фурката',
                distance: '2,1 км'
            },
            {
                place: 'Сеульский национальный парк',
                distance: '2,6 км'
            },
            {
                place: 'Парк Навруз',
                distance: '3,1 км'
            }
        ]
    },
    {
        title: "Общественный транспорт",
        icon: "/image/public-transport.svg",
        locations: [
            {
                place: 'Поезд: Tashkent-Passenger',
                distance: '600 м'
            },
            {
                place: 'Поезд: Tashkent',
                distance: '850 м'
            },
            {
                place: 'Метро: Oybek',
                distance: '1,5 км'
            },
            {
                place: 'Метро: Pushkin',
                distance: '4,6 км'
            }
        ]
    },
    {
        title: "Ближайшие аэропорты",
        icon: "/image/airports.svg",
        locations: [
            {
                place: 'Международный аэропорт Ташкент им Ислама Каримова',
                distance: '200 м'
            }
        ]
    }
]
const gallery = [
    {
        scr:'/image/IMG_5346-min.jpg',
        thumbnailUrl:'/image/IMG_5346-min.jpg',
        id:1
    }
    ,{
        scr:'/image/IMG_5397-min.jpg',
        thumbnailUrl:'/image/IMG_5397-min.jpg',
        id:2
    }
    ,{
        scr:'/image/IMG_5448-min.jpg',
        thumbnailUrl:'/image/IMG_5448-min.jpg',
        id:3
    },
    {
        scr:'/image/IMG_5451-min.jpg',
        thumbnailUrl:'/image/IMG_5451-min.jpg',
        id:4
    },
]
const newsCard = [
    {
        id:24,
        img: '/image/IMG_5497-min.jpg',
        date: "17 февр. 2023г.",
        decr: 'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.',
        href: "/"
    },
    {
        id:23,
        img: '/image/IMG_5497-min.jpg',
        date: "17 февр. 2023г.",
        decr: 'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.',
        href: "/"
    },
    {
        id:21,
        img: '/image/IMG_5497-min.jpg',
        date: "17 февр. 2023г.",
        decr: 'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.',
        href: "/"
    },
    {
        id:20,
        img: '/image/IMG_5497-min.jpg',
        date: "17 февр. 2023г.",
        decr: 'Подборка мероприятий и выставок, которые пройдут в районе отеля в ближайшее время. Это может быть полезной информацией для гостей, планирующих свое время.',
        href: "/"
    },
]

const Home = () => {
    const {t} = useTranslation()
    
    return (
        <div>
            <Header />
            <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 md:py-20 lg:py-[90px] lg:pt-32 xl:pt-[180px]'}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="space-y-3 md:space-y-5 ">
                        <SectionTitle styleSubtitle={'text-start'} title={'Добро пожаловать в The Tower Hotel!'} />
                        <p data-aos='fade-up' data-aos-delay='100' className="text-justify section-text">THE TOWER HOTEL это отель премиум класса, который отвечает на все стандарты обслуживания, персональное обслуживание, имеет комфортабельные номера, самые новые технологии и широкий спектр дополнительных услуг. А так же мы, предоставляем своим гостям беспрецедентный уровень комфорта, высококлассное питание, оперативное решение всех запросов. Отель расположен в центре города Ташкент, близок к основным достопримечательностям. </p>
                        <div className="flex justify-center md:justify-start" data-aos='fade-up' data-aos-delay='120'>
                            <ButtonUI btnNews={true} text={t('btn.readMore')} btnBorder={true}/>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-end aspect-square lg:aspect-auto">
                        <div data-aos='zoom-in' data-aos-delay='50' className="w-[68%]  aspect-square xl:h-[78%] xl:w-[68%] lg:w-full lg:h-1/2  border-[10px] lg:border-x-[0px] lg:border-b-[10px] xl:border-[10px] border-white relative z-10  	">
                            <ImgUI src={'/image/IMG_5397-min.jpg'} objectFit={'object-cover'}/>
                        </div>
                        <div data-aos-anchor-placement='top center'  data-aos='zoom-in' data-aos-delay='150' className="w-[55%]  aspect-square lg:w-full lg:h-1/2 xl:h-[62%] xl:w-[55%]  absolute bottom-0 left-0 z-[9]">
                            <ImgUI  src={'/image/IMG_5397-min.jpg'} objectFit={'object-cover'}/>
                        </div>
                    </div>
                </div>
            </SectionUI>
            <SectionUI padding={'pt-10 md:pt-20 lg:pt-[90px] pb-5 md:pb-11'} >
                <div className="space-y-5 md:space-y-10">
                    <div className='flex  '>
                    <SectionTitle title={t('index.section2.title')} justify={'justify-between'} href={'/news'}   btnText={t('btn.allNums')} />
                    </div>
                    <SwiperSlider hotelCardData={hotelCardData} />
                </div>
            </SectionUI>
            <SectionUI bgFigureBottomPostion={'-top-20 -left-[60%]'}  padding={'py-10 md:py-20 lg:pt-[54px] lg:pb-[100px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={t('index.section3.title')}/>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-6 ">
                    {
                        serviceCardData.map((item , index) => (
                            <ServiceCard indexForAos={index}   key={item.title} title={item.title} href={item.href} decsr={item.decsr} src={item.src}/>
                        ))
                    }
                </div>
            </SectionUI>
            <SectionUI bgGold={true} padding={'py-[20px] md:py-[50px] py-[90px] relative'}>
                <div className='relative z-[5]'>
                    <SectionTitle title={t('index.section4.title')} colorContent={true} />
                    <div className='grid grid-cols-2 xl:grid-cols-3 gap-y-10 xl:gap-y-5 gap-x-10 md:gap-x-20 2xl:gap-x-[150px] py-10'>
                        {
                            locationInfos.map(item => (
                                <LocationInfos title={item.title} icon={item.icon} locations={item.locations} />
                            ))
                        }
                    </div>
                </div>
                <div className='absolute -bottom-24 left-0 right-0 z-[1] h-full w-full '>
                    <ImgUI src={'/image/bg.svg'} alt={'locations'} objectFit={'object-cover'} />
                </div>
            </SectionUI>
            <SectionUI padding={'py-10 md:py-20 lg:py-[90px]'} >
                <div className="space-y-5 md:space-y-10">
                    <SectionTitle title={t('index.section5.title')} justify={'justify-between'}  btnText={t('btn.viewAllPhoto')}/>
                    {/*<GalleryZoom />*/}
                    <SwiperSlider gallery={gallery} />
                </div>
            </SectionUI>
            <section className="relative py-10 lg:py-[87px] bg-black/60 overflow-hidden">
                <div className="absolute top-0 left-0 z-10 w-full h-full">
                    <ImgUI src={'/image/IMG_7359-min.jpg'} objectFit={'object-cover'}/>
                </div>
                <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-[11]"></div>
                <div className="container relative z-20 flex flex-col items-center">
                    <div className="text-white flex flex-col items-center max-w-[690px]">
                        <SectionTitle title={'Планируйте и экономьте'} colorContent={'text-white'} justify={'justify-center'}/>
                        <p  data-aos='fade-up' data-aos-delay='100' className="my-2 text-sm text-center font-roboto md:text-lg lg:text-xl md:mb-5 ">Забронируйте пребывание с предоплатой и сэкономьте до 25%</p>
                        <div  data-aos='fade-up' data-aos-delay='150'>
                            <ButtonUI text={t('btn.more')} stylePadding={'py-2.5 px-6'} btnBorder={true} btnWhiteBorder={true}/>
                        </div>
                    </div>
                </div>
            </section>
            <SectionUI padding={'py-8 md:py-16 lg:py-[100px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={t('index.section6.title')}/>
                </div>
                <SwiperSlider newsCard={newsCard} />
            </SectionUI>
        </div>
    )
}

export default Home
