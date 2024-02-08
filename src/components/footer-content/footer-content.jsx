import React from 'react'

const FooterContent = ({title , list}) => {
  return (
    <>
    <div>
            <h3 className='mb-3 text-xl md:text-2xl'>{title}</h3>
            <ul className='space-y-2 font-roboto font-light  '>
              {
                list.map((item , index) => (
                  <li key={index}><a href={item.link}>
                    {item.name}
                    </a></li>
                ))
              }
            </ul>
          </div>
    </>
  )
}

export default FooterContent