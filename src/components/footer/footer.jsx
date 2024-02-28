import { SiInstagram, SiFacebook, SiTelegram } from 'react-icons/si'
import {ImgUI, FooterContent, MesengerList} from '@/components'
import { useTranslation } from 'react-i18next'



const Footer = () => {
  const {t} = useTranslation()
  const FooterContentData = {
    menu: {
      title: t('footer.menu.title'),
      list: [
        {
          name: t('footer.menu.href1'),
          link: "/"
        },
        {
          name: t('footer.menu.href2'),
          link: "/"
        },
        {
          name: t('footer.menu.href3'),
          link: "/"
        },
        {
          name: t('footer.menu.href4'),
          link: "/"
        },
        {
          name: t('footer.menu.href5'),
          link: "/"
        },
      ],
    },
     location: {
      title: t('footer.address.title'),
      paragraph: t('footer.address.map'),
      linkReiews: '/'
    },
    managers : {
      title: t('footer.manager.title'),
    },
    miniFooter : {
      allrights: t('footer.miniFooter.allrights'),
      siteCreated: t('footer.miniFooter.siteCreated')
    }
  }
  return (
    <>
      <footer className='relative bg-white border-t border-[#8F8170]'>
        <div className="container grid grid-cols-2 gap-5 pt-10 pb-7 lg:grid-cols-4 text-iron">
          <div className='flex flex-col justify-between font-openSans text-xl gap-[10px]'>
            <a href='' className='block w-[120px] h-[90px] relative'>
              <ImgUI src={'/image/the-tower.png'} alt={'THE TOWER HOTEL TASHKENT'} objectFit={'object-contain'}/>
            </a>
{/*<<<<<<< HEAD*/}
{/*            <div className='space-y-1 text-base md:text-xl'>*/}
{/*              <a href="tel:+998 55 512 11 00" className='block hover:underline'>+998 55 512 11 00</a>*/}
{/*              <a href="mailto:info@towerhotel.uz" className='block hover:underline'>info@towerhotel.uz</a>*/}
{/*            </div>*/}
{/*          </div>*/}
{/*          <div>*/}
{/*            <FooterContent  title={'Навигация'} list={FooterContentData.menu.list} />*/}
{/*          </div>*/}
{/*          <div className='space-y-3 lg:space-y-8'>*/}
{/*           <FooterContent  title={'Адрес'} list={FooterContentData.location.list} />*/}
{/*          </div>*/}
{/*          <div>*/}
{/*            <FooterContent  title={'Следите за нашими новостями'} />*/}
{/*            <MesengerList/>*/}
{/*=======*/}
            <div className='md:space-y-2 '>
              <a href="tel:+998 55 512 11 00" className='block hover:underline text-base md:text-xl lg:text-2xl'>+998 55 512 11 00</a>
              <a href="mailto:info@towerhotel.uz" className='block hover:underline text-sm md:text-base'>info@towerhotel.uz</a>
            </div>
          </div>
          <div>
            <FooterContent  title={FooterContentData.menu.title} list={FooterContentData.menu.list} />
          </div>
          <div>
            <FooterContent  title={FooterContentData.location.title} paragraph={FooterContentData.location.paragraph} hrefText={FooterContentData.location.linkReiews} />
          </div>
          <div className='space-y-3 lg:space-y-5'>
           <FooterContent  title={FooterContentData.managers.title}   />
           <MesengerList/>
{/*>>>>>>> fa165d8e17a0ada03e1f62f7eb17b6d6a1de5245*/}
          </div>
        </div>
      </footer>
      <div className="mini-footer relative bg-brown py-3 overflow-hidden">
        <div className='absolute top-0 left-0 w-full h-full z-1'>
          <ImgUI src={'/image/footer-bg.png'} objectFit={'object-cover object-bottom'}/>
        </div>
        <div className="container relative z-[2] flex flex-col text-white/60 md:flex-row justify-between items-center text-xs md:text-sm text-white roboto-light gap-[10px]">
          <p className=''>
            {new Date().getFullYear()} {FooterContentData.miniFooter.allrights}
          </p>
          <div className='flex items-center gap-3 '>
            <span>{FooterContentData.miniFooter.siteCreated}</span>
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