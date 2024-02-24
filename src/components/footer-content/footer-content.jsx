import { useTranslation } from "react-i18next"

const FooterContent = ({title , list, paragraph, hrefText}) => {
  const {t} = useTranslation()
  return (
    <>
    <div>
            <h3 className='mb-2 text-xl md:text-2xl font-openSans'>{title}</h3>
            <ul className='space-y-2 font-light font-openSans  '>
              {
                list?.map((item , index) => (
                  <li key={index}>
                    <a href={item.link}>
                      {item.name}
                    </a></li>
                ))
              }
              {
                paragraph && 
                <p className='font-light font-openSans mb-1'>{paragraph}</p>
              }
              {
                hrefText && 
                <a href={hrefText} className=' text-iron font-light font-openSans underline decoration-1'>{t('links.viewReviews')}</a>
              }
            </ul>
          </div>
    </>
  )
}

export default FooterContent