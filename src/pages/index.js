import {ImgUI,  Header, SectionTitle, ButtonUI , HotelCard, SectionUI, ServiceCard, LocationInfos ,SwiperSlider} from '@/components/'

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


const Home = () => {

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

    return (
        <div>
            <Header />
            <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 md:py-20 lg:py-[90px] lg:pt-32 xl:pt-[180px]'}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="space-y-3 md:space-y-5 ">
                        <SectionTitle styleSubtitle={'text-start'} title={'Добро пожаловать в The Tower Hotel!'} />
                        <p data-aos='fade-up' data-aos-delay='100' className="text-justify section-text">THE TOWER HOTEL это отель премиум класса, который отвечает на все стандарты обслуживания, персональное обслуживание, имеет комфортабельные номера, самые новые технологии и широкий спектр дополнительных услуг. А так же мы, предоставляем своим гостям беспрецедентный уровень комфорта, высококлассное питание, оперативное решение всех запросов. Отель расположен в центре города Ташкент, близок к основным достопримечательностям. </p>
                        <div className="flex justify-center md:justify-start" data-aos='fade-up' data-aos-delay='120'>
                            <ButtonUI btnNews={true}/>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-end ">
                        <div data-aos='zoom-in' data-aos-delay='50' className="w-[68%] h-[78%] xl:h-[78%] xl:w-[68%] lg:w-full lg:h-1/2  border-[10px] lg:border-x-[0px] lg:border-b-[10px] xl:border-[10px] border-white relative z-10  	">
                            <ImgUI src={'/image/IMG_5397-min.jpg'} objectFit={'object-cover'}/>
                        </div>
                        <div data-aos-anchor-placement='top center'  data-aos='zoom-in' data-aos-delay='150' className="w-[55%] h-[62%] lg:w-full lg:h-1/2 xl:h-[62%] xl:w-[55%]  absolute bottom-0 left-0 z-[9]">
                            <ImgUI  src={'/image/IMG_5397-min.jpg'} objectFit={'object-cover'}/>
                        </div>
                    </div>
                </div>
            </SectionUI>
            <SectionUI bgFigureBottomPostion={'bottom-0 left-0'}  padding={'py-10 md:py-20 lg:pt-[90px] lg:pb-32 xl:pb-[180px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={'Наши услуги'}/>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-6 ">
                    {
                        serviceCardData.map((item , index) => (
                            <ServiceCard indexForAos={index}   key={item.title} title={item.title} href={item.href} decsr={item.decsr} src={item.src}/>
                        ))
                    }
                </div>
            </SectionUI>
            <SectionUI bgGold={true} padding={'py-[20px] md:py-[50px] py-[90px]'}>
                <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
                    <div
                        className={` space-y-4 md:space-y-8`}
                    >
                        <SectionTitle colorContent={true} title={'Избавьтесь от стресса'} />
                        <p   data-aos='fade-up' data-aos-delay='150' className="text-justify text-white section-text">Ресторан отеля порадует гостей уютной атмосферой. Специальное меню ресторана, которое будет соответствовать всем международным требованиям, а также блюда, приготовленные шеф-поваром, не оставят равнодушным даже самого настоящего гурмана.
                            Лаунж-бар, расположенный в вестибюле отеля, является идеальным местом для отдыха в вечернее время, местом для приятной встречи с друзьями или с деловыми партнерами.  В отеле есть 2 зала вместимостью 25-80 человек для проведения конференций и совещаний, а также большой зал для презентаций и приемов.</p>
                    </div>
                    <div
                        data-aos='zoom-in' data-aos-delay='50'
                        className={` w-full aspect-video md:aspect-[16/14] relative`}
                    >
                        <ImgUI src={'/image/IMG_5448-min.jpg'} objectFit={"object-cover"} />
                    </div>
                </div>

            </SectionUI>
            <SectionUI bgGold={true} padding={'py-[20px] md:py-[50px] py-[90px] relative'}>
                <div className='relative z-[5]'>
                    <SectionTitle title={'Ориентиры поблизости'} colorContent={true} />
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
            <SectionUI bgFigureTopPostion={'top-0 -left-1/2'} padding={'py-10 md:pb-[45px] md:pt-20 lg:pt-32 xl:pt-[180px]   '}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={'Типы номеров'} justify={'justify-between'}   btnText={'Все номера'} />
                </div>
                 <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-[30px]">
               {hotelCardData.map(card => (
          <HotelCard img={card.img} key={card.id} id={card.id} cardTitle={card.title} descriptions={card.information} href={card.slug} price={card.price} time={card.time} />
        ))}
        {/*        <Carusel content={hotelCardData} />*/}

                 </div>
            </SectionUI>
            <SectionUI padding={'py-10 md:py-20 lg:py-[90px]'} >
                <div className="space-y-5 md:space-y-10">
                    <SectionTitle title={'Фотогалерея'} />
                    {/*<GalleryZoom />*/}
                    <SwiperSlider gallery={hotelCardData} />
                    <div data-aos='fade-up' data-aos-delay='150' className="flex flex-col items-center w-full">
                        <ButtonUI text={'Посмотреть все фото'} typeClass={'btn-white'} />
                    </div>
                </div>
            </SectionUI>
            <section className="relative py-10 lg:py-[87px] bg-black/60 overflow-hidden">
                <div className="absolute top-0 left-0 z-10 w-full h-full">
                    <ImgUI src={'/image/IMG_7359-min.jpg'} objectFit={'object-cover'}/>
                </div>
                <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-[11]"></div>
                <div className="container relative z-20 flex flex-col items-center">
                    <div className="text-white flex flex-col items-center max-w-[690px]">
                        <SectionTitle title={'Почувствуйте себя как дома!'} colorContent={'text-white'} justify={'justify-center'}/>
                        <p  data-aos='fade-up' data-aos-delay='100' className="my-2 text-sm text-center font-roboto md:text-lg lg:text-xl md:mb-5 ">В Tower hotel Tashkent вы сможете ощутить по-настоящему высокое качество обслуживания. </p>
                        <div  data-aos='fade-up' data-aos-delay='150'>
                            <ButtonUI text={'Подробнее'} typeClass={'py-2.5 px-6 text-white border border-white'}/>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
