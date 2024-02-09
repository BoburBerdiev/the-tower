import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation ,Pagination } from "swiper/modules";
import { ImgUI } from "@/components/";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const Slider = ({
  SliderContent,
  PaginationMod,
  innerBtn,
  PaginationInner,
  isLoading
}) => {
  return (
    <SkeletonTheme baseColor="#EBEAE8" highlightColor="#D7D3CE">
    <div
      className={`relative bg-transparent h-full  ${
        PaginationMod && "pb-8 md:pb-[90px]"
      } ${PaginationMod ? "section-slider" : "header-slider"} `}
    >
      <Swiper
        className={`${
          PaginationMod ? "section-slider" : "header-slider"
        } w-full h-full`}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".my-pagination",
        }}
        navigation={{
          nextEl: ".swipper-button-next",
          prevEl: ".swipper-button-prev",
        }}
        modules={[EffectFade, Autoplay, Navigation , Pagination]}
      >
        {SliderContent?.map((slider, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center w-full h-full"
          >
            <div className="relative z-20 w-full h-full">
              <div className="container flex flex-col items-center justify-center h-full pb-10 space-y-5">
                <h2 data-aos='fade-up' data-aos-delay='0.1' className="text-center header-title w-full max-w-[1000px]">{
                    isLoading ? <Skeleton duration={1} height={'100%'} width={'100%'} /> : slider.title
                  }</h2>
                  {
                    slider.subTitle && <p data-aos='fade-up' data-aos-delay='50' className="lowercase text-white text-center max-w-[700px] roboto-light tracing-[0.48px] sm:text-lg w-full  lg:text-xl xl:text-2xl">
                    {
                      isLoading ? <Skeleton duration={1} height={'100%'} width={'100%'} /> : slider.subTitle
                    }
                  </p>
                  }
                
              </div>
            </div>
            <div className="absolute w-full h-full z-10 top-0 left-0 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[11] before:bg-[#00000088]">
            {
              isLoading ? <Skeleton duration={2} height={'100%'} width={'100%'} /> : <ImgUI  objectFit="object-cover" src={slider.img} />
            }
              
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
          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev ">
            <GrPrevious className="text-2xl" />
          </div>
          <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>

          <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next ">
            <GrNext className="text-2xl" />
          </div>
        </div>
      )}

      {PaginationInner && (
        <div className="room-slider flex items-center justify-center  gap-x-5 absolute w-full bottom-[30px] left-0 z-50">
          <div className="flex gap-x-2">
            <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>
          </div>
        </div>
      )}
    </div>
    </SkeletonTheme>
  );
};

export default Slider;
