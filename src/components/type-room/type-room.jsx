
const TypeRoom = ({type,setTypeRoom}) => {
    return (
        <div className={'bg-white border border-brown w-[200px] md:w-[150px]'}>
            {
                type.map((item,ind)=> (
                    <div key={ind}
                         className={`px-4 md:px-1 py-2 md:py-4 font-roboto font-light text-base cursor-pointer ${ind===0 ? "" : "border-t-brown border"}  `}
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