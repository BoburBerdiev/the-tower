import React, {useEffect, useState} from 'react';
import {FiMinus} from "react-icons/fi";
import {FaPlus} from "react-icons/fa6";
import {ButtonUI} from "@/components";
import { useTranslation } from 'react-i18next';

const NumberGuests = ({guests,setGuests}) => {
    const [countRoom, setCountRoom] = useState(0)
    const [countOlder, setCountOlder] = useState(0)
    const [countChildren, setCountChildren] = useState(0)
    const {t} = useTranslation()
    const handleIncrement=(type)=>{
        if (type==='room'){
            setCountRoom(prevState => prevState+1)
        }else if(type==='older'){
            setCountOlder(prevState => prevState+1)
        }else if(type==='child'){
            setCountChildren(prevState => prevState+1)
        }
    }
    const handleDecrement=(type)=>{
        if (type==='room'&&countRoom>0){
            setCountRoom(prevState => prevState-1)
        }else if(type==='older'&&countOlder>0){
            setCountOlder(prevState => prevState-1)
        }else if(type==='child'&&countChildren>0){
            setCountChildren(prevState => prevState-1)
        }
    }

    useEffect(() => {
        const roomChange={...guests,room:countRoom}
        setGuests(roomChange)
    }, [countRoom]);
    useEffect(() => {
        const roomChange={...guests,older:countOlder}
        setGuests(roomChange)
    }, [countOlder]);
    useEffect(() => {
        const roomChange={...guests,children:countChildren}
        setGuests(roomChange)
    }, [countChildren]);


    return (
        <div className={'border shadow-md border-brown'}>
            <div className={'flex items-center justify-between   px-3 py-1 bg-brown w-full'}>
                <p className={'font-elegance text-white'}>
                    {t('index.headerBooking.roomNumber')}
                </p>
                <div className={'flex items-center gap-2'}>
                    <ButtonUI stylePadding={'group p-2 rounded-full before:rounded-full after:rounded-full'}  icon={<FiMinus className={'text-sm text-white'}/>}
                                btnBorder={true}
                                onClick={()=>handleDecrement('room')}
                    />
                    <p className={'font-roboto  text-xl text-white'}>{countRoom}</p>
                    <ButtonUI stylePadding={'group p-2 rounded-full before:rounded-full after:rounded-full '} icon={<FaPlus className={'text-sm text-white'}/>}
                              btnBorder={true}
                                onClick={()=>handleIncrement('room')}
                    />
                </div>
            </div>
            <div className={'bg-white  px-3 py-4'}>
                
                <div className={'grid grid-cols-2 gap-3'}>

                    <div className={'gap-y-1 flex flex-col items-center'}>
                        <div className={'flex items-center gap-2'}>
                            <ButtonUI stylePadding={'group p-2 rounded-full before:rounded-full after:rounded-full '} icon={<FiMinus className={'text-sm text-black/80 group-hover:text-white duration-500 '}/>}
                                      btnBorder={true}
                                      onClick={() => handleDecrement('older')}
                            />
                            <p className={'font-roboto  text-xl text-black/80'}>{countOlder}</p>
                            <ButtonUI stylePadding={'group p-2 rounded-full before:rounded-full after:rounded-full '} icon={<FaPlus className={'text-sm text-black/80 group-hover:text-white duration-500 '}/>}
                                      btnBorder={true}
                                      onClick={() => handleIncrement('older')}
                            />
                        </div>

                        <p className={'font-roboto  text-center text-xs'}>
                            {t('index.headerBooking.adults')}
                        </p>
                    </div>
                    <div className={'gap-y-1 flex flex-col items-center'}>
                        <div className={'flex items-center gap-2'}>
                            <ButtonUI stylePadding={'group p-2 rounded-full before:rounded-full after:rounded-full '} icon={<FiMinus className={'text-sm text-black/80 group-hover:text-white duration-500 '}/>}
                                      btnBorder={true}
                                      onClick={() => handleDecrement('child')}
                            />
                            <p className={'font-roboto  text-xl text-black/80'}>{countChildren}</p>
                            <ButtonUI stylePadding={'group p-2 rounded-full before:rounded-full after:rounded-full '} icon={<FaPlus className={'text-sm text-black/80 group-hover:text-white duration-500 '}/>}
                                      btnBorder={true}
                                      onClick={() => handleIncrement('child')}
                            />
                        </div>

                        <p className={'font-roboto  text-center text-xs'}>
                        {t('index.headerBooking.forChildren')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberGuests;