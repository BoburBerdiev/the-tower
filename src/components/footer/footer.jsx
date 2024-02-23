import { SiInstagram, SiFacebook, SiTelegram } from 'react-icons/si'
import {ImgUI, FooterContent, MesengerList} from '@/components'

const FooterContentData = {
  menu: {
    title: 'Меню',
    list: [
      {
        name: 'Главная',
        link: "/"
      },
      {
        name: 'Об отеле',
        link: "/"
      },
      {
        name: 'Номера',
        link: "/"
      },
      {
        name: 'Фотогалерея',
        link: "/"
      },
      {
        name: 'Контакты',
        link: "/"
      },
    ],
  },
  info: {
    title: 'Помощь',
    list: [
      {
        name: 'Для клиентов',
        link: "/"
      },
      {
        name: 'Контактная информация',
        link: "/"
      },
      {
        name: 'Часто задаваемые вопросы',
        link: "/"
      },
      {
        name: 'Карта сайта',
        link: "/"
      },
    ],
  },
   location: {
    title: 'Адрес',
    list: [
      {
        name: 'Малая Бешагачская ул., 40-40 / 1, Яккасарайский район, Ташкент, 100070, Узбекистан',
        link: "/"
      },
      {
        name: 'Посмотреть на карте',
        link: "/"
      },
    ],
  },
}

const Footer = () => {
  return (
    <>
      <footer className='relative bg-white border-t border-[#8F8170]'>
        <div className="container grid grid-cols-2 gap-5 py-10 lg:grid-cols-4 text-iron">
          <div className='flex flex-col justify-between roboto-regular text-xl gap-[10px]'>
            <a href='' className='block w-[120px] h-[90px] relative'>
              <ImgUI src={'/image/Tower hotel___eng 1.png'} alt={'THE TOWER HOTEL TASHKENT'} objectFit={'object-contain'}/>
            </a>
            <div className='space-y-2  md:space-y-2.5 text-base md:text-xl'>
              <a href="tel:+998 55 512 11 00" className='block hover:underline'>+998 55 512 11 00</a>
              <a href="mailto:info@towerhotel.uz" className='block hover:underline'>info@towerhotel.uz</a>

            </div>
          </div>
          <div>
            <FooterContent  title={'Меню'} list={FooterContentData.menu.list} />
          </div>
          <div>
            <FooterContent  title={'Помощь'} list={FooterContentData.info.list} />
          </div>
          <div className='space-y-3 lg:space-y-8'>
           <FooterContent  title={'Адрес'} list={FooterContentData.location.list} />
           <MesengerList/>
          </div>
        </div>
      </footer>
      <div className="mini-footer relative bg-brown py-[19px] overflow-hidden">
        <div className='absolute top-0 left-0 w-full h-full z-1'>
          <ImgUI src={'/image/footer-bg.png'} objectFit={'object-cover object-bottom'}/>
        </div>
        <div className="container relative z-[2] flex flex-col text-white/60 md:flex-row justify-between items-center text-xs md:text-sm text-white roboto-light gap-[10px]">
          <p className=''>
            {new Date().getFullYear()} The Tower Hotel. Все права защищены.
          </p>
          <div className='flex items-center gap-3 '>
            <span>Сайт созда:н</span>
            <a href="https://abduganiev.uz" target='_blank' className='flex group items-center gap-2 relative w-[80px] md:w-[100px] h-[50px] overflow-hidden'>
              <div className='w-8 h-8 object-cover relative duration-200 group-hover:scale-50 group-hover:opacity-0 group-hover:-translate-x-10'>
                <ImgUI src={'/image/abduganiev-A.png'} objectFitContain={'object-contain'}/>
              </div>
              <div className='shrink-0  duration-300  opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 absolute left-0 object-contain w-full h-full'>
                <ImgUI src={'/image/abduganiev.png'} objectFitContain={'object-contain'}/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer