import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const DropdownUl = ({ list  ,  defualtList }) => {
    // const {changleLang} = useSelector(state => state.changleLang)
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

            <div className={`grid ${dropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}  -ml-5 absolute left-2 rounded-b top-[36px] bg-brown z-[101] border-light transition-all ease duration-500`}>
             <div className=" text-base overflow-hidden">
              <div className="px-4 py-1 flex flex-col gap-2">
              {
                    list?.map(item => (
                        <div key={item.id} className="cursor-pointer text-sm" onClick={setLang} >
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