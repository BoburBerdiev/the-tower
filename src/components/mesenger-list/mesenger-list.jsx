import { FaInstagram, FaFacebookF,FaTelegramPlane  } from "react-icons/fa";
import {ButtonUI} from "@/components";


const MesengerList = () => {
  return (
    <div className='flex gap-4 '>
      <ButtonUI href={'/'} icon={<FaInstagram />}/>
      <ButtonUI href={'/'} icon={<FaFacebookF />}/>
      <ButtonUI href={'/'} icon={<FaTelegramPlane />}/>
    </div>
  )
}

export default MesengerList