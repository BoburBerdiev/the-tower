import React from 'react'

const SectionTextUI = ({content, style}) => {
  return (
    <>
      <p className={`${style} roboto-light  `}>{content}</p>
    </>
  )
}

export default SectionTextUI