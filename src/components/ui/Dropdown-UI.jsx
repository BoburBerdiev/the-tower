import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6";

const DropdownUl = ({ list  ,  defualtList , bgStyle}) => {


    const  [dropdown , setDropdown] = useState(false)

    const openDropdown  = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className="relative">

            <button onClick={openDropdown} className="py-2 text-white flex items-center gap-2">
      <span>
      {
          defualtList?.title
      }
      </span>
                <FaAngleDown className={`${dropdown && "rotate-180 " } duration-100`} />

            </button>
            <div className={`${dropdown ? 'block' : 'hidden'} z-[101]  absolute top-19 -left-2  p-3 bg-brown text-white`}>
                {
                    list?.map(item => (
                        <div key={item.id} >
                            {item?.title}
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default DropdownUl