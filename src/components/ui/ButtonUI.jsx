
const ButtonUl = ({ href , text , icon,onClick , stylePadding, paddingFull, btnBorder, btnWhiteBorder }) => {

    return (
        <>

            {
                href 
                    ?
                    <a href={href} onClick={onClick} className={btnBorder ? ` ${paddingFull && 'py-3.5 w-full'} ${btnWhiteBorder ? 'btn-border-white' : 'btn-border'} font-gilroy  ${stylePadding ? stylePadding : ` px-5 py-3.5 `}   `  : ` ${paddingFull && 'py-3.5 w-full'}  btn-bg  font-gilroy ${stylePadding ? stylePadding : ` px-5 py-3.5 `}  `}>
                        <span>
                            {text}
                        </span>
                        {
                            icon
                        }
                    </a>
                    :
                    <button onClick={onClick} className={btnBorder ? ` ${paddingFull && 'py-3.5 w-full'} ${btnWhiteBorder ? 'btn-border-white' : 'btn-border'} font-gilroy  ${stylePadding ? stylePadding : ` px-5 py-3.5 `}   `  : ` ${paddingFull && 'py-3.5 w-full'}  btn-bg  font-gilroy ${stylePadding ? stylePadding : ` px-5 py-3.5 `}  `}>
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