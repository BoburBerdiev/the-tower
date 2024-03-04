import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {changleLang} from "@/slice/lang";

const DropdownUl = ({ list  ,  defualtList  ,onClick}) => {

    const  [dropdown , setDropdown] = useState(false)

    const openDropdown  = () => {
        setDropdown(!dropdown)
    }
    const setLang = () => {

    }
    return (
        <div className="relative">

            <button onClick={openDropdown} className="py-2 text-white flex items-center gap-2">
      <span>
      {
          defualtList?.title
      }
      </span>
                <FaAngleDown className={`${dropdown && "-rotate-180 " } duration-500`} />

            </button>

            <div className={`grid ${dropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} -mr-10 absolute left-0 rounded-b top-[36px] bg-brown z-[101] border-light transition-all ease duration-500`}>
             <div className=" text-base overflow-hidden">
              <div className="px-3 py-1 flex flex-col gap-2">
              {
                    list?.map(item => (
                        <div onClick={() => {
                            setDropdown(!dropdown)
                            onClick(item)
                        }} key={item.id} className="cursor-pointer text-sm"  >
                            {item?.title}
                        </div>
                    ))
                }
              </div>
            </div>
          </div>
          
        </div>

    )
}

export default DropdownUl