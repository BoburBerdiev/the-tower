import {Booking , Slider} from "@/components";

const Header = ({home}) => {
  return (
    <>

    
    <header className='relative h-screen'> 
      <Slider  SliderContent={home} isHeader={true}   PaginationMod={false} />
        <Booking/>
    </header>
    </>
  )
}

export default Header