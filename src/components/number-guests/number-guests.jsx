import React, {useEffect, useState} from 'react';
import {FiMinus} from "react-icons/fi";
import {FaPlus} from "react-icons/fa6";
import {ButtonUI} from "@/components";

const NumberGuests = ({guests,setGuests}) => {
    const [countRoom, setCountRoom] = useState(0)
    const [countOlder, setCountOlder] = useState(0)
    const [countChildren, setCountChildren] = useState(0)

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
            <div className={'flex items-center justify-between   px-5 py-2 bg-brown w-full'}>
                <p className={'font-elegance text-white'}>
                    номеров
                </p>
                <div className={'flex items-center gap-2'}>
                    <ButtonUI   icon={<FiMinus className={'text-sm text-white'}/>}
                                btnBorder={true}
                                onClick={()=>handleDecrement('room')}
                    />
                    <p className={'font-roboto  text-xl text-white'}>{countRoom}</p>
                    <ButtonUI icon={<FaPlus className={'text-sm text-white'}/>}
                              btnBorder={true}
                                onClick={()=>handleIncrement('room')}
                    />
                </div>
            </div>
            <div className={'bg-white px-7 py-2 space-y-1.5'}>
                <h6 className={'font-roboto font-bold text-center text-sm'}>
                    номер 01
                </h6>
                <div className={'grid grid-cols-2 gap-3'}>

                    <div className={'space-y-1'}>
                        <div className={'flex items-center gap-2'}>
                            <ButtonUI icon={<FiMinus className={'text-sm text-black/80'}/>}
                                      btnBorder={true}
                                      onClick={() => handleDecrement('older')}
                            />
                            <p className={'font-roboto  text-xl text-black/80'}>{countOlder}</p>
                            <ButtonUI icon={<FaPlus className={'text-sm text-black/80'}/>}
                                      btnBorder={true}
                                      onClick={() => handleIncrement('older')}
                            />
                        </div>

                        <p className={'font-roboto  text-center text-sm'}>
                            взрослих
                        </p>
                    </div>
                    <div className={'space-y-1 '}>
                        <div className={'flex items-center gap-5'}>
                            <ButtonUI icon={<FiMinus className={'text-green-700'}/>}
                                      typeClass={'rounded-full bg-gray-300 px-1 py-1 '}
                                      onClick={() => handleDecrement('child')}
                            />
                            <p className={'font-roboto font-thin text-xl'}>{countChildren}</p>
                            <ButtonUI icon={<FaPlus className={'text-red-700'}/>}
                                      typeClass={'rounded-full bg-gray-300 px-1 py-1 '}
                                      onClick={()=>handleIncrement('child')}
                            />
                        </div>
                        <p className={'font-roboto  text-center text-sm'}>
                            детей (0-11 лет)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberGuests;