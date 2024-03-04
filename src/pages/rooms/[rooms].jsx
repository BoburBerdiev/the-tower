import { useTranslation } from "react-i18next"
import { RxInfoCircled } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
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
import SEO from "@/SEO/SEO";
import {roomsInnerSeo} from '@/SEO/SEO.config'
import { useSelector } from "react-redux";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
import {useEffect} from "react";

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
const roomIinfo = {
        id: 1,
        type: 'Standart Twin',
        information: [
            '27 m2',
            '2 чел',
            '1 ванная',
            'балкон'
        ],   
    }
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
const common = [
    {
        id: 1,
        text: 'Односпальная кровать'
    },
    {
        id: 2,
        text: 'Гардероб'
    },
    {
        id: 3,
        text: 'Утюг'
    },
    {
        id: 4,
        text: 'Рабочий стол'
    },
    {
        id: 5,
        text: 'Мини бар'
    },
    {
        id: 6,
        text: 'Ванные принадлежности'
    },
    {
        id: 7,
        text: 'Кофеварка, чайник'
    },
    {
        id: 8,
        text: 'Завтрак Шведский стол'
    },
    {
        id: 9,
        text: 'Смарт ТВ'
    },
    {
        id: 10,
        text: 'Бесплатный Wi-Fi'
    },
    {
        id: 11,
        text: 'Сейф в номере'
    },
    {
        id: 12,
        text: 'Площадь номера 28m2'
    },
]

const Room = () => {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const router = useRouter()
    const {rooms}=router.query


    const { data: room  , refetch: refetchRoom, isLoading , isSuccess } = useQuery(["room" , rooms], () =>
        apiService.getDataByID(  '/rooms' ,rooms) , { enabled: false}
    );

    useEffect(() => {
        if(rooms) {
            refetchRoom()
        }
    } ,  [rooms])

    console.log(router.query)

    return (
        <div className="wrapper pt-10 md:pt-20 relative">
            {/*<div className="w-full h-[90vh]">*/}
            {/*    <Slider SliderContent={roomBannerContent} innerBtn={true} />*/}
            {/*</div>*/}
            <SEO
                ogImage={'/image/logo.png'}
                title={roomsInnerSeo[lang].title}
                description={roomsInnerSeo[lang].description}
                ogTitle={roomsInnerSeo[lang].ogTitle}
                ogDescription={roomsInnerSeo[lang].ogDescription}
                twitterHandle={roomsInnerSeo[lang].twitterHandle}
            />
            <div className={'w-full container'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={'Номер "Standart Double"'} justify={'justify-center'}/>
                </div>
                <RoomInnerSlider images={roomBannerContent} />
                <p data-aos='fade-left' className=" font-roboto lg:text-xl font-light pt-5 md:pt-10">Комфортная комната для 1 персоны в неоклассическом стиле с элементами минимализма имеет все удобства номера премиум класса и отвечает на все стандарты высокого сервиса.В номере имеется:</p>
            </div>
           <SectionUI padding={'py-[50px]'}>
                <h3 data-aos='fade-up' className=" font-elegance tracking-[2%] text-xl md:text-2xl lg:text-[30px] pb-5">Удобства и услуги </h3>
                <div className="flex flex-wrap gap-2 md:gap-6">
                    {
                        services?.map((service, index) => (
                            <div data-aos='fade-in' data-aos-delay={`${index}00`} key={service.id} className="flex items-center gap-2 md:gap-4 py-2 px-3 md:pl-5 md:py-3.5 md:pr-11  border border-[#B0A79B] cursor-pointer text-[#59657A] font-roboto text-sm md:text-base lg:text-lg">
                                <img src={service.img} alt="Icon" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
                                <span>{service.text}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="py-10">
                    <h4 data-aos='fade-up' className="flex items-center gap-x-[10px] text-lg">
                        <RxInfoCircled className="text-[#808080] text-xl" />
                        <span className="font-roboto font-medium">Общие</span>
                    </h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-5 lg:gap-x-[30px] gap-y-[10px] max-md:text-sm lg:text-lg font-roboto mt-[10px]">
                        {common.map((item, index) => (
                            <li data-aos='fade-left' data-aos-delay={`${index}9`} key={item.id} className="flex items-center gap-2 md:gap-x-[10px]">
                                <IoMdCheckmark className="md:text-xl text-[#808080]" />
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
           </SectionUI>
           <div className="bg-white w-full duration-300 bottom-0 left-0 righ-0 sticky z-[10] shadow-xl py-5">
                <div className="container flex items-center justify-between gap-x-5">
                    <div className="text-2xl font-elegance shrink-0">
                        {t('index.room')} "{roomIinfo.type}"
                    </div>
                    <div
                        className='flex shrink-0 leading-normal divide-x-2 divide-iron gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>
                        {roomIinfo &&  roomIinfo.information?.map((item, index) => (
                            <p key={index} className="px-3">{item}</p>
                        ))}
                    </div>
                    <div>
                        <ButtonUI paddingFull={true} text={t('btn.booking')}  />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Room
