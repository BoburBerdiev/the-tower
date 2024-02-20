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
        id: 0
    },
    {
        title: "Стандартный номер 2",
        img: "/image/IMG_5451-min.jpg",
        id: 1
    },
    {
        title: "Стандартный номер 3",
        img: "/image/IMG_5513-min.jpg",
        id: 2
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
const services = [
    {
        img: '',
        text: "Фитнес-центр",
        id: 0
    },
    {
        img: '',
        text: "Мини-бар",
        id: 1
    },
    {
        img: '',
        text: "Крытый бассейн",
        id: 2
    },
    {
        img: '',
        text: "Кондиционер",
        id: 3
    },
    {
        img: '',
        text: "Телевизор",
        id: 4
    },
    {
        img: '',
        text: "Бесплатная парковка",
        id: 5
    },
    {
        img: '',
        text: "Бесплатный Wi-Fi",
        id: 6
    },
    {
        img: '',
        text: "Вид на город",
        id: 7
    },
    {
        img: '',
        text: "Превосходный завтрак",
        id: 8
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
                <div className="pb-5 md:pb-10">
                    <SectionTitle justify={'justify-center'} title={'Номер "Standart Double"'}/>
                </div>
                <RoomInnerSlider images={roomBannerContent} />
                <p className=" font-roboto lg:text-xl font-light pt-5 md:pt-10">Комфортная комната для 1 персоны в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса.В номере имеется:</p>
            </div>
           <SectionUI>
                <h3 className=" font-elegance tracking-[2%] text-xl md:text-2xl lg:text-[30px] pb-5">Удобства и услуги </h3>
                <div className="flex flex-wrap gap-2 md:gap-6">
                    {
                        services?.map(service => (
                            <div key={service.id} className="flex items-center gap-2 md:gap-4 py-2 px-3 md:pl-5 md:py-3.5 md:pr-11  border border-[#B0A79B] cursor-pointer text-[#59657A] font-roboto text-sm md:text-base lg:text-lg">
                                <img src={service.img} alt="Icon" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
                                <span>{service.text}</span>
                            </div>
                        ))
                    }
                </div>
           </SectionUI>
        </div>
    )
}

export default Room
