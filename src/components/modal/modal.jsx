import React, { useEffect, useState } from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";


const Modal = ({isOpenModal, setIsOpenModal, content}) => {

    setTimeout(() => {
      setIsOpenModal(false)

    }, 30000)

  useEffect(() => {
    if (isOpenModal === true ) {
      document.body.classList.add('overflow-hidden')
    }else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpenModal])

  


  return (
    <>
      <section className={`w-screen h-screen overflow-hidden flex flex-col justify-center ${isOpenModal ? "" : "hidden"} fixed z-[9999] top-0 left-0 right-0 bg-black/50 backdrop-blur-lg`}>
        <div className='container flex flex-col items-center'>
          <div className='p-10 w-full bg-white rounded shadow-xl sm:w-[60vw] lg:w-[50vw] xl:w-[40vw] '>
            {
              content ? 
              content :
              <>
              <div className='flex flex-col items-center gap-10 '>
                <div>
                  <FaRegCircleCheck className='w-24 h-24 text-brown'/>
                </div>
                <div>
                  <h3 className='text-3xl font-medium md:text-4xl lg:text-5xl text-center'>Cоровингиз Кабул Килинди</h3>
                </div>
              </div>
              </>
            }
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Modal