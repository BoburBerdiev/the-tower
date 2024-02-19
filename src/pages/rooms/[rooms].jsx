import { useTranslation } from "react-i18next"
import {
    ButtonUI,
    GalleryZoom,
    ImgUI,
    RoomInnerSlider,
    SectionTextUI,
    SectionTitle,
    SectionUI,
    Slider
} from "../../components"

const roomBannerContent = [
    {
        title: "Стандартный номер",
        img: "/image/IMG_5513-min.jpg",
    },
    {
        title: "Стандартный номер 2",
        img: "/image/IMG_5513-min.jpg",
    },
    {
        title: "Стандартный номер 3",
        img: "/image/IMG_5513-min.jpg",
    },
]
const additionalAmenities = [
    {
        title: '42-FULL HD TV, телефон, чайник, тапочки, рожок для обуви',
        id: 1
    },
    {
        title: 'Предметы гигиены, халат, фен',
        id: 2
    },
    {
        title: 'Постельные принадлежности для лучшего крепкого сна',
        id: 3
    },
    {
        title: 'Бесплатный доступ в открытый плавательный бассейн и сауну',
        id: 4
    },
    {
        title: 'Бесплатный доступ в фитнес-центр (с профессиональным тренером)',
        id: 5
    },
    {
        title: 'Бесплатный проводной/беспроводной доступ в Интернет во всех номерах',
        id: 6
    },
]
const roomsInner =[
    {
        img: "/image/IMG_7363-min.jpg"
    },
    {
        img: "/image/IMG_7361-min.jpg"
    },
    {
        img: "/image/IMG_7362-min.jpg"
    },
]


const Room = () => {
    const {t} = useTranslation()

    return (
        <div className="wrapper py-10 md:py-20 ">
            {/*<div className="w-full h-[90vh]">*/}
            {/*    <Slider SliderContent={roomBannerContent} innerBtn={true} />*/}
            {/*</div>*/}

            <div className={'w-full container'}>

                <SectionTitle justify={'justify-center'} title={'Номер "Standart Double"'}/>

                <RoomInnerSlider images={roomBannerContent} />
            </div>
            <SectionUI bgFigureTopPostion={'-top-32 left-0'} padding={'py-10 md:py-20 lg:py-32 xl:py-[180px]'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 ">
                    <div className="flex flex-col justify-center space-y-5 md:space-y-10">
                        <div className="space-y-5">
                            <SectionTitle title={'Описание'}/>
                            <SectionTextUI style={'section-text'} content={'Интерьер стандартого номера практичен и современен. Спальня и гостиная разделены и оформлены в классическом и элегантном стиле. Рабочее место оборудовано самым современным оборудованием. Это первоклассный люкс, предоставляющий оазис мира и спокойствия.'}/>
                        </div>
                        <div className="tracking-[0.48px] text-xl lg:text-2xl font-roboto flex flex-col gap-y-3 lg:gap-y-5 ">
                            <div className="flex items-center gap-x-3 lg:gap-x-5">
                                <p className="text-iron ">Тип кровати:</p>
                                <p className="font-light">Double/Twin</p>
                            </div>
                            <div className="flex items-center gap-x-3 lg:gap-x-5">
                                <p className="text-iron ">Вместимость:</p>
                                <p className="font-light">2 чел</p>
                            </div>
                            <div className="flex items-center gap-x-3 lg:gap-x-5">
                                <p className="text-iron ">Площадь номера:</p>
                                <p className="font-light">54 m<sup className="text-sm">2</sup></p>
                            </div>
                            <div className="flex items-center gap-x-3 lg:gap-x-5">
                                <p className="text-iron ">Заезд / выезд::</p>
                                <p className="font-light">14:00/12:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full aspect-square md:h-full ">
                        <Slider SliderContent={roomsInner} PaginationInner={true} />
                    </div>
                </div>
            </SectionUI>
            <SectionUI bgGold={true} centerFigure={true}>

                <div className="">
                    <SectionTitle colorContent={true} title={'Дополнительные удобства'} />
                    <ul className="text-white md:text-lg xl:text-xl list-disc list-inside font-roboto font-light tracking-[0.4px] gap-1.5 flex flex-col mt-5">
                        {
                            additionalAmenities.map(item => (
                                <li key={item.id}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </SectionUI>
            <SectionUI padding={'py-10 md:py-20 lg:py-[90px]'} >
                <div className="space-y-5 md:space-y-10">
                    <SectionTitle title={'Фотогалерея'} />
                    <GalleryZoom />
                    <div className="w-full flex flex-col items-center">
                        <ButtonUI text={t('btn.booking')} typeClass={'btn-gold'} />
                    </div>
                </div>
            </SectionUI>
        </div>
    )
}

export default Room
