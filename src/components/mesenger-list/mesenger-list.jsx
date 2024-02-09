import React from 'react'
import {ButtonUl} from '../index'
import { FaInstagram, FaFacebookF,FaTelegramPlane  } from "react-icons/fa";


const MesengerList = () => {
  return (
    <div className='flex gap-4 '>
      <ButtonUl href={'/'} icon={<FaInstagram />}/>
      <ButtonUl href={'/'} icon={<FaFacebookF />}/>
      <ButtonUl href={'/'} icon={<FaTelegramPlane />}/>
    </div>
  )
}

export default MesengerList