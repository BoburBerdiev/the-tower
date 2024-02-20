
const TypeRoom = ({type,setTypeRoom}) => {
    return (
        <div className={'bg-white shadow-md border border-brown'}>
            {
                type.map((item,ind)=> (
                    <div key={ind}
                         className={`px-4 md:px-4 py-1 md:py-3 font-roboto text-black/80 hover:bg-brown/30  text-base cursor-pointer  `}
                        onClick={()=>setTypeRoom(item)}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    );
};

export default TypeRoom;