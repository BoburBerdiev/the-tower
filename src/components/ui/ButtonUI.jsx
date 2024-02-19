
const ButtonUl = ({ typeClass, href , text , icon,onClick , btnNews, stylePadding, paddingFull, btnBorder }) => {

    return (
        <>

            {
                href 
                    ?
                    <a href={href} onClick={onClick} className={btnBorder ? `btn-border font-gilroy  ${stylePadding ? stylePadding : ` px-5 py-3.5 `} ${paddingFull && 'py-3.5 w-full'}  `  : ` btn-bg  font-gilroy ${stylePadding ? stylePadding : ` px-5 py-3.5 `} ${paddingFull && 'py-3.5 w-full'}  `}>
                        <span>
                            {text}
                        </span>
                        {
                            icon
                        }
                    </a>
                    :
                    <button onClick={onClick} className={btnBorder ? `btn-border font-gilroy  ${stylePadding ? stylePadding : ` px-5 py-3.5 `} ${paddingFull && 'py-3.5 w-full'}  `  : ` btn-bg  font-gilroy ${stylePadding ? stylePadding : ` px-5 py-3.5 `} ${paddingFull && 'py-3.5 w-full'}  `}>
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