import SEO from '@/SEO/SEO';
import {ImgBoxFlex, ImgUI, MiniHeader, SectionTitle, SectionUI, Slider} from '@/components';
import { aboutUsSEO } from '@/SEO/SEO.config';
import { useSelector } from 'react-redux';
import axios from "axios";
import {useEffect} from "react";

const About = ({about ,services}) => {

    const {lang} = useSelector(state => state.langSlice)


    useEffect(() => {
        console.log(about?.images)
    } , [])
    const newsBanner = {
        title: 'О нашем отеле',
        img : '/image/IMG_5451-min.jpg'
    }
  return (
      <div className="wrapper">
        <SEO
                ogImage={'/logo.png'}
                title={aboutUsSEO[lang].title}
                description={aboutUsSEO[lang].description}
                ogTitle={aboutUsSEO[lang].ogTitle}
                ogDescription={aboutUsSEO[lang].ogDescription}
                twitterHandle={aboutUsSEO[lang].twitterHandle}
            />
          <div>
              <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
          </div>
          <SectionUI bgFigureTopPostion={'top-0 left-0'} bgFigureBottomPostion={'bottom-0 left-0'}
                     padding={"py-10 md:py-20 "}>
              <div className="relative space-y-5 md:space-y-10 z-5">
                  <SectionTitle
                      lang={lang}
                      title_ru={about?.title_ru}
                      title_uz={about?.title_uz}
                      title_en={about?.title_en}
                      subTitle_ru={about?.sub_title_ru}
                      subTitle_uz={about?.sub_title_uz}
                      subTitle_en={about?.sub_title_en}
                      subTitle={
                          "Удобное расположение в центре города Ташкента, недалеко от основных транспортных развязок, выставочных и бизнес-центров позволяет быстро добраться до места назначения. В Tower hotel Tashkent вы сможете ощутить по-настоящему высокое качество обслуживания."
                      }
                  />
                  <div className="w-full aspect-video">
                      <Slider SliderContent={about?.images} PaginationMod={true}/>
                  </div>
              </div>
          </SectionUI>
          <SectionUI bgGold={true}>
              <div className="space-y-5 md:space-y-10">
                  <SectionTitle
                      colorContent={"text-white"}
                      title_ru={about?.additional_info?.title_ru}
                      title_en={about?.additional_info?.title_en}
                      title_uz={about?.additional_info?.title_uz}
                      subTitle_ru={about?.additional_info?.sub_title_ru}
                      subTitle_en={about?.additional_info?.sub_title_en}
                      subTitle_uz={about?.additional_info?.sub_title_uz}
                  />

                  <div className="grid grid-cols-3 gap-[20px] md:gap-[30px]">
                      {
                          about?.additional_info?.images?.map(item => (
                              <div data-aos='zoom-in' key={item?.id} data-aos-delay='100' className="w-full relative aspect-square">
                                  <ImgUI src={item?.image} alt="about"/>
                              </div>
                          ))
                      }
                  </div>
              </div>
          </SectionUI>
          <SectionUI  bgFigureTopPostion={'top-0 -right-2/3  '}
                     padding={'pb-[20px] md:pb-[50px] lg:pb-[90px] pt-20 md:pt-[100px] lg:pt-[180px]'}>
          {
              services?.map((service , ind) => (

              <ImgBoxFlex key={service?.id} imgOrder={ind % 2}  title_uz={service?.title_uz} title_ru={service?.title_ru} title_en={service?.title_en} subTitle_ru={service?.description_ru} subTitle_en={service?.description_uz} subTitle_uz={service?.description_uz} images={service?.images} />
              ))
          }
          </SectionUI>
      </div>
  );
};

export default About;


export async function getServerSideProps({req, res}) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    // Fetch data from external API
    const [about, services ] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/pages/about/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services/`),

    ]);
    return {
        props: {
            about: about?.data,
            services: services?.data?.results,

        },
    };
}
