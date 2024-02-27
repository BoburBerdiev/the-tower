import Link from "next/link";

const ButtonUl = ({ href , text , icon,onClick , stylePadding, paddingFull, btnBorder, btnWhiteBorder, type, target }) => {

    return (
        <>

            {
                href 
                    ?
                    <Link href={href} onClick={onClick} target={target} className={btnBorder ? ` ${paddingFull && 'py-3.5 w-full'} ${btnWhiteBorder ? 'btn-border-white' : 'btn-border'} font-gilroy  ${stylePadding ? stylePadding : ` px-5 py-3.5 `}   `  : ` ${paddingFull && 'py-3.5 w-full'}  btn-bg  font-gilroy ${stylePadding ? stylePadding : ` px-5 py-3.5 `}  `}>
                        <span>
                            {text}
                        </span>
                        {
                            icon
                        }
                    </Link>
                    :
                    <button type={type} onClick={onClick} className={btnBorder ? ` ${paddingFull && ' spy-3.5 w-full'} ${btnWhiteBorder ? 'btn-border-white' : 'btn-border'} font-gilroy  ${stylePadding ? stylePadding : ` px-5 py-3.5 `}   `  : ` ${paddingFull && 'py-3.5 w-full'}  btn-bg  font-gilroy ${stylePadding ? stylePadding : ` px-5 py-3.5 `}  `}>
                        <span>
                            {text}
                        </span>
                        {
                            icon
                        }
                    </button>
            }

        </>
    )
}

export default ButtonUl