import {ImgUI} from "@/components";

const SectionUI = ({children , bgGold, padding  , bgFigureTopPostion  ,bgFigureBottomPostion,centerFigure}) => {


  // bgFigureTopPostion  2ta qiymat keliw kk (top left  yoki bottom right)
  return (
    <>
        <section className={`relative overflow-hidden ${bgGold ? 'bg-brown py-10  md:py-[90px]' : `bg-white  ${padding}`}`}>
          
          {
            bgFigureTopPostion &&
          <div className={` ${bgFigureTopPostion ? bgFigureTopPostion : " top-0 left-0"} absolute  w-full  h-[300px] z-[1] hidden md:block`}>
            <ImgUI src={'/image/pattern.png'} objectFit={'object-cover'} />
          </div>
          }
          {
            centerFigure &&
            <div className="h-full w-[30%] hidden lg:block absolute top-0 right-0 z-[1]">
            <ImgUI src={'/image/room-figure.png'} objectFit={'object-cover'}/>
          </div>
          }
          <div className="container relative z-[6]">
          {
            children
          }
          </div>
          
          {
            bgFigureBottomPostion &&
          <div className={` ${bgFigureBottomPostion ? bgFigureBottomPostion : " bottom-0 left-0"} absolute  w-full  h-[300px] z-[1]`}>
            <ImgUI src={'/image/pattern.png'} objectFit={'object-cover'} />
          </div>
          }
        </section>
    </>
  )
}

export default SectionUI