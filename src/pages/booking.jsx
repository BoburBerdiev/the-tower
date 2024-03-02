import {LittleTitleUI, SectionTitle, SectionUI, InputUI,InputDateUI, ButtonUI, SelectOptionUI, Modal} from '@/components/'
import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleTypeBooking} from "@/slice/booking";
import SEO from '@/SEO/SEO';
import {booking} from "@/SEO/SEO.config"
import { t } from 'i18next';
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

const {lang} = useSelector(state => state.langSlice)


  return (
    <div className="wrapper">
       <SEO
                ogImage={'/logo.png'}
                title={booking[lang].title}
                description={booking[lang].description}
                ogTitle={booking[lang].ogTitle}
                ogDescription={booking[lang].ogDescription}
                twitterHandle={booking[lang].twitterHandle}
            />
      <SectionUI padding={'py-10 md:py-20  md:pb-[90px]'}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5 md:space-y-10">
            <div>
              <SectionTitle title={t('booking.headerTitle')}  subTitle={t('booking.headerSubtitle')} justify={'justify-center'}/>
            </div>
            <div className=" flex flex-col items-center">
              <LittleTitleUI content={t('booking.form.title')}/>
              <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 md:gap-[30px] max-w-[800px]">
                <InputDateUI  startDateUpdate={timeBooking[0]} setSelectOptionName={'startDay'} labelText={t('booking.form.arrival')} type={'date'}  id={'chechIn'} />
                <InputDateUI  startDateUpdate={timeBooking[1]} setSelectOptionName={'endDay'} labelText={t('booking.form.departure')} type={'date'} />
                <SelectOptionUI SelectOptionName={typeBooking} labelOption={'typeNomer'} labelText={t('index.headerBooking.typeOfNumber')} selectList={optionArr} setSelectOptionName={setSelectOptionName} />
                <InputUI type={'number'} placeholder={t('index.headerBooking.room')}  labelText={t('index.headerBooking.room')} setSelectOptionName={setSelectOptionName}  />
                <InputUI type={'number'} labelText={t('booking.form.adults')}  placeholder={t('booking.form.adults')}  formname={...register('adults')} />
                <InputUI type={'number'} labelText={t('booking.form.children')}  placeholder={t('booking.form.children')}  formname={...register('children')} />
                <InputUI type={'text'} name={'surName'} labelText={t('booking.form.surnameEN')} placeholder={t('booking.form.surnameEN')}    formname={...register('surName')} />
                <InputUI type={'text'}  name={'firstName'} labelText={t('booking.form.nameEN')} placeholder={t('booking.form.nameEN')}    formname={...register('firstName')} />
                <InputUI type={'number'} labelText={t('booking.form.number')} placeholder={'+1234567890'}    formname={...register('phoneBooking')} />
                <InputUI name={'email'} type={'email'} labelText={t('booking.form.email')} placeholder={'example@gmail.com'}    formname={...register('email')} />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <LittleTitleUI content={t('booking.request.title')} />
              <div className="max-w-[800px] ">
                <textarea formname={...register('complete-information')} name={'complete-information'} id="textarea" placeholder={t("booking.request.textarea")} cols={100} className="cursor-pointer border w-full border-black rounded-none outline-none p-3 lg:p-5 h-[100px] lg:h-[200px] font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown"></textarea>
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
              <LittleTitleUI content={t('booking.cancelRule.title')}/>
              <div className="max-w-[800px] font-roboto font-light tracking-[0.32px] mb-6 md:mb-10">
                <p className="">{t("booking.cancelRule.text")}</p>
                <p>{t("booking.cancelRule.text2")}</p>
                <p className="mt-4 md:mt-6">The Tower Hotel Tashkent, {t("booking.cancelRule.phone")}: <a href="tel:+998 55 512 11 00">+998 55 512 11 00</a></p>
              </div>
            </div>

        {/*     typeClass={typeClassBtn} type={typeBtn} onClick={openModal}*/}
        <ButtonUI  text={t('btn.booking')}  typeClassBtn={'btn-gold'} typeBtn={'submit'} />
          </form>

      </SectionUI>
              {/*<Modal textBtn={t('btn.booking')} typeClassBtn={'btn-gold'} typeBtn={'submit'}/>*/}
    </div>
  )
}

export default Booking