import SEO from '@/SEO/SEO'
import {ButtonUI, MiniHeader, NewsCard, SectionUI} from '@/components'
import NewsCardSkeleton from '@/components/news-card-skeleton/news-card-skeleton'
import { useTranslation } from 'react-i18next'
import {newsSEO} from '@/SEO/SEO.config'
import { useSelector } from 'react-redux'
import axios from "axios";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {langSelect} from "@/helper";

const index = () => {
  const {t} = useTranslation()
  const {lang} = useSelector(state => state.langSlice)
  const [page, setPage] = useState(1)
  const [productInfinity, setProductInfinity] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const {
    data: newsCard,
    refetch: newsCardRefetch,
    isLoading:newsIsLoading,
    isSuccess: newsCardSuccess,
  } = useQuery(
      "news",
      () =>
          apiService.getData(
              `/pages/news?&page=${page}&page_size=1`
          ),
      {
        enabled: false,
      }
  );

  useEffect(() => {
    if (newsCardSuccess) {
      if (page === 1) {
        setProductInfinity([...newsCard?.results])

        if (newsCard?.results.length > 0) {
          setHasMore(true)
        }
      } else {
        setProductInfinity([...productInfinity, ...newsCard?.results])
      }
      if (!newsCard?.next) {
        setHasMore(false)
      } else {
        setPage(prop => prop + 1)
        setHasMore(true)
      }
    }
  }, [newsCard])

  useEffect(() => {
    newsCardRefetch()
  }, []);

  const newsBanner = {
    title: t('news.title'),
    img : '/image/IMG_5451-min.jpg'
  }


  return (
    <div>
       <SEO
              ogImage={'/image/logo.png'}
              title={newsSEO[lang].title}
                description={newsSEO[lang].description}
                ogTitle={newsSEO[lang].ogTitle}
                ogDescription={newsSEO[lang].ogDescription}
                twitterHandle={newsSEO[lang].twitterHandle}
            />
      <div>
        <MiniHeader img={newsBanner.img} title={newsBanner.title}/>
      </div>
      <SectionUI padding={'py-10 md:py-16 lg:py-[100px]'}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[30px]">



          {
            newsIsLoading ?
          <>
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
          </>
          :

            <InfiniteScroll
                next={newsCardRefetch}
                hasMore={hasMore}
                loader={<div className={'flex w-full justify-center items-center mt-5 mb-3'}><ButtonUI
                    leftIcon={<AiOutlineLoading3Quarters
                        className={'animate-spin text-darkBlue '}/>}> </ButtonUI></div>}
                className={'w-full'}
                dataLength={productInfinity?.count || []}>
              <div
                  className={``}>
                {

                  productInfinity?.map(news => (
                      <NewsCard
                          img={news?.main_image}
                          date={news?.date}
                          decr={langSelect(lang ,news?.title_ru, news?.title_en , news?.title_uz )}
                          href={`news/${news?.slug}`}/>
                  ))
                }
              </div>

            </InfiniteScroll>
          }




        </div>
      </SectionUI>
    </div>
  )
}



export default index