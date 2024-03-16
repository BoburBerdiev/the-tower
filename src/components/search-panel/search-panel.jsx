import React, {useEffect, useRef, useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi";
import {HotelCard, ImgUI} from "@/components/index";
import {useTranslation} from "react-i18next";
import {useQuery, useQueryClient} from "react-query";
import useDebounce from "@/hook/useDebounce";
import apiService from "@/service/axois";
import {langSelect, PageWayRouter} from "@/helper";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

function SearchPanel() {
    const queryClient = useQueryClient();
    const [searchPanel, setSearchPanel] = useState(false)
    const { t } = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const [inputValue, setInputValue] = useState('')
    const debounceInputValue = useDebounce(inputValue, 700)

    const {
        refetch,
        data,
        isLoading
    } = useQuery('search-input', () => apiService.getData(`/rooms/?search=${debounceInputValue}`),
        {
            enabled: false
        })

    useEffect(() => {
        if (debounceInputValue !== "") {
            refetch()
        }
    }, [debounceInputValue])

    const onChangeSearch = (e) => {
        const text = e.target.value
        setInputValue(text)
    }
    const openSeachPanel = () => {
        setSearchPanel(true)
            document.body.classList.add('overflow-hidden')
    }
    const closeSeachPanel = () => {
        setSearchPanel(false)
        document.body.classList.remove('overflow-hidden')
        setInputValue('')
        queryClient.removeQueries('search-input');
    }
    if (searchPanel === true) {
        document.body.classList.add('overflow-hidden')
      }else if (searchPanel === false) {
        document.body.classList.remove('overflow-hidden')
      }


    return (
        <>
            <button onClick={openSeachPanel} className={'flex justify-center items-center p-2 md:border-0 border nav-btn'}>
                <CiSearch className="text-xl lg:text-2xl "/>
            </button>
            <div className={`fixed w-screen h-screen overflow-y-scroll flex flex-col items-center right-0 backdrop-blur-2xl bg-white/70 p-5 md:p-10 left-0 z-[102] duration-200 ${searchPanel ? "top-0" : "-top-[200%]"}`}>
                <button onClick={closeSeachPanel} className="self-end p-2 border duration-200 hover:bg-brown hover:text-white border-brown">
                    <TfiClose />
                </button>
                <div className="w-full md:max-w-[700px] mb-10 mt-5">
                    <input type="text" value={inputValue} id={'search'}
                           maxLength={20} onChange={e => onChangeSearch(e)} className=" w-full rounded-md p-2 md:p-3 lg:px-5 outline-none text-sm md:text-base font-roboto border text-gray-600  shadow-lg" />
                </div>
                {
                    data && data?.count > 0  ?
                        <div className="container grid grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-8">
                            {
                                data?.results?.map(card => (
                                    <div onClick={closeSeachPanel}>
                                        <HotelCard
                                            imgs={card?.images}
                                            key={card.id}
                                            id={card.id}
                                            cardTitle={langSelect(lang ,card?.title_ru, card?.title_en , card?.title_uz )}
                                            descriptions={card?.information}
                                            capacity={card?.capacity}
                                            num_balconies={card?.num_balconies}
                                            room_size={card?.room_size}
                                            num_bathrooms={card?.num_bathrooms}
                                            href={`/rooms/${card?.slug}`}
                                             />
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className='container flex flex-col items-center gap-5'>
                            <h2 className='text-4xl text-center font-elegance '>{t('notFound.text')}</h2>
                            <div className='w-full md:w-[500px] aspect-video lg:w-[600px] relative'>
                                <ImgUI src={'/image/no-room-found.png'} objectFitContain={true} alt={'not found'}/>
                            </div>
                        </div>
                }

            </div>
        </>
    );
}

export default SearchPanel;