import { SiInstagram, SiFacebook, SiTelegram } from 'react-icons/si'
import {ImgUI, FooterContent, MesengerList} from '@/components'
import { useTranslation } from 'react-i18next'
import {formatPhoneNumber} from "@/helper";
import Link from "next/link";



const Footer = ({contact}) => {
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
      paragraph: contact?.address,
      linkReiews: '/reviews'
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
        <div className="container grid grid-cols-2 gap-3 md:gap-5 pt-10 pb-7 lg:grid-cols-4 text-iron">
          <div className='flex flex-col justify-between font-openSans text-xl gap-[10px]'>
            <Link href='/' className='block w-[100px] h-[90px] max-md:mx-auto relative'>
              <ImgUI src={'/image/the-tower.png'} alt={'THE TOWER HOTEL TASHKENT'} objectFitContain={true}/>
            </Link>
            <div className='md:space-y-2 text-center md:text-start'>
              <a href={`tel:${contact?.phone}`} className='block hover:underline text-base md:text-xl lg:text-2xl'>{
                formatPhoneNumber(contact?.phone)
              }</a>
              <a href={`mailto:${contact?.email}`} className='block hover:underline text-sm md:text-base'>{contact?.email}</a>
            </div>
          </div>
          <div>
            <FooterContent  title={FooterContentData.menu.title} list={FooterContentData.menu.list} textJustify={'text-center'} />
          </div>
          <div>
            <FooterContent  title={FooterContentData.location.title} paragraph={FooterContentData.location.paragraph} hrefText={FooterContentData.location.linkReiews} textJustify={'text-center'} />
          </div>
          <div className='space-y-3 lg:space-y-5'>
           <FooterContent textJustify={'text-center'}  title={FooterContentData.managers.title}   />
           <MesengerList instagram={contact?.instagram} facebook={contact?.facebook} youtube={contact?.youtube}/>
          </div>
        </div>
      </footer>
      <div className="mini-footer relative bg-brown py-3 overflow-hidden">
        <div className='absolute top-0 left-0 w-full h-full z-1'>
          <ImgUI src={'/image/footer-bg.png'} objectFitContain={false} objectFit={'object-cover object-bottom'} alt={'footer'} priority={true}/>
        </div>
        <div className="container relative z-[2] flex flex-col text-white/60 md:flex-row justify-between items-center text-xs md:text-sm text-white roboto-light gap-[10px]">
          <p className=''>
            {new Date().getFullYear()} {FooterContentData.miniFooter.allrights}
          </p>
          <div className='flex items-center gap-3 '>
            <span>{FooterContentData.miniFooter.siteCreated}</span>
            <a href="https://abduganiev.uz" target='_blank' className='flex group items-center gap-2 relative w-[80px] md:w-[100px] h-[50px] overflow-hidden'>
              <div className='max-md:hidden w-8 h-8 object-cover relative duration-200 group-hover:scale-50 group-hover:opacity-0 group-hover:-translate-x-10'>
                <ImgUI src={'/image/abduganiev-A.png'} alt={"Abdug'aniev"} objectFitContain={'object-contain'}/>
              </div>
              <div className='shrink-0  duration-300  md:opacity-0 md:translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 md:absolute left-0 object-contain w-full h-full'>
                <ImgUI src={'/image/abduganiev.png'} alt={"Abdug'aniev"} objectFitContain={'object-contain'}/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer