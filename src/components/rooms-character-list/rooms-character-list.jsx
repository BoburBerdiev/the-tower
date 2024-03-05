
const RoomsCharacterList = ({room_size , capacity , num_balconies , num_bathrooms}) => {
    return (
        <div
            data-aos='fade-up'
            className='flex flex-wrap divide-x-2 divide-iron leading-normal gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-1 items-center text-iron font-roboto text-sm md:text-base lg:text-lg tracking-[0.4px] xl:text-xl '>

            <p className="px-3 text-center">{room_size} m</p>
            <p className="px-3 text-center">{capacity} m</p>
            <p className="px-3 text-center">{num_balconies} m</p>
            <p className="px-3 text-center">{num_bathrooms} m</p>
        </div>
    );
}

export default RoomsCharacterList;