import {ButtonUI, Modal, ReviewCard,  SectionTitle, SectionUI} from '@/components'
import InputUl from '@/components/ui/Input-UI'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {indexSEO} from '@/SEO/SEO.config'
import SEO from '@/SEO/SEO'
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import apiService from "@/service/axois";
import {useRouter} from "next/router";
const reviewData = [
  {
    name: 'Svetlana',
    flag: '/image/ru-flag.svg',
    country: 'Россия',
    rate: '3',
    date: '2024-01-29',
    title: 'Один из любимых отелей в Ташкенте!',
    text: 'Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!'
  },
  {
    name: 'Svetlana',
    flag: '/image/ru-flag.svg',
    country: 'Россия',
    rate: '3',
    date: '2024-01-29',
    title: 'Один из любимых отелей в Ташкенте!',
    text: 'Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!'
  },
  {
    name: 'Svetlana',
    flag: '/image/ru-flag.svg',
    country: 'Россия',
    rate: '3',
    date: '2024-01-29',
    title: 'Один из любимых отелей в Ташкенте!',
    text: 'Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!'
  },
  {
    name: 'Svetlana',
    flag: '/image/ru-flag.svg',
    country: 'Россия',
    rate: '3',
    date: '2024-01-29',
    title: 'Один из любимых отелей в Ташкенте!',
    text: 'Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!'
  },
  {
    name: 'Svetlana',
    flag: '/image/ru-flag.svg',
    country: 'Россия',
    rate: '3',
    date: '2024-01-29',
    title: 'Один из любимых отелей в Ташкенте!',
    text: 'Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!'
  },
  {
    name: 'Svetlana',
    flag: '/image/ru-flag.svg',
    country: 'Россия',
    rate: '3',
    date: '2024-01-29',
    title: 'Один из любимых отелей в Ташкенте!',
    text: 'Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!'
  },
]
const Reviews = () => {
  const router = useRouter();
  const {t} = useTranslation()
  const {register,reset,
    handleSubmit
  } = useForm();


  const {
    mutate: userPost,
    data: userPostData,
    isSuccess: userPostSuccess,
  } = useMutation(({url, data}) => apiService.postData(url, data));
  const onSubmit = (data) => {
    const reviewsUser = {
      fullname: data?.fullname,
      description: data?.description,
      phone: data?.phone ,
      title:data?.title,
      country: data?.country
    }

    userPost({url: "/pages/feedback/", data: reviewsUser});
    reset();
  };

  useEffect(() => {
    if (userPostSuccess) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [userPostData]);


  const {lang} = useSelector(state => state.langSlice)
  
  return (
    <div>
      <SEO
              ogImage={'/logo.png'}
              title={indexSEO[lang].title}
              description={indexSEO[lang].description}
              ogTitle={indexSEO[lang].ogTitle}
              ogDescription={indexSEO[lang].ogDescription}
              twitterHandle={indexSEO[lang].twitterHandle}
            />
      <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 md:py-16 lg:pb-[80px] pt-10'}>
        <SectionTitle title={t('reviews.title')} justify={'justify-center'} />
        <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex flex-col gap-5'>
          <InputUl id={'fullname'} name={'fullname'} labelText={t('reviews.surnameEN')}
                   placeholder={t('booking.form.surnameEN')} formname={...register('fullname')} />
          <div className='flex justify-between gap-x-[30px] gap-y-[15px]'>
            <InputUl id={'phone'} name={'phone'} type={'number'} labelText={t('booking.form.number')}
                     placeholder={'+1234567890'} formname={...register('phone')}/>
            <InputUl id={'country'} name={'country'} labelText={t('reviews.country')}
                     placeholder={t('reviews.countryPlaceholder')} formname={...register('country')}/>
          </div>

          <div className={'space-y-10'}>
            <InputUl id={'description'} name={'description'} labelText={t('reviews.notice')}
                     placeholder={t('reviews.noticeTitle')} formname={...register('title')}/>
            <textarea name="description" id="description" rows="10" placeholder={t('reviews.review')} {...register('description')}
                      className='cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5  w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown'></textarea>
          </div>
          <div className="flex flex-col items-center">
            <ButtonUI text={t('btn.booking')} typeClassBtn={'btn-gold'} typeBtn={'submit'}/>

          </div>
        </form>
      </SectionUI>
      <SectionUI padding={'py-10 md:py-16 lg:py-[100px] space-y-10 md:space-y-20'}>
        <div>
          <SectionTitle title={t('reviews.reviewClients')} justify={'justify-center'} />
        </div>
        <div className='pt-10 space-y-10 overflow-y-auto max-h-[300px] border-y border-brown shadow'>
          {
            reviewData.map(review => (
              <ReviewCard key={review?.id} name={review.name} flag={review.flag} country={review.country} date={review.date} title={review.title} text={review.text} />
            ))
          }
        </div>
      </SectionUI>
      {
        userPostSuccess &&   <Modal  isOpenModal={userPostSuccess}  content={t('modal.questionCorrect')}/>
      }
    </div>
  )
}

export default Reviews