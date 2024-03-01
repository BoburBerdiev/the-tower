import { SectionTitle, Slider} from "@/components";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";
const roomsInner =[
    {
        img: "/image/IMG_7363-min.jpg"
    },
    {
        img: "/image/IMG_7361-min.jpg"
    },
    {
        img: "/image/IMG_7362-min.jpg"
    },
]
const ImgBoxFlex = ({ title_ru , title_uz , title_en, subTitle_ru , subTitle_uz ,subTitle_en,   imgOrder }) => {

    const {lang} = useSelector(state => state.langSlice)
  return (
    <div className="grid items-center grid-cols-1 gap-8   md:grid-cols-2 md:gap-10 lg:gap-16">
      <div
        className={`${
          imgOrder ? "order-2" : "order-1"
        }  space-y-4 md:space-y-8`}
      >
        <SectionTitle title_ru={title_ru} title_en={title_en} title_uz={title_uz} />
        <p  data-aos='fade-up' data-aos-delay='200' className="text-justify section-text">{langSelect(lang ,subTitle_ru, subTitle_en , subTitle_uz )}</p>
      </div>
      <div
      data-aos='zoom-in'
      data-aos-delay='150'
        className={`${
          imgOrder ? "order-1" : "order-2"
        } w-full aspect-video md:aspect-[16/14] room-slider`}
      >
          <Slider SliderContent={roomsInner} PaginationInner={true}/>
      </div>
    </div>
  );
};

export default ImgBoxFlex;
