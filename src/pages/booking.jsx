import {LittleTitleUI, SectionTitle, SectionUI, InputUI,InputDateUI, ButtonUI, SelectOptionUI} from '@/components/'
import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleTypeBooking} from "@/slice/booking";
const optionArr = [
  {
    value:"Стандартный номер",
    id:"1"
  },
  {
    value:"Стандартный номер 2",
    id:"4"
  },
  {
    value:"Стандартный номер 3",
    id:"20"
  },
  {
    value:"Стандартный номер 24",
    id:"22"
  },
  {
    value:"Стандартный номер 12",
    id:"21"
  },
]
const Booking = () => {
  const {timeBooking ,typeBooking} = useSelector(state => state.bookingSlice)
  const dispatch = useDispatch()
  const {register,
    handleSubmit ,setValue,
    formState: {  },
  } = useForm();
const [selectOptionName , setSelectOptionName] = useState(null)

  const onSubmit = (data) => {
    console.log(data);
  };

useEffect(() => {
  if(selectOptionName?.name === 'typeNomer') {
    dispatch(changleTypeBooking(selectOptionName?.value ))
  }
}, [selectOptionName])


  return (
    <div className="wrapper">
      <SectionUI padding={'py-10  md:pb-[90px]'}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5 md:space-y-10">
            <div>
              <SectionTitle title={'Бронирование'} justify={'justify-center'}  subTitle={'Это бронирование не подтверждено. Мы рассмотрим ваш запрос и подтвердим бронирование.'}/>
            </div>
            <div className=" flex flex-col items-center">
              <LittleTitleUI content={'Введите данные'}/>
              <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 md:gap-[30px] max-w-[800px]">
                {/*<InputUI startDateUpdate={timeBooking[0]} setSelectOptionName={'startDay'} labelText={'Дата заезда/выезда'} type={'date'} placeholder={''} id={'chechIn'} />*/}
                <InputDateUI  startDateUpdate={timeBooking[0]} setSelectOptionName={'startDay'} labelText={'Дата заезда'} type={'date'}  id={'chechIn'} />
                <InputDateUI  startDateUpdate={timeBooking[1]} setSelectOptionName={'endDay'} labelText={'Дата выезда'} type={'date'} />
                {/*<InputUI startDateUpdate={timeBooking[1]} setSelectOptionName={'endDay'} type={'date'} />*/}
                {/*<InputUI  type={'select'}  labelOption={'tip-nomer'} labelText={'Тип номера'} selectList={optionArr} setSelectOptionName={setSelectOptionName} />*/}
                <SelectOptionUI SelectOptionName={typeBooking} labelOption={'typeNomer'} labelText={'Тип номера'} selectList={optionArr} setSelectOptionName={setSelectOptionName} />
                <InputUI type={'number'} placeholder={'Номера'}  labelText={'Номера'} setSelectOptionName={setSelectOptionName}  />
                <InputUI type={'number'} labelText={'Взрослые'}  placeholder={'Взрослые'}  formname={...register('adults')} />
                <InputUI type={'number'} labelText={'Дети'}  placeholder={'Дети'}  formname={...register('children')} />
                <InputUI type={'text'}
                         name={'surName'} labelText={'Фамилия (по-английски)'} placeholder={'Фамилия (по-английски)'}    formname={...register('surName')} />
                <InputUI type={'text'}  name={'firstName'} labelText={'Имя (по-английски)'} placeholder={'Имя (по-английски)'}    formname={...register('firstName')} />
                <InputUI type={'number'} labelText={'Номер телефона'} placeholder={'+1234567890'}    formname={...register('phoneBooking')} />
                <InputUI name={'email'} type={'email'} labelText={'Электронная почта'} placeholder={'example@gmail.com'}    formname={...register('email')} />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <LittleTitleUI content={'Контактная информация для запросов'} />
              <div className="max-w-[800px] ">
                <textarea formname={...register('complete-information')} name={'complete-information'} id="textarea" placeholder="Введите запрос" cols={100} className="cursor-pointer border w-full border-black rounded-none outline-none p-3 lg:p-5 h-[100px] lg:h-[200px] font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown"></textarea>
                <h4 className="font-roboto font-light tracking-[0.4px] md:text-lg lg:text-xl mt-4 lg:mt-[30px] pb-3">Сбор и использование личной информации (Обязательно)</h4>
                <div className="border w-full p-4 md:p-5 md:pb-8 ">
                  <div className="h-[25vh] overflow-y-scroll font-roboto font-light tracking-[0.36px] md:text-lg text-black">
                    <p className="pb-10">Наш отел сети (<a href="#">http://www.thetowerhotel.com/hotel-finder.html</a>) собирает и использует ваши персональные данные при бронировании номера в нашем отеле следующим образом.</p>
                    <p>1. Собираемые персональные данные Полное имя (на английском языке), контактная информация (номер мобильного, домашнего, рабочего телефона), адрес электронной почты и информация о кредитной </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <LittleTitleUI content={'Правила отмены'}/>
              <div className="max-w-[800px] font-roboto font-light tracking-[0.32px] mb-6 md:mb-10">
                <p className="">- Отмена или изменение бронирования разрешены до 12:00 за 3 дня до заезда. Если вы отмените или внесете изменения после этого времени или не приедете в день заезда (незаезд), с вас будет взиматься штраф, эквивалентный стоимости первой ночи вашего пребывания.</p>
                <p>- Для отмены бронирования обращайтесь в отдел бронирования номеров.</p>
                <p className="mt-4 md:mt-6">The Tower Hotel Tashkent, тел.номер: <a href="tel:+998 55 512 11 00">+998 55 512 11 00</a></p>
              </div>
              <ButtonUI text={'Забронировать'} typeClass={'btn-gold'} type={'submit'} />
            </div>
          </form>
      </SectionUI>
    </div>
  )
}

export default Booking