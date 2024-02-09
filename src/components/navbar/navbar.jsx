import {  CiMenuFries  } from "react-icons/ci";
import { useCallback, useState } from "react";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {ButtonUI , ImgUI} from "@/components";




const Navbar = () => {
  const { t } = useTranslation();

  const navLinks = [
    {
      name: 'navbar.home',
      link: '/',
    },
    {
      name: 'navbar.about',
      link: '/about'
    },
    {
      name: 'navbar.rooms',
      link: '/rooms'
    },
    {
      name: 'navbar.gallery',
      link: '/gallery'
    },
    {
      name: 'navbar.contact',
      link: '/contact'
    },
  ]

  const [navOpen, setNavOpen] = useState(false)

  const openNav = useCallback(() => {
    setNavOpen(!navOpen)
  }, [navOpen])




  return (  
    <>

    <nav className='bg-[#FFFFFFE5] py-3 w-full z-[100] sticky left-0  top-0 shadow-md'>
      <div  className=" container  flex justify-between overflow-x-hidden">
        <Link href="/" className={'relative w-[70px] h-[50px] md:w-[98px]  md:h-[73px]'}>
          <ImgUI src={'/image/Tower hotel___eng 1.png'} alt={'Tower'}  objectFit={'object-contain'}/>
        </Link>
        <div className='flex items-center '>
          <ul className={`${navOpen ? ' right-0': '-right-full'} top-[114px] md:top-[130px] pt-10 lg:pt-0 flex items-center gap-4 md:gap-[60px] fixed lg:static text-lg text-black font-roboto w-full h-screen bg-[#FFFFFFE5] lg:bg-transparent lg:w-auto lg:h-auto flex-col lg:flex-row duration-200 z-10 `}>
            {
              navLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link}   className='duration-200 hover:text-brown roboto-light'>{t(item.name)}</Link>
                  </li>
                ))
            }
          </ul>
          <div  className={`lg:hidden p-2 border  rounded-md  duration-200 text-lg ${navOpen ? 'nav-active' : 'nav-btn'}`} onClick={openNav} >
            <CiMenuFries/>
          </div>

        </div>
      </div>
    </nav>
   
    </>
  )
}

export default Navbar