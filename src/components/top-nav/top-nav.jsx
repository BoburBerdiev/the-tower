import React from 'react'
import DropdownUl from "@/components/ui/Dropdown-UI";
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebookF, FaYoutube } from 'react-icons/fa6';




const lang = [
  {
    title:'Русский',
    id:1
  },
  {
    title: "English",
    id: 2
  },
  {
    title: "O'zbek",
    id: 3
  }
]
const TopNav = () => {

  return (
    <div className='bg-brown w-full'>
     <div className='container'>
     <div className='flex justify-between gap-x-4 xl:gap-x-10 items-center text-white '>
        <div className='flex items-center gap-2.5 xl:gap-'>
          <a href="https://instagram.com" target='_blank'><IoLogoInstagram className='text-xl md:text-2xl'/></a>
          <a href="https://facebook.com" target='_blank'><FaFacebookF className=''/></a>
          <a href="https://youtube.com" target='_blank'><FaYoutube className='text-xl'/></a>
        </div>
      <div className='flex justify-end gap-x-4 xl:gap-x-10 items-center font-roboto text-sm text-white '>
        <DropdownUl list={lang} defualtList={lang[0]} />
        <a href="tel:+998 55 512 11 00" className='hidden sm:block'>+998 55 512 11 00</a>
        <a href="#" className='hidden lg:block'>Малая Бешагачская ул., 40-40 / 1, Яккасарайский район, Ташкент, 100070, Узбекистан</a>
      </div>
      </div>
    </div>
    </div>
  )
}
export default TopNav
