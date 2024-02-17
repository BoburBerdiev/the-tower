import { ReviewCard, SectionTextUI, SectionTitle, SectionUI } from '@/components'
import InputUl from '@/components/ui/Input-UI'
import React from 'react'

const Reviews = ({selectList}) => {
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
    }
  ]
  return (
    <div>
      <SectionUI bgFigureTopPostion={'top-0 left-0'} padding={'py-10 md:py-16 lg:pb-[80px] pt-10'}>
        <SectionTitle title={'Отзыв'} justify={'justify-center'} />
        <form action="" className='mt-10 flex flex-col gap-[15px]'>
          <InputUl id={'name'} name={'name'} labelText={'ФИО (на английском языке)'} placeholder={'Фамилия (по-английски)'} />
          <div className='flex justify-between gap-x-[30px] gap-y-[15px]'>
            <InputUl id={'number'} name={'number'} type={'number'} labelText={'Номер телефона'} placeholder={'+1234567890'}  />
            <InputUl id={'country'} name={'country'} labelText={'Страна'} placeholder={'Выберите страну'} />
          </div>
          <textarea name="review" id="review" rows="10" placeholder='Напишите отзыв' className='cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5 mt-10 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown'></textarea>
        </form>
      </SectionUI>
      <SectionUI padding={'py-10 md:py-16 lg:py-[100px]'}>
        <SectionTitle title={'Отзывы клиентов'} justify={'justify-center'} />
        <div className='pt-10 space-y-10'>
          {
            reviewData.map(review => (
              <ReviewCard name={review.name} flag={review.flag} country={review.country} rateCount={review.rate} date={review.date} title={review.title} text={review.text} />
            ))
          }
        </div>
      </SectionUI>
    </div>
  )
}

export default Reviews