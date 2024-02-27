import {useState} from "react";

const SelectOptionUI = ({selectList ,labelText  ,SelectOptionName, setSelectOptionName ,labelOption}) => {
    const [isOpen, setIsOpen] = useState(false);
        const selectInputValue = (value) =>{
            if(setSelectOptionName) {
                setSelectOptionName(
                    {
                        name: labelOption ,
                        value: value.value
                    }
                )

            }

            setIsOpen(prev => !prev)
        }
        return (
        <div>
            <div className='space-y-3 relative flex flex-col w-full justify-end'>
                {
                    labelText && <label className='font-roboto font-light tracking-[0.4px] md:text-lg xl:text-xl text-black   '>{labelText}</label>
                }

            <button
                type="button"
                className="cursor-pointer appearance-none border border-black rounded-none outline-none p-3 lg:p-5 w-full font-roboto font-light tracking-[0.36px] xl:text-lg duration-300 focus:border-brown text-left"

                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                {SelectOptionName || 'Select an option'}
            </button>
            {isOpen && (
                <div
                    className="origin-top-right absolute z-50 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {selectList.map((content) => (
                            <div
                                key={content.id}
                                className="px-4 md:px-4 py-1 md:py-3 font-roboto text-black/80 hover:bg-brown/30  text-sm cursor-pointer z-50 "
                                onClick={() => selectInputValue(content)}
                            >
                                {content.value}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            </div>

        </div>
    );
};

export default SelectOptionUI;