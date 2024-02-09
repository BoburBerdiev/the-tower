import Slider from "../slider/slider"
import './header.css'
import {Booking} from "../index";

const HeaderBannerText =[
  {
    title:'Комфорт в любое время!',
    subTitle: "В THE TOWER HOTEL гостеприимство, ИНДИВИДУАЛЬНОСТЬ И ОРИГИНАЛЬНОСТЬ ЯВЛЯЮТСЯ ОТЛИЧИТЕЛЬНЫМИ ЧЕРТАМИ НАШЕГО СЕРВИСА И НАШИХ СОТРУДНИКОВ",
    img: "/image/IMG_7363-min.jpg"
  },
  {
    title:'Комфорт в любое время! 2',
    subTitle: "В THE TOWER HOTEL гостеприимство, ИНДИВИДУАЛЬНОСТЬ И ОРИГИНАЛЬНОСТЬ ЯВЛЯЮТСЯ ОТЛИЧИТЕЛЬНЫМИ ЧЕРТАМИ НАШЕГО СЕРВИСА И НАШИХ СОТРУДНИКОВ",
    img: "/image/IMG_7363-min.jpg"
  },
  {
    title:'Комфорт в любое время! 3',
    subTitle: "В THE TOWER HOTEL гостеприимство, ИНДИВИДУАЛЬНОСТЬ И ОРИГИНАЛЬНОСТЬ ЯВЛЯЮТСЯ ОТЛИЧИТЕЛЬНЫМИ ЧЕРТАМИ НАШЕГО СЕРВИСА И НАШИХ СОТРУДНИКОВ",
    img: "/image/IMG_7363-min.jpg"
  },
]

const Header = () => {
  return (
    <>

    
    <header className='relative h-screen'> 
      <Slider  SliderContent={HeaderBannerText}  PaginationMod={false} />
        <Booking/>
    </header>
    </>
  )
}

export default Header