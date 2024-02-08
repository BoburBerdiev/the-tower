import React from 'react'
import DropdownUl from "@/components/ui/Dropdown-UI";



const currency = [
  {
    title:'USD',
    id:1
  },
  {
    title: "RUB",
    id: 2
  },
  {
    title: "UZS",
    id: 3
  }
]
const lang = [
  {
    title:'Русский',
    id:1
  },
  {
    title: "eng",
    id: 2
  }
]
const TopNav = () => {

  return (
    <div className='bg-brown w-full'>
     <div className=' container'>
      <div className='flex justify-end gap-x-4 xl:gap-x-10 items-center text-white '>
        <DropdownUl list={lang} defualtList={lang[0]} />
        <DropdownUl bgStyle={"bg-red-500 text-black"} list={currency} defualtList={currency[0]} />
        <a href="tel:+998 55 512 11 00" className='hidden sm:block text-sm xl:text-base '>+998 55 512 11 00</a>
        <a href="#" className='hidden lg:block text-sm xl:text-base'>Малая Бешагачская ул., 40-40 / 1, Яккасарайский район, Ташкент, 100070, Узбекистан</a>
      </div>
    </div>
    </div>
  )
}
export default TopNav
