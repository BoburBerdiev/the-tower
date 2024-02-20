import {ButtonUI, DropdownBooking, NumberGuests, TypeRoom} from "@/components";
import { useState} from "react";
import DatePicker from 'react-datepicker'
import moment from "moment";
import 'moment/locale/uz'
import { useTranslation } from 'react-i18next'

moment.locale('uz')

const typeRoomArr=[
    "Standart double",
    "Standart Twin",
    "Standart double",
    "Standart Twin",
    "Deluxe",
]


const Booking = () => {

     const {t} = useTranslation()

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [typeRoom, setTypeRoom] = useState("Выбрать")

    const [guests, setGuests] = useState({
        room:1,
        older:2,
        children:0
    })

    const handleDateChange = (date) => {
        setStartDate(date[0])
        setEndDate(date[1])

    };

    return (
        <div
            className={'container  absolute bottom-12 md:bottom-[125px] left-1/2 -translate-x-1/2   z-10  '}>
    <div className={'bg-white py-2 md:py-4 lg:py-6 px-5 sm:px-[35px] md:px-[50px]  xl:px-[70px] flex lg:flex-row flex-col items-center justify-center gap-3 md:gap-5 xl:gap-12'}>

            <DropdownBooking
                title={'Заезд'}
                subTitle={startDate ? moment(startDate).format('ll') : 'Входной день'}
                titleSecond={'Выезд'}
                subTitleSecond={endDate ? moment(endDate).format('ll') : 'День отъезда'}>
                <DatePicker
                    selected={null}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    monthsShown={2}
                    minDate={moment().add(0, 'days').toDate()}
                />
            </DropdownBooking>
            <div className={'bg-brown w-full lg:w-[2px] h-0.5 lg:h-6'}/>

            <DropdownBooking
                title={'Число гостей'}
                subTitle={`${guests.room} номер ${guests.older} взрослых, ${guests.children} детей`}
            >
                <NumberGuests setGuests={setGuests} guests={guests}/>
            </DropdownBooking>
            <div className={'bg-brown w-full lg:w-[2px] h-0.5 lg:h-6 '}/>
            <DropdownBooking
                title={'Тип номера'}
                subTitle={typeRoom}
            >
                <TypeRoom type={typeRoomArr} setTypeRoom={setTypeRoom}/>
            </DropdownBooking>
            <div >
                <ButtonUI btnBorder={true} text={t('btn.booking')}/>
            </div>
    </div>
        </div>
    )
        ;
};

export default Booking;
