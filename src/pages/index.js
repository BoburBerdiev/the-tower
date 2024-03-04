import SEO from '@/SEO/SEO'
import {indexSEO} from '@/SEO/SEO.config'
import {ImgUI,  Header, SectionTitle, ButtonUI  , SectionUI, ServiceCard, LocationInfos ,SwiperSlider, GallerySlider} from '@/components/'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import axios from "axios";
import about from "@/pages/about";
import {langSelect} from "@/helper";

const gallery = [
    {
        src:'/image/IMG_5346-min.jpg',
        id:1
    }
    ,{
        src:'/image/IMG_5397-min.jpg',
        id:2
    }
    ,{
        src:'/image/IMG_5448-min.jpg',
        id:3
    },
    {
        src:'/image/IMG_5451-min.jpg',
        id:4
    },
]

const Home = ({home , about , rooms , services , news , landmarks}) => {
    // landmarks
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)

    // console.log(services)
    return (
        <div>
            <SEO
              ogImage={'/image/Tower hotel___eng 1.png'}
              title={indexSEO[lang].title}
              description={indexSEO[lang].description}
              ogTitle={indexSEO[lang].ogTitle}
              ogDescription={indexSEO[lang].ogDescription}
              twitterHandle={indexSEO[lang].twitterHandle}
            />
            <Header home={home} />
            <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 md:py-20 lg:py-[90px] lg:pt-32 xl:pt-[180px]'}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="space-y-3 md:space-y-5 ">
                        <SectionTitle styleSubtitle={'text-start'} title_ru={about?.title_ru} title_en={about?.title_en} title_uz={about?.title_uz} />
                        <p data-aos='fade-up' data-aos-delay='100' className="text-justify section-text"> {langSelect(lang ,about?.sub_title_ru, about?.sub_title_en , about?.sub_title_uz )} </p>
                        <div className="flex justify-center md:justify-start" data-aos='fade-up' data-aos-delay='120'>
                            <ButtonUI btnNews={true} text={t('btn.readMore')} btnBorder={true}/>
                        </div>
                    </div>
                    <div className="relative flex flex-col md:items-end aspect-square lg:aspect-auto">
                        <div data-aos='zoom-in' data-aos-delay='50' className="w-[68%]  aspect-square xl:h-[78%] xl:w-[68%] lg:w-full lg:h-1/2  border-[10px] lg:border-x-[0px] lg:border-b-[10px] xl:border-[10px] border-white relative z-10  	">
                            <ImgUI src={about?.image_1} objectFit={'object-cover'} alt={'banner'}/>
                        </div>
                        <div data-aos-anchor-placement='top center'  data-aos='zoom-in' data-aos-delay='150' className="w-[55%]  aspect-square lg:w-full lg:h-1/2 xl:h-[62%] xl:w-[55%]  absolute bottom-5 md:bottom-0 right-0 md:left-0 max-md:border-3 border-white z-20 md:z-[9]">
                            <ImgUI  src={about?.image_2} objectFit={'object-cover'} alt={'banner'}/>
                        </div>
                    </div>
                </div>
            </SectionUI>
            <SectionUI padding={'pt-10 md:pt-20 lg:pt-[90px] pb-5 md:pb-11'} >
                <div className="space-y-5 md:space-y-10">
                    <div className='flex'>
                    <SectionTitle title={t('index.section2.title')} href={'/rooms'}   btnText={t('btn.allNums')} />
                    </div>
                    <SwiperSlider hotelCardData={rooms?.results} />
                </div>
            </SectionUI>
            <SectionUI bgFigureBottomPostion={'-top-20 -left-[60%]'}  padding={'py-10 md:py-20 lg:pt-[54px] lg:pb-[100px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={t('index.section3.title')}/>
                </div>
                <SwiperSlider services={services} xlSlidesPerView={4} />
            </SectionUI>
            <SectionUI bgGold={true} padding={'py-[20px] md:py-[50px] py-[90px] relative'}>
                <div className='relative z-[5]'>
                    <SectionTitle title={t('index.section4.title')} colorContent={true} />
                    <div className='grid grid-cols-2 xl:grid-cols-3 gap-y-10 xl:gap-y-5 gap-x-10 md:gap-x-20 2xl:gap-x-[150px] py-10'>
                        {
                            landmarks?.map(item => (
                                <LocationInfos key={item?.id} title={langSelect(lang , item?.title_ru, item?.title_en , item?.title_uz )} icon={item?.image} locations={item?.landmarks} />
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
                    <SectionTitle title={t('index.section5.title')}  btnText={t('btn.viewAllPhoto')} href={'/gallery'}/>
                    <GallerySlider gallery={gallery} />
                </div>
            </SectionUI>
            <section className="relative py-10 lg:py-[87px] bg-black/60 overflow-hidden">
                <div className="absolute top-0 left-0 z-10 w-full h-full">
                    <ImgUI src={'/image/IMG_7359-min.jpg'} objectFit={'object-cover'} alt={'banner'}/>
                </div>
                <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-[11]"></div>
                <div className="container relative z-20 flex flex-col items-center">
                    <div className="text-white flex flex-col items-center max-w-[690px]">
                        <SectionTitle justify={'justify-center'} title={t('index.section6.title')} colorContent={'text-white'}/>
                        <p  data-aos='fade-up' data-aos-delay='100' className="my-2 text-sm text-center font-roboto md:text-lg lg:text-xl md:mb-5 ">{t('index.section6.subtitle')}</p>
                        <div  data-aos='fade-up' data-aos-delay='150'>
                            <ButtonUI text={t('btn.more')} stylePadding={'py-2.5 px-6'} btnBorder={true} btnWhiteBorder={true}/>
                        </div>
                    </div>
                </div>
            </section>
            <SectionUI padding={'py-8 md:py-16 lg:py-[100px]'}>
                <div className="pb-5 md:pb-10">
                    <SectionTitle title={t('index.section7.title')} btnText={t('btn.allNews')} href={'/news'}  />
                </div>
                <SwiperSlider newsCard={news?.results} />
            </SectionUI>
        </div>
    )
}

export default Home


export async function getServerSideProps({req, res}) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    // Fetch data from external API
    const [home, about , rooms ,services , news ,landmarks ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/index/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/about/index/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rooms/?page=1&page_size=10`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services/?page=1&page_size=10`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/news/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/landmarkcategories/`),
    ]);
    return {
        props: {
            home: home?.data,
            about: about?.data,
            rooms: rooms?.data,
            services: services?.data?.results,
            news: news?.data,
            landmarks: landmarks?.data
        },
    };
}
