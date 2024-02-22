
const RoomsCharacterList = ({list}) => {
    return (
        <div
            className='flex flex-wrap leading-normal gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>
            {list &&  list?.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default RoomsCharacterList;