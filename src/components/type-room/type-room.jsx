import {useDispatch} from "react-redux";
import {changleTypeBooking} from "@/slice/booking";

const TypeRoom = ({type}) => {

    const dispatch = useDispatch()

    const selectType = (item) => {
        dispatch(changleTypeBooking(item))

    }

    return (
        <div className={'bg-white z-50 shadow-md border border-brown'}>
            {
                type.map((item,ind)=> (
                    <div key={ind}
                         className={`px-4 md:px-4 py-1 md:py-3 font-roboto text-black/80 hover:bg-brown/30  text-sm cursor-pointer  `}
                        onClick={()=>selectType(item)}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    );
};

export default TypeRoom;