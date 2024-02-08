
const ButtonUl = ({ typeClass, href , text , icon,onClick }) => {

    return (
        <>

            {
                href ?
                    <a href={href}  className={`${typeClass}    ${icon ? 'btn-link': 'py-2.5 px-4 text-sm md:py-3.5 md:px-5 md:text-lg font-roboto border leading-normal'}`}>
                        {
                            text
                        }
                        {
                            icon
                        }
                    </a>
                    :
                    <button onClick={onClick} className={`${typeClass} ${!icon &&  'py-2.5 px-4  md:py-3.5 md:px-5'} text-sm  md:text-lg font-roboto leading-normal  `}>
                        {
                            text
                        }
                        {
                            icon
                        }
                    </button>
            }


        </>
    )
}

export default ButtonUl