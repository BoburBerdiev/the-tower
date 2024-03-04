import React, {useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi";
import {HotelCard, ImgUI} from "@/components/index";

function SearchPanel(props) {
    const [searchPanel, setSearchPanel] = useState(false)
    const [isElementsHave , setIsElementsHave] = useState(true)
    const openSeachPanel = () => {
        setSearchPanel(true)
        setTimeout(() => {
            document.body.classList.add('overflow-hidden')
        }, 200)
    }
    const closeSeachPanel = () => {
        setSearchPanel(false)
        document.body.classList.remove('overflow-hidden')
    }

    const describe = [
        'dasds',
        'dasdsad',
        'dasdsad',
        'dasdsad',
    ]

    return (
        <>
            <button onClick={openSeachPanel} className={'flex justify-center items-center'}>
                <CiSearch className="text-xl lg:text-2xl"/>
            </button>
            <div className={`fixed w-screen h-screen overflow-y-scroll flex flex-col items-center right-0 backdrop-blur-2xl bg-white/70 p-5 md:p-10 left-0 z-[102] duration-200 ${searchPanel ? "top-0" : "-top-[200%]"}`}>
                <button onClick={closeSeachPanel} className="self-end	">
                    <TfiClose />
                </button>
                <div className="w-full md:max-w-[700px] mb-10 mt-5">
                    <input type="text" className=" w-full rounded-md p-2 md:p-3 lg:px-5 outline-none text-sm md:text-base font-roboto border text-gray-600  shadow-lg" />
                </div>
                     {
                        isElementsHave ?
                        <div className="container grid grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-8">
                            {
                                <HotelCard img={'/image/IMG_5448-min.jpg'} cardTitle={'Title'} time={'09-10'} price={'120 000'} descriptions={describe}  />
                            }
                        </div>
                        
                        :
                        <div className='container flex flex-col items-center gap-5'>
                            <h2 className='text-4xl text-center font-elegance '>Rooms Not Found</h2>
                            <div className='w-full md:w-[500px] aspect-video lg:w-[600px] relative'>
                                <ImgUI src={'/image/no-room-found.png'} objectFitContain alt={'not found'}/>
                            </div>
                        </div>
                        
                    }
            </div>
        </>
    );
}

export default SearchPanel;