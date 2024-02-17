
const ButtonUl = ({ typeClass, href , text , icon,onClick , btnNews }) => {

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
            {
                btnNews &&
                <button className="">
                    <a href="#" className="uppercase relative text-black block text-2xl py-[15px] px-[30px] before:absolute before:top-0 before:left-0 before:w-full  before:h-full  before:bg-brown  before:z-[1]  before:transition-transform  before:duration-500  before:transform  before:origin-bottom-right before:scale-0 hover:before:scale-100 hover:before:origin-top-left   after:absolute after:top-0 after:left-0 after:w-full  after:h-full   after:z-[1]  after:transition-transform  after:duration-500  after:transform  after:origin-bottom-right after:border ">Button</a>
                </button>
            }

        </>
    )
}

export default ButtonUl