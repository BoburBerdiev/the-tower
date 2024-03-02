import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation ,Pagination } from "swiper/modules";
import { ImgUI } from "@/components/";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {log} from "next/dist/server/typescript/utils";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const Slider = ({
  SliderContent,
  PaginationMod,
  innerBtn,
  PaginationInner,
  isLoading
}) => {
  const {lang} = useSelector(state => state.langSlice)

  console.log(SliderContent)
  return (
    <SkeletonTheme baseColor="#EBEAE8" highlightColor="#D7D3CE">
    <div
      className={`relative bg-transparent h-full  ${
        PaginationMod && "pb-6 md:pb-20"
      } ${PaginationMod ? "section-slider" : "header-slider"} `}
    >
      <Swiper
        className={`${
          PaginationMod ? "section-slider" : "header-slider"
        } w-full h-full`}
        spaceBetween={30}
        effect={"fade"}
        // autoplay={{
        //   delay: 5500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
          el: ".inner-pagination",
        }}
        navigation={{
          nextEl: ".swipper-button-next-btn",
          prevEl: ".swipper-button-prev-btn",
        }}
        modules={[EffectFade, Autoplay, Navigation , Pagination]}
      >
        {SliderContent?.map((slider) => (

          <SwiperSlide
            key={slider?.id}
            className="relative flex justify-center w-full h-full"
          >
            {
 slider.title_ru &&
            <div className="relative z-20 w-full h-full">
              <div className="container flex flex-col items-center justify-center h-full pb-10 space-y-5 ">

                <h2 data-aos='fade-up' data-aos-delay='0.1' className="text-center header-title w-full max-w-[1000px] drop-shadow-lg">{

                  isLoading ? <Skeleton duration={1} height={'100%'} width={'100%'} /> : langSelect(lang ,slider?.title_ru, slider?.title_en , slider?.title_uz )
                  }</h2>
                  {
                    slider.sub_title_ru && <p data-aos='fade-up' data-aos-delay='50' className="lowercase drop-shadow-lg text-white text-center max-w-[700px] roboto-light tracing-[0.48px] sm:text-lg w-full  lg:text-xl xl:text-2xl">
                      {langSelect(lang ,slider?.sub_title_ru, slider?.sub_title_en , slider?.sub_title_uz )}
                  </p>
                  }

              </div>
            </div>


            }
            <div className="absolute w-full h-full z-10 top-0 left-0 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[11] before:bg-[#00000040]">
             <ImgUI  objectFit="object-cover" src={slider?.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {innerBtn && (
        <div data-aos='zoom-in' data-aos-delay='50' className="absolute z-20 flex items-center justify-center w-full bottom-10 md:bottom-20">
          <button className="p-3 border border-white rounded-full ">
            <HiChevronDown className="text-xl text-white md:text-3xl" />
          </button>
        </div>
      )}

      {PaginationMod && (
        <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev-btn ">
            <GrPrevious className="text-2xl" />
          </div>
          <div className="inline-flex items-center gap-x-4 inner-pagination "></div>

          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next-btn ">
            <GrNext className="text-2xl" />
          </div>
        </div>
      )}

      {PaginationInner && (
        <div className="room-slider flex items-center justify-center  gap-x-5 absolute w-full bottom-[30px] left-0 z-50">
          <div className="flex gap-x-2">
            <div className="inline-flex items-center gap-x-4 inner-pagination "></div>
          </div>
        </div>
      )}
    </div>
    </SkeletonTheme>
  );
};

export default Slider;
