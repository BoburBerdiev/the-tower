import {CiMenuFries, CiSearch} from "react-icons/ci";
import { useCallback, useState } from "react";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {ButtonUI, ImgUI, SearchPanel} from "@/components";




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
    {
      name: 'navbar.news',
      link: '/news'
    },
  ]

  const [navOpen, setNavOpen] = useState(false)

  const openNav = useCallback(() => {
    setNavOpen(!navOpen)
  }, [navOpen])




  return (  
    <>

    <nav className='bg-[#FFFFFF] py-3 w-full z-[100] sticky left-0  top-0 shadow-md'>
      <div  className=" container  flex justify-between overflow-x-hidden font-roboto">
        <div className="flex items-center gap-3 md:gap-7">
          <Link href="/" className={'relative block w-12 md:w-16 h-9 md:h-12'}>
            <ImgUI src={'/image/Tower hotel___eng 1.png'} alt={'Tower'}/>
          </Link>
          <Link href="/" className={'relative block w-20 h-5 md:w-24 md:'}>
            <ImgUI src={'/image/Hotel-pro.png'} alt={'Tower'} objectFitContain={true}/>
          </Link>
        </div>
        <div className='flex items-center '>
          <ul className={`${navOpen ? ' right-0' : '-right-full'} top-[95px] md:top-[130px] pt-10 lg:pt-0 flex items-center gap-4 md:gap-[60px] fixed lg:static text-lg text-black w-full h-screen bg-[#FFFFFFE5] lg:bg-transparent lg:w-auto lg:h-auto flex-col lg:flex-row duration-200 z-10 `}>
            {
              navLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link} className='duration-200 hover:text-brown font-elegance font-medium'>{t(item.name)}</Link>
                  </li>
              ))
            }
            <li >
              <SearchPanel/>
            </li>
          </ul>
          <div
              className={`lg:hidden p-2 border  rounded-md  duration-200 text-lg ${navOpen ? 'nav-active' : 'nav-btn'}`}
              onClick={openNav}>
            <CiMenuFries/>
          </div>

        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar