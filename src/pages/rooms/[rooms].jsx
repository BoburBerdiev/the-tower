import { useTranslation } from "react-i18next"
import { RxInfoCircled } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import {
    ButtonUI, GallerySlider,
    ImgUI,
    RoomInnerSlider,
    SectionTitle,
    SectionUI,
} from "../../components"
import SEO from "@/SEO/SEO";
import {indexSEO} from '@/SEO/SEO.config'
import { useSelector } from "react-redux";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {langSelect} from "@/helper";


const Room = () => {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const router = useRouter()
    const {rooms}=router.query

    const services = [
        {
            img: '/image/service1.svg',
            text: t('roomInner.services.service1'),
            id: 0
        },
        {
            img: '/image/service2.svg',
            text: t('roomInner.services.service2'),
            id: 1
        },
        {
            img: '/image/service3.svg',
            text: t('roomInner.services.service3'),
            id: 2
        },
        {
            img: '/image/service4.svg',
            text: t('roomInner.services.service4'),
            id: 3
        },
        {
            img: '/image/service5.svg',
            text: t('roomInner.services.service5'),
            id: 4
        },
        {
            img: '/image/service6.svg',
            text: t('roomInner.services.service6'),
            id: 5
        },
        {
            img: '/image/service7.svg',
            text: t('roomInner.services.service7'),
            id: 6
        },
        {
            img: '/image/service8.svg',
            text: t('roomInner.services.service8'),
            id: 7
        },
        {
            img: '/image/service9.svg',
            text: t('roomInner.services.service9'),
            id: 8
        },
    ]


    const { data: room  , refetch: refetchRoom , isLoading: isLoadingRoom } = useQuery(["room" , rooms], () =>
        apiService.getDataByID(  '/rooms' ,rooms) , { enabled: false}
    );

    console.log(isLoadingRoom)

    useEffect(() => {
        if(rooms) {
            refetchRoom()
        }
    } ,  [rooms])


    return (
        <div className="wrapper pt-10 md:pt-20 relative">

             <SEO
                ogImage={'/logo.png'}
                title={langSelect(lang , room?.title_ru , room?.title_en , room?.title_uz)}
                description={indexSEO[lang].description}
                ogTitle={langSelect(lang , room?.title_ru , room?.title_en , room?.title_uz)}
                ogDescription={indexSEO[lang].ogDescription}
                twitterHandle={indexSEO[lang].twitterHandle}
            />
            <div className={'w-full container'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={langSelect(lang , room?.title_ru , room?.title_en , room?.title_uz)} justify={'justify-center'}/>
                </div>
                <RoomInnerSlider isLoadingRoom={!isLoadingRoom} images={room?.images} />
                <p data-aos='fade-left' className=" font-roboto lg:text-xl font-light pt-5 md:pt-10">
                    {
                        langSelect(lang , room?.description_ru , room?.description_en , room?.description_uz)
                    }
                </p>
            </div>
           <SectionUI padding={'py-[50px]'}>
                <h3 data-aos='fade-up' className=" font-elegance tracking-[2%] text-xl md:text-2xl lg:text-[30px] pb-5">{t('roomInner.servicesTitle')} </h3>
                <div className="flex flex-wrap gap-2 md:gap-6">
                    {
                        services?.map((service, index) => (
                            <div data-aos='fade-in' data-aos-delay={`${index}00`} key={service.id} className="flex items-center gap-2 md:gap-4 py-2 px-3 md:pl-5 md:py-3.5 md:pr-11  border border-[#B0A79B] cursor-pointer text-iron font-roboto text-sm md:text-base lg:text-lg">
                                <div className="w-4 h-4 md:w-6 md:h-6 relative">
                                    <ImgUI src={service.img} alt={'Icon'} objectFitContain={true} card={true}/>
                                </div>
                                <span>{service.text}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="py-10">
                    <h4 data-aos='fade-up' className="flex items-center gap-x-[10px] text-lg">
                        <RxInfoCircled className="text-customGrey text-xl" />
                        <span className="font-roboto font-medium">{t('roomInner.allComforts')}</span>
                    </h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-5 lg:gap-x-[30px] gap-y-[10px] max-md:text-sm lg:text-lg font-roboto mt-[10px]">
                        {room?.room_characteristics?.map((item, index) => (
                            <li data-aos='fade-left' data-aos-delay={`${index}9`} key={item.id} className="flex items-center gap-2 md:gap-x-[10px]">
                                <IoMdCheckmark className="md:text-xl text-customGrey" />
                                {langSelect(lang , item?.title_ru , item?.title_en , item?.title_uz)}
                            </li>
                        ))}
                    </ul>
                </div>
           </SectionUI>
            <SectionUI padding={'py-10 '} >
                <div className="space-y-5 md:space-y-10">
                    <SectionTitle title={t('index.section5.title')} />
                    <GallerySlider gallery={room?.room_gallery} />
                </div>
            </SectionUI>
           <div className="bg-white w-full duration-300 bottom-0 left-0 righ-0 sticky z-[10] shadow-sm py-5 border-t border-brown">
                <div className="container flex flex-wrap items-center  justify-center md:justify-between gap-y-5 gap-x-5">
                    <div className="text-2xl font-elegance shrink-0">
                        {t('index.room')} {langSelect(lang , room?.title_ru , room?.title_en , room?.title_uz)}
                    </div>
                    <div
                        className='flex shrink-0 leading-normal divide-x-2 divide-iron gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>
                            <p className="px-3">{room?.room_size} {t('roomInner.areaSymbol')}</p>
                            <p className="px-3">{room?.capacity} {t('roomInner.humenSymbol')}</p>
                            <p className="px-3">{room?.num_balconies} {t('roomInner.filterSymbol')}</p>
                            <p className="px-3">{room?.num_bathrooms} {t('roomInner.balconySymbol')}</p>
                    </div>

                    <div>
                        <ButtonUI paddingFull={true} text={t('btn.booking')} href={'/booking'} />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Room
