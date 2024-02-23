import React, {useEffect, useState} from 'react'
import { IoCalendarOutline , IoChevronDown} from "react-icons/io5";
import {useForm } from "react-hook-form";


// type props = input type
// placeholder props = input placeholder
// labelText props = label content text
// id props = input id va label for attribute ucun
// name props = input name attribute ucun
// children props = date type li input ucun bola

const InputUl = ({type, placeholder, labelText,selectName, id, name, children, infoInput,selectList , formname}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [selectOption , setSelectOption] = useState('')
    const {register ,  setValue } = useForm();
    const inputHandler = (e) => {
        e.preventDefault()
        setOpenDropdown(!openDropdown)


    }

    useEffect(() => {
        console.log( selectOption)
        console.log(selectName)
        setValue(`${selectName}` , selectOption)
    } , [selectOption])
    return (
        <div className='space-y-3 flex flex-col w-full relative justify-end'>
            {
                labelText && <label htmlFor={id} className='font-roboto font-light tracking-[0.4px] md:text-lg xl:text-xl text-black   '>{labelText}</label>
            }
            {
                type === "select" ?
                    // <div className='relative flex flex-col justify-center'>
                    //     <select className='cursor-pointer appearance-none border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown' name={name} id={id}>
                    //         {
                    //             selectList && selectList.map((content) => <option value={content.value} key={content.id} className='bg-brown/60 text-white'>{content.value}</option>    )
                    //         }
                    //     </select>
                    //     <IoChevronDown  className='absolute right-5 z-10 text-xl'/>
                    // </div>

                    <>

                                <div>
                                    <button
                                        type="button"
                                        className="cursor-pointer appearance-none border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown"

                                        onClick={() => {
                                            setIsOpen(!isOpen)
                                        }}
                                    >
                                        {  selectOption || 'Select an option'}
                                    </button>
                                    {isOpen && (
                                        <div className="origin-top-right absolute z-50 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1">
                                                {selectList.map((content) => (
                                                    <div
                                                        key={content.id}
                                                        className="px-4 md:px-4 py-1 md:py-3 font-roboto text-black/80 hover:bg-brown/30  text-sm cursor-pointer z-50 "
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setSelectOption(content?.value)
                                                        }}
                                                    >
                                                        {content.value}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                    </>
                    :
                    <>
                        <div className='relative flex flex-col justify-center'>
                            <input  type={type} {...register(`${formname}`)} onClick={inputHandler} readOnly={type == 'date' ? true : false} placeholder={placeholder} name={name} id={id} className='cursor-pointer border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown' />
                            {
                                type == 'date' && <IoCalendarOutline onClick={inputHandler} className={`absolute duration-200 right-5 text-2xl cursor-pointer   ${openDropdown ? 'text-brown' : 'text-black' }`} />
                            }
                        </div>
                        {
                            type == 'date' &&  <div className={`py-5 w-full bg-red-600 absolute top-28 z-10 left-0 ${openDropdown ? 'block' : 'hidden'} `}>{children}</div>
                        }

                    </>
            }
            <p className='font-roboto font-light text-sm tracking-[0.32px] text-customGrey absolute -bottom-5'>{infoInput}</p>

        </div>
    )
}

export default InputUl