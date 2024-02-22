import { FaInstagram, FaFacebookF,FaTelegramPlane  } from "react-icons/fa";
import {ButtonUI} from "@/components";


const MesengerList = () => {
  return (
    <div className='flex gap-4 items-center '>
      <ButtonUI stylePadding={'p-2 md:p-3'} href={'www.instagram.com'} target={'_blank'} icon={<FaInstagram className="md:text-2xl"  />}/>
      <ButtonUI stylePadding={'p-2 md:p-3'} href={'www.instagram.com'} target={'_blank'} icon={<FaFacebookF className="md:text-2xl"  />}/>
      <ButtonUI stylePadding={'p-2 md:p-3'} href={'www.instagram.com'} target={'_blank'} icon={<FaTelegramPlane className="md:text-2xl"  />}/>
    </div>
  )
}

export default MesengerList