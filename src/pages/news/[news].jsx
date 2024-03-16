import SEO from '@/SEO/SEO'
import { SectionUI, Slider } from '@/components'
import  {useEffect} from 'react'
import { LuCalendarRange } from 'react-icons/lu'
import { useSelector } from 'react-redux'
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
import {langSelect} from "@/helper";

const  News = () => {
  const router = useRouter()
  const {news}=router.query
const {lang} = useSelector(state => state.langSlice)
  const { data: newsInner  , refetch: refetchNewsInner } = useQuery(["newsInner" , news], () =>
      apiService.getDataByID(  '/pages/news' ,news) , { enabled: false}
  );

  useEffect(() => {
    if(news) {
      refetchNewsInner()
    }
  } ,  [news])

  return (
    <>
   <SEO
        ogImage={'/logo.png'}
                title={langSelect(lang , newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)}
                ogTitle={langSelect(lang , newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)}
                twitterHandle={langSelect(lang , newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)}
            />
    
    <SectionUI  bgFigureTopPostion={'top-0 right-0'} padding={'py-10 md:py-20 lg:pt-[90px] lg:pb-32 xl:pb-[180px]'}>
        <div data-aos='fade-in' className='relative z-[5] md:float-left w-full lg:w-[450px] xl:w-[650px] h-[275px] xl:h-[350px] md:mr-10 mb-5'>
          <Slider SliderContent={newsInner?.images}  PaginationInner={true} />
        {/*  SliderContent={newsImage}*/}
        </div>
        <h3 data-aos='fade-left' className='text-xl 2xl:text-2xl font-inter font-semibold'>
            {
                langSelect(lang , newsInner?.title_ru , newsInner?.title_en , newsInner?.title_uz)
            }
         </h3>
        <div data-aos='fade-left' data-aos-delay='100' className='flex items-center py-3'>
          <LuCalendarRange className="md:text-xl text-lg pb-[3px]" />
          <p className={`font-inter font-medium text-sm md:text-base`}>17 февр. 2023г.</p>
        </div>
        <p data-aos='fade-up' className='text-justify font-openSans'>
            {
                langSelect(lang , newsInner?.description_ru , newsInner?.description_en , newsInner?.description_uz)
            }
        </p>
    </SectionUI>
    </>
  )} 
export default News