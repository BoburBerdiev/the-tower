import React, { useEffect, useState } from 'react'
import { ButtonUI } from '..'

const Modal = ({textBtn, typeClassBtn, typeBtn, content}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
    setTimeout(() => {
      setIsOpenModal(prev => !prev)

    }, 3000)
  }
  useEffect(() => {
    if (isOpenModal === true ) {
      document.body.classList.add('overflow-hidden')
    }else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpenModal])

  


  return (
    <>
      <ButtonUI text={textBtn} typeClass={typeClassBtn} type={typeBtn} onClick={openModal} />
      <section className={`w-screen h-screen overflow-hidden flex flex-col justify-center ${isOpenModal ? "" : "hidden"} fixed z-[9999] top-0 left-0 right-0 bg-black/50 backdrop-blur-lg`}>
        <div className='container flex flex-col items-center'>
          <div className='p-10 w-full bg-white rounded shadow-xl sm:w-[50vw] '>
            {
              content
            }
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Modal