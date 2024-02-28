import {CiMenuFries, CiSearch} from "react-icons/ci";
import { useCallback, useEffect, useState } from "react";
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
  const [isNavScroll , setIsNavScroll] = useState(false)
  
  // useEffect(() => {
  //   openNav()
  // }, [navOpen])
  
  const openNav = () => {
    setNavOpen(!navOpen)
    if (navOpen === false) {
      document.body.classList.add('overflow-hidden')
    }else {
      document.body.classList.remove('overflow-hidden')
    }
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 36) {
      setIsNavScroll(true)
    }else {
      setIsNavScroll(false)
    }
  })

  return (  
    <>

    <nav className='bg-[#FFFFFF] py-3 w-full z-[100] sticky left-0  top-0 shadow-md'>
      <div  className=" container  flex justify-between overflow-x-hidden font-roboto">
        <div className="flex items-center gap-3 md:gap-7">
          <Link href="/" className={'relative block w-12 md:w-16 h-9 md:h-12'}>
            <ImgUI src={'/image/the-tower.png'} alt={'Tower'}/>
          </Link>
          <Link href="/" className={'relative block w-20 h-5 md:w-24 md:'}>
            <ImgUI src={'/image/hotel-pro.svg'} alt={'Tower'} objectFitContain={true}/>
          </Link>
        </div>
        <div className='flex items-center '>
          <ul className={`${navOpen ? ' right-0' : '-right-[150%]'} ${isNavScroll ?  'top-[60px] md:top-[72px]' : " top-[95px] md:top-[130px]"} pt-10 lg:pt-0 flex items-center gap-4 md:gap-[30px] xl:gap-[60px] fixed lg:static text-lg text-black w-full h-screen bg-[#FFFFFFE5] lg:bg-transparent lg:w-auto lg:h-auto flex-col lg:flex-row duration-200 z-10 `}>
            {
              navLinks.map((item) => (
                  <li key={item.name} className="relative before:w-0 before:duration-300 before:h-0.5 before:bg-brown before:absolute hover:before:w-1/2 hover:text-brown duration-300 before:-bottom-2 before:rounded-e-[1px] before:left-1/2 after:w-0 after:duration-300 after:h-0.5 after:bg-brown after:absolute hover:after:w-1/2 after:-bottom-2 after:rounded-s-[1px]  after:right-1/2 font-elegance font-medium" onClick={openNav}>
                    <Link href={item.link} className=''>{t(item.name)}</Link>
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